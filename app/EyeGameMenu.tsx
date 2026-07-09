import { useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import React, { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useVoice } from '../context/VoiceProvider';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/MenuStyles';

export default function EyeGameMenu() {
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
      Speech.speak('Games');
    } else {
      Speech.stop();
    }

    return () => {
      Speech.stop();
    };
  }, [voiceEnabled]);

  const titleStyle = [
    styles.gameTitle,
    isCompact && styles.gameTitleCompact,
    isLargePhone && styles.gameTitleLarge,
  ];
  const buttonStyle = [
    styles.button,
    styles.gameButton,
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
      <View style={[styles.gameContent, { maxWidth: contentMaxWidth }]}>
        <Text style={titleStyle}>Eye Exercise Games</Text>

        <TouchableOpacity
          style={buttonStyle}
          onPress={() => router.push('/FollowDot')}
          activeOpacity={0.78}
          accessibilityRole="button"
          accessibilityLabel="Follow the Moving Dot game"
        >
          <Text style={buttonTextStyle}>Follow the Moving Dot!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={buttonStyle}
          onPress={() => router.push('/ColorGame')}
          activeOpacity={0.78}
          accessibilityRole="button"
          accessibilityLabel="Find the Odd Color game"
        >
          <Text style={buttonTextStyle}>Find the Odd Color!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
