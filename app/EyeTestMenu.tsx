// app/EyeTestMenu.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function EyeTestMenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Vision Test</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/DistanceVisionTest')}>
        <Text style={styles.buttonText}>Distance Vision Test (10 feet)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/NearVisionTest')}>
        <Text style={styles.buttonText}>Near Vision Test</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/PediatricVisionTest')}>
        <Text style={styles.buttonText}>Pediatric Vision Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: 20,
    backgroundColor: '#a1c4fd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#064578',
  },
  button: {
    backgroundColor: '#4fa9f6',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});
