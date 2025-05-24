import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import * as Print from 'expo-print';
import { useRouter } from 'expo-router';
import * as Sharing from 'expo-sharing';
import React, { useRef, useState } from 'react';
import { Modal, Pressable, TouchableOpacity } from 'react-native';
import UploadStyles from './styles/UploadStyles';

import {
  ActivityIndicator,
  Alert,
  Animated,
  Button,
  Image,
  Text,
  View,
} from 'react-native';

export default function UploadScreen() {
  const router = useRouter();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [pdfUri, setPdfUri] = useState<string | null>(null);
  const [result, setResult] = useState<{
    model: string;
    name: string;
    predicted_class: number;
    accuracy: string;
    remedy: string;
    subject_risk: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const [instructionVisible, setInstructionVisible] = useState(true);
  const instructionOpacity = useRef(new Animated.Value(1)).current;
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Helper: clear state on error and restore instruction image
  const handleError = (msg: string) => {
    setErrorMessage(msg);
    setImageUri(null);  // Hide invalid image immediately
    setResult(null);    // Clear old result

    // Restore instruction image visibility and opacity
    setInstructionVisible(true);
    Animated.timing(instructionOpacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  // Pick image from gallery
  const pickImage = async () => {
    if (loading) return; // Prevent multiple triggers during loading

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission Required', 'Permission to access media library is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: false,
    });

    if (!pickerResult.canceled) {
      const uri = pickerResult.assets[0].uri;

      // Clear old results & image before new upload
      setImageUri(uri);
      setResult(null);
      setPdfUri(null);

      Animated.timing(instructionOpacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setInstructionVisible(false);
      });

      setTimeout(() => uploadImage(uri), 200);
    }
  };

  // Capture image from camera
  const captureImage = async () => {
    if (loading) return; // Prevent multiple triggers during loading

    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission Required', 'Permission to access camera is required!');
      return;
    }

    const cameraResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      base64: false,
    });

    if (!cameraResult.canceled) {
      const uri = cameraResult.assets[0].uri;

      setImageUri(uri);
      setResult(null);
      setPdfUri(null);

      Animated.timing(instructionOpacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setInstructionVisible(false);
      });

      setTimeout(() => uploadImage(uri), 200);
    }
  };

  // Upload image to backend for prediction
  const uploadImage = async (uri?: string) => {
    const imageToUpload = uri || imageUri;
    if (!imageToUpload) return;

    setLoading(true);
    setErrorMessage(null); // Clear any previous errors

    const formData = new FormData();
    formData.append('file', {
      uri: imageToUpload,
      type: 'image/jpeg',
      name: 'eye.jpg',
    } as any);

    try {
      const response = await axios.post(
        'https://873f-2401-4900-8fcc-e5f5-100b-19d2-37bc-2a90.ngrok-free.app/predict',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.result && response.data.result.length > 0) {
        setResult(response.data.result[0]);
      } else {
        handleError('No prediction result found. Please try with a valid retina image.');
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          handleError('Invalid image. Please upload a valid retina image.');
        } else if (error.response.status === 404) {
          handleError('Server endpoint not found. Please try again later.');
        } else {
          handleError('Failed to upload image. Please try again.');
        }
      } else {
        handleError('Network error. Please check your internet connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Generate PDF report and share
  const sharePDF = async () => {
    if (!result || !imageUri) return;

    const currentDate = new Date();
    const dateStr = currentDate.toLocaleDateString();
    const timeStr = currentDate.toLocaleTimeString();

    const logoAsset = Asset.fromModule(require('../assets/images/eyeand.png'));
    await logoAsset.downloadAsync();
    const logoBase64 = await FileSystem.readAsStringAsync(logoAsset.localUri || logoAsset.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const uploadedImageBase64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

const logoDataUrl = `data:image/png;base64,${logoBase64}`;
const uploadedDataUrl = `data:image/jpeg;base64,${uploadedImageBase64}`;


    const html = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 24px;
              color: #222;
              position: relative;
            }
            h1 { color: #1e90ff; }
            p { font-size: 16px; margin: 6px 0; }
            strong { color: #333; }
            .logo { width: 120px; margin-bottom: 20px; border-radius: 12px; }
            .section { margin-top: 15px; }
            .uploaded-image { margin-top: 20px; }
            .uploaded-image img { width: 250px; height: auto; border-radius: 10px; }
            .issued { margin-top: 30px; }
            .disclaimer, .footer { font-size: 14px; margin-top: 20px; color: #666; }
            .note { font-style: italic; margin-top: 10px; }

            .watermark {
              position: fixed;
              top: 40%;
              left: 30%;
              opacity: 0.1;
              font-size: 48px;
              transform: rotate(-30deg);
              z-index: -1;
            }
          </style>
        </head>
        <body>
          <div class="watermark">DRUSHTI REPORT</div>
          <h1>Eye Disease Detection Report</h1>

          <div class="uploaded-image">
            <h3>Uploaded Eye Image</h3>
            <img src="${uploadedDataUrl}" alt="Uploaded Eye Image" />
          </div>

          <div class="section">
            <p><strong>Prediction:</strong> ${result.name}</p>
            <p><strong>Confidence:</strong> ${result.accuracy}</p>
            <p><strong>Recommended Remedy:</strong> ${result.remedy}</p>
          </div>

          <div class="section">
            <h3>💬 Doctor's Interpretation</h3>
            <p>Our AI-based diagnostic model has identified features consistent with <strong>${result.name}</strong> in the submitted eye image. This condition may require early treatment to avoid complications.</p>
          </div>

          <p class="note">It is advised to consult a doctor for further confirmation.</p>

          <div class="issued">
            <h4>🏥 Issued by:</h4>
            <p><strong>Drushti</strong></p>
            <p><strong>Time:</strong> ${timeStr}</p>
            <p><strong>Date:</strong> ${dateStr}</p>
          </div>

          <div class="disclaimer">
            <h4>📌 Disclaimer</h4>
            <p>This report is automatically generated by an AI model. It is not a substitute for a certified medical opinion. Please consult your healthcare provider for further evaluation and treatment.</p>
          </div>
        </body>
      </html>
    `;

    const { uri } = await Print.printToFileAsync({ html });
    setPdfUri(uri);
    await Sharing.shareAsync(uri);
  };

  return (
    <View style={UploadStyles.container}>
      <TouchableOpacity style={UploadStyles.backButton} onPress={() => router.push('/')} disabled={loading}>
        <Ionicons name="arrow-back" size={28} color={loading ? '#ccc' : '#007AFF'} />
      </TouchableOpacity>
      <Text style={UploadStyles.title}>UPLOAD IMAGE</Text>

      {instructionVisible && (
        <Animated.Image
          source={require('../assets/images/int.png')}
          style={[UploadStyles.instructionImage, { opacity: instructionOpacity }]}
          resizeMode="contain"
        />
      )}

      {/* Only show image preview if there's an image and no error */}
      {imageUri && !errorMessage && (
        <View style={UploadStyles.previewWrapper}>
          <Image source={{ uri: imageUri }} style={UploadStyles.previewImage} />
          <Button title="Upload Image Again" onPress={() => uploadImage()} disabled={loading} />
        </View>
      )}

      {/* Show error message modal */}
      <Modal
        visible={!!errorMessage}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setErrorMessage(null)}
      >
        <View style={UploadStyles.modalOverlay}>
          <View style={UploadStyles.modalContent}>
            <Text style={UploadStyles.errorText}>{errorMessage}</Text>
            <Button title="OK" onPress={() => setErrorMessage(null)} />
          </View>
        </View>
      </Modal>

      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginVertical: 20 }} />}

      {result && (
        <View style={UploadStyles.resultContainer}>
          <Text style={UploadStyles.resultText}>Result: {result.name}</Text>
          <Text style={UploadStyles.resultText}>Confidence: {result.accuracy}</Text>
          <Text style={UploadStyles.resultText}>Remedy: {result.remedy}</Text>
          <Text style={UploadStyles.resultText}>Risk: {result.subject_risk}</Text>
          <Button title="Share PDF Report" onPress={sharePDF} />
        </View>
      )}

      <View style={UploadStyles.buttonRow}>
        <Pressable style={UploadStyles.button} onPress={pickImage} disabled={loading}>
          <Text style={UploadStyles.buttonText}>Pick Image</Text>
        </Pressable>
        <Pressable style={UploadStyles.button} onPress={captureImage} disabled={loading}>
          <Text style={UploadStyles.buttonText}>Capture Image</Text>
        </Pressable>
      </View>
    </View>
  );
}