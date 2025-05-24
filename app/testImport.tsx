import React from 'react';
import { Text, View } from 'react-native';
import { Camera } from 'expo-camera';

export default function TestImport() {
  console.log('Camera is type:', typeof Camera);
  return (
    <View>
      <Text>Check console for Camera type log</Text>
    </View>
  );
}
