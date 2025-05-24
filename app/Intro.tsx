import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import * as Speech from 'expo-speech';

export default function Intro() {
  const router = useRouter();

  useEffect(() => {
  Speech.speak("Welcome to Drushti, let's get started");

  return () => {
    Speech.stop();  // stops any ongoing speech when unmounting
  };
}, []);


  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/eyeand.png')} style={styles.logo} />
      <Text style={styles.title}>DRUSHTI</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('./quiz')}>
        <Text style={styles.buttonText}>Let's Get Started!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e6f0ff', justifyContent: 'center', alignItems: 'center' },
  logo: { width: 150, height: 150, marginBottom: 18, borderRadius: 50, },
  title: { fontSize: 32, fontWeight: 'bold', color: '#003366', marginBottom: 70 },
  button: { backgroundColor: '#4fa9f6', paddingVertical: 12, paddingHorizontal: 38, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 18 },
 });
