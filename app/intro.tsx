import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Intro() {
  const router = useRouter();

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
  logo: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#003366', marginBottom: 40 },
  button: { backgroundColor: '#4fa9f6', paddingVertical: 12, paddingHorizontal: 28, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 18 },
  skipText: { marginTop: 20, color: '#555', fontSize: 16, textDecorationLine: 'underline' },  // <-- add this
});
