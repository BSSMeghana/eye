import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import indexStyles from './styles/indexStyles';

type RoutePath = '/UploadScreen' | '/quiz' | '/EyeTestMenu' | '/EyeColor' | '/EyeGameMenu';

const features: {
  key: string;
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  route: RoutePath;
}[] = [
  { key: 'upload', label: 'Scan Eye', icon: 'eye-outline', route: '/UploadScreen' },
  { key: 'quiz', label: 'Take Quiz', icon: 'help-circle-outline', route: '/quiz' },
  { key: 'vision', label: 'Vision Test', icon: 'eye-check-outline', route: '/EyeTestMenu' },
  { key: 'color', label: 'Color Test', icon: 'palette-outline', route: '/EyeColor' },
  { key: 'games', label: 'Eye Games', icon: 'gamepad-variant-outline', route: '/EyeGameMenu' },
];

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={indexStyles.container}>

      {/* Header */}
      <View style={indexStyles.header}>
        <Text style={indexStyles.title}>DRUSHTI</Text>
        <Text style={indexStyles.subtitle}>See the signs before they show!</Text>
      </View>


      {/* Features Grid */}
      <View style={indexStyles.cardContainer}>
        {features.map(({ key, label, icon, route }) => (
          <TouchableOpacity
            key={key}
            style={indexStyles.card}
            onPress={() => router.push(route)}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name={icon} size={48} color="#4fa9f6" />
            <Text style={indexStyles.cardLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={indexStyles.footerContainer}>
  <Text style={indexStyles.footerText}>
    Hackathon 2025 | Team Drushti </Text>
</View>

    </ScrollView>
  );
}
