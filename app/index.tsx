// app/index.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; 

export const metadata = {
  title: 'EYE App', // Title for the home screen
};

export default function Home() {
  const router = useRouter();  // <-- initialize router here

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eye Disease Detection</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/quiz')}  // <-- now router is defined!
      >
        <Text style={styles.buttonText}>Take a Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} 
      onPress={() => router.push('/UploadScreen')}>
        <Text style={styles.buttonText}>Upload Eye Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#222',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
