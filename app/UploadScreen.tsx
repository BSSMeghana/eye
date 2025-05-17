
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default function UploadScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [result, setResult] = useState<{
    model: string;
    name: string;
    predicted_class: number;
    accuracy: string;
    remedy: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: false,
    });

    if (!pickerResult.canceled) {
      setImageUri(pickerResult.assets[0].uri);
      setResult(null);
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

      // backend sends { result: [ {...} ] }
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Eye Image</Text>

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}

      <Button title="Pick an Image" onPress={pickImage} />

      {imageUri && (
        <Button title="Upload & Predict" onPress={uploadImage} />
      )}

      {loading && <ActivityIndicator size="large" color="#1e90ff" style={{ marginTop: 20 }} />}

      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Model: {result.model}</Text>
          <Text style={styles.resultText}>Prediction: {result.name}</Text>
          <Text style={styles.resultText}>Class ID: {result.predicted_class}</Text>
          <Text style={styles.resultText}>Confidence: {result.accuracy}</Text>
          <Text style={styles.resultText}>Remedy: {result.remedy}</Text>
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
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
});