import React from 'react';
import 'react-native-reanimated';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import indexStyles from './styles/indexStyles';
import DiseaseCarousel from './styles/DiseaseCarousel';
import { Ionicons } from '@expo/vector-icons';

type RoutePath = '/UploadScreen'  | '/EyeTestMenu' | '/EyeColor' | '/EyeGameMenu';

const features: {
  key: string;
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  route: RoutePath;
}[] = [
  { key: 'upload', label: 'Upload', icon: 'upload-outline', route: '/UploadScreen' },
  { key: 'vision', label: 'Vision Test', icon: 'eye-check-outline', route: '/EyeTestMenu' },
  { key: 'color', label: 'Color Test', icon: 'palette-outline', route: '/EyeColor' },
  { key: 'games', label: 'Eye Games', icon: 'gamepad-variant-outline', route: '/EyeGameMenu' },
];
const topFeature = features.filter(feature => feature.key === 'upload');
const bottomFeatures = features.filter(feature => feature.key !== 'upload');
export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={indexStyles.container}>
      <TouchableOpacity
  style={indexStyles.backButton}
  onPress={() => router.replace('./quiz')}>
  <Ionicons name="arrow-back" size={24} color="#007AFF" />
</TouchableOpacity>

      {/* Header */}
      <View style={indexStyles.header}>
        <Text style={indexStyles.title}>DRUSHTI</Text>
        <Text style={indexStyles.subtitle}>See the signs before they show!</Text>
      </View>

      <View style={{ marginTop: 6 }} />
      {/* Disease Carousel - Added this section */}
      <DiseaseCarousel />

      {/* Top Feature - Scan Eye (centered) */}
      <View style={[indexStyles.cardContainer, { justifyContent: 'center' }]}>
        {features.filter(f => f.key === 'upload').map(({ key, label, icon, route }) => (
          <TouchableOpacity
            key={key}
            style={indexStyles.card}
            onPress={() => router.push(route)}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name={icon} size={60} color="#4fa9f6" />
            <Text style={indexStyles.cardLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={indexStyles.header}>
        <Text style={indexStyles.subtitle}>See other features</Text>
      </View>

      {/* Bottom Features - Color Test, Vision Test, Eye Games in one row */}
      <View style={indexStyles.cardContainer}>
        {features.filter(f => f.key !== 'upload').map(({ key, label, icon, route }) => (
          <TouchableOpacity
            key={key}
            style={indexStyles.card}
            onPress={() => router.push(route)}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name={icon} size={60} color="#4fa9f6" />
            <Text style={indexStyles.cardLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={indexStyles.footerContainer}>
        <Text style={indexStyles.footerText}>
          Hackathon 2025 | Team Drushti
        </Text>
      </View>
      
      
    </ScrollView>
  );
}