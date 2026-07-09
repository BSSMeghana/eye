// app/EyeTestMenu.tsx
import { useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import React, { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useVoice } from '../context/VoiceProvider';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/MenuStyles';

interface VisionTestOption {
  label: string;
  route: '/DistanceVisionTest' | '/NearVisionTest' | '/PediatricVisionTest' | '/EyeColor';
}

const VISION_TEST_OPTIONS: VisionTestOption[] = [
  { label: 'Distance Vision Test', route: '/DistanceVisionTest' },
  { label: 'Near Vision Test', route: '/NearVisionTest' },
  { label: 'Pediatric Vision Test', route: '/PediatricVisionTest' },
  { label: 'Color Test', route: '/EyeColor' },
];

export default function EyeTestMenu() {
  const router = useRouter();
  const {
    contentMaxWidth,
    height,
    isCompact,
    isLargePhone,
    isTiny,
    screenPadding,
  } = useResponsiveLayout();

  const { voiceEnabled } = useVoice();

  useEffect(() => {
    if (voiceEnabled) {
      Speech.speak('Testing');
    } else {
      Speech.stop();
    }

    return () => {
      Speech.stop();
    };
  }, [voiceEnabled]);

  const titleStyle = [
    styles.title,
    isCompact && styles.titleCompact,
    isLargePhone && styles.titleLarge,
  ];

  const buttonStyle = [
    styles.button,
    isCompact && styles.buttonCompact,
    isLargePhone && styles.buttonLarge,
  ];

  const buttonTextStyle = [
    styles.buttonText,
    isTiny && styles.buttonTextCompact,
    isLargePhone && styles.buttonTextLarge,
  ];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        styles.scrollContainer,
        {
          minHeight: height,
          paddingBottom: isTiny ? 104 : 120,
          paddingHorizontal: screenPadding,
          paddingTop: isTiny ? 18 : 28,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.menuContent, { maxWidth: contentMaxWidth }]}>
        <Text style={titleStyle}>Select Vision Test</Text>

        {VISION_TEST_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option.route}
            style={buttonStyle}
            onPress={() => router.push(option.route)}
            activeOpacity={0.78}
            accessibilityRole="button"
            accessibilityLabel={option.label}
          >
            <Text style={buttonTextStyle}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
