import axios from 'axios';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, View } from 'react-native';


export default function UploadScreen() {
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

  const pickImage = async () => {
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
      setImageUri(pickerResult.assets[0].uri);
      setResult(null);
      setPdfUri(null);
    }
  };

  const uploadImage = async () => {
    if (!imageUri) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'eye.jpg',
    } as any);

    try {
      const response = await axios.post('https://eyebackend.onrender.com/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.result && response.data.result.length > 0) {
        setResult(response.data.result[0]);
      } else {
        Alert.alert('Error', 'No prediction result found');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to upload image');
    } finally {
      setLoading(false);
    }
  };

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
    <View style={styles.container}>
      <Text style={styles.title}>Upload Eye Image</Text>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

      <Button title="Pick an Image" onPress={pickImage} />

      {imageUri && <Button title="Upload & Predict" onPress={uploadImage} disabled={loading} />}

      {loading && <ActivityIndicator size="large" color="#1e90ff" style={{ marginTop: 20 }} />}

      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Prediction: {result.name}</Text>
          <Text style={styles.resultText}>Confidence: {result.accuracy}</Text>

          <View style={{ marginTop: 15 }}>
            <Button title="Share PDF" onPress={sharePDF} />
          </View>

          
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  image: {
    width: 260,
    height: 260,
    resizeMode: 'cover',
    marginVertical: 15,
    borderRadius: 10,
  },
  resultBox: {
    marginTop: 20,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    width: '100%',
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
});
