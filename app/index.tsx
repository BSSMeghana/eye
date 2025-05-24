import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-reanimated';

import DiseaseCarousel from './styles/DiseaseCarousel';
import indexStyles from './indexStyles';

export default function Home() {
  const router = useRouter();

  // Handler for hamburger press (for now just a console log)
  const onHamburgerPress = () => {
    console.log('Hamburger menu pressed');
    // Later, open the drawer or slide menu here
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={[indexStyles.container, { paddingBottom: 120 }]}>
        
        {/* Header */}
        <View style={indexStyles.header}>

          {/* Back Button Top Left */}
          <TouchableOpacity
            style={{ position: 'absolute', left: 0, padding: 8 }}
            onPress={() => router.push('./quiz')}
          >
            <Ionicons name="arrow-back" size={24} color="#007AFF" />
          </TouchableOpacity>

          {/* Center Title and Subtitle */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={indexStyles.title}>DRUSHTI</Text>
          </View>

          {/* Hamburger Icon Top Right */}
          <TouchableOpacity
            style={{ position: 'absolute', right: 0, padding: 8 }}
            onPress={onHamburgerPress}
          >
            <MaterialCommunityIcons name="menu" size={28} color="#007AFF" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 16 }} />

        {/* Disease Carousel */}
        <DiseaseCarousel />

        {/* Footer Text */}
        <View style={indexStyles.footerContainer}>
          <Text style={indexStyles.footerText}>Hackathon 2025 | Team Drushti</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
