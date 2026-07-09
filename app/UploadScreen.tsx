import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import * as Print from 'expo-print';
import { useRouter } from 'expo-router';
import * as Sharing from 'expo-sharing';
import * as Speech from 'expo-speech';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Animated, Image, Modal, Pressable, ScrollView, Text, View } from 'react-native';
import BackChevron from '../components/BackChevron';
import { colors } from '../constants/theme';
import { useVoice } from '../context/VoiceProvider';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import UploadStyles from './styles/UploadStyles';

export default function UploadScreen() {
  const router = useRouter();
  const { contentMaxWidth, contentWidth, isCompact, isLargePhone, isTiny, screenPadding } = useResponsiveLayout();

 const { voiceEnabled } = useVoice();
  
    useEffect(() => {
    if (voiceEnabled) {
      Speech.speak("Upload");
    } else {
      Speech.stop();
    }
    // Cleanup also stops speech if component unmounts
    return () => {
      Speech.stop();
    };
  }, [voiceEnabled]);

  const [imageUri, setImageUri] = useState<string | null>(null);
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
        'https://9ffa742da86a.ngrok-free.app/predict',
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

    const logoAsset = Asset.fromModule(require('../assets/images/appicon6.png'));
    await logoAsset.downloadAsync();
    const logoBase64 = await FileSystem.readAsStringAsync(logoAsset.localUri || logoAsset.uri, {
      encoding: 'base64',
    });
    const uploadedImageBase64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: 'base64',
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
              color: #0e2b64;
              position: relative;
              background: #ffffff;
            }
            h1 { color: #2f74d6; }
            p { font-size: 16px; margin: 6px 0; }
            strong { color: #163b88; }
            .logo { width: 120px; margin-bottom: 20px; border-radius: 12px; }
            .section { margin-top: 15px; }
            .uploaded-image { margin-top: 20px; }
            .uploaded-image img { width: 250px; height: auto; border-radius: 10px; border: 1px solid #d8e5fa; }
            .issued { margin-top: 30px; }
            .disclaimer, .footer { font-size: 14px; margin-top: 20px; color: #5f718f; }
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
          <img class="logo" src="${logoDataUrl}" alt="Drushti logo" />
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
    await Sharing.shareAsync(uri);
  };

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={[
        UploadStyles.container,
        {
          paddingBottom: isTiny ? 104 : 120,
          paddingHorizontal: screenPadding,
          paddingTop: isTiny ? 8 : 16,
        },
      ]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={[UploadStyles.content, { maxWidth: contentMaxWidth }]}>
      <View style={UploadStyles.header}>
        <BackChevron onPress={() => router.back()} />
        <Text
          numberOfLines={1}
          style={[
            UploadStyles.title,
            isCompact && UploadStyles.titleCompact,
            isLargePhone && UploadStyles.titleLarge,
          ]}
        >
          Upload Retina Image
        </Text>
        <View style={UploadStyles.headerSpacer} />
      </View>

      {instructionVisible && (
        <Animated.View style={[UploadStyles.instructionCard, { opacity: instructionOpacity }]}>
          <View style={UploadStyles.instructionCopy}>
            <Text style={[UploadStyles.instructionTitle, isTiny && UploadStyles.instructionTitleCompact]}>
              Add a clear retina photo
            </Text>
            <Text style={UploadStyles.instructionText}>
              Keep the eye centered, well lit, and free from blur or glare.
            </Text>
          </View>
          <Image
            source={require('../assets/images/int.png')}
            style={[
              UploadStyles.instructionImage,
              { height: Math.min(contentWidth * (isTiny ? 0.62 : 0.7), isTiny ? 205 : 285) },
            ]}
            resizeMode="contain"
          />
        </Animated.View>
      )}

      {/* Only show image preview if there's an image and no error */}
      {imageUri && !errorMessage && (
        <View style={UploadStyles.previewWrapper}>
          <Image
            source={{ uri: imageUri }}
            style={[UploadStyles.previewImage, { height: Math.min(contentWidth * 0.62, 300) }]}
            resizeMode="cover"
          />
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
            <Pressable style={UploadStyles.button} onPress={() => setErrorMessage(null)}>
              <Text style={UploadStyles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {loading && <ActivityIndicator size="large" color={colors.primary} style={{ marginVertical: 20 }} />}
      {loading && <Text style={UploadStyles.loadingText}>Analyzing retina image…</Text>}

      {result && (
        <View style={UploadStyles.resultContainer}>
          <View style={UploadStyles.resultHeading}>
            <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
            <Text style={UploadStyles.resultTitle}>Analysis complete</Text>
          </View>
          <Text style={UploadStyles.resultLabel}>Result</Text>
          <Text style={UploadStyles.resultText}>{result.name}</Text>
          <Text style={UploadStyles.resultLabel}>Confidence</Text>
          <Text style={UploadStyles.resultText}>{result.accuracy}</Text>
          <Text style={UploadStyles.resultLabel}>Recommended remedy</Text>
          <Text style={UploadStyles.resultText}>{result.remedy}</Text>
          <Text style={UploadStyles.resultLabel}>Risk</Text>
          <Text style={UploadStyles.resultText}>{result.subject_risk}</Text>
          <Pressable style={[UploadStyles.button, UploadStyles.reportButton]} onPress={sharePDF}>
            <Ionicons name="share-outline" size={20} color={colors.card} />
            <Text style={UploadStyles.buttonText}>Share PDF Report</Text>
          </Pressable>
        </View>
      )}

      <View style={[UploadStyles.buttonRow, isCompact && UploadStyles.buttonRowStacked]}>
        <Pressable style={[UploadStyles.button, UploadStyles.buttonInRow]} onPress={pickImage} disabled={loading}>
          <Ionicons name="images-outline" size={20} color={colors.card} />
          <Text style={UploadStyles.buttonText}>{imageUri ? 'Choose Another' : 'Choose Photo'}</Text>
        </Pressable>
        <Pressable
          style={[UploadStyles.button, UploadStyles.buttonSecondary, UploadStyles.buttonInRow]}
          onPress={captureImage}
          disabled={loading}
        >
          <Ionicons name="camera-outline" size={20} color={colors.primary} />
          <Text style={[UploadStyles.buttonText, UploadStyles.buttonSecondaryText]}>Take Photo</Text>
        </Pressable>
      </View>
      </View>
    </ScrollView>
  );
}
