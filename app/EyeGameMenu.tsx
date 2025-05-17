import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function EyeGameMenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eye Exercise Games</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/FollowDot')}
      >
        <Text style={styles.buttonText}>Follow the Moving Dot!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/ColorGame')}
      >
        <Text style={styles.buttonText}>Find the Odd Color!</Text>
      </TouchableOpacity>

      {/* Add more games here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1c4fd',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 40,
    color: '#064578',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#4fa9f6',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
