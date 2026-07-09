import { useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { colors } from '../constants/theme';
import { useVoice } from '../context/VoiceProvider'; // ✅ Import context hook
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/IntroStyles';

export default function Intro() {
  const router = useRouter();
  const { isTiny, screenPadding } = useResponsiveLayout();
  
  const { voiceEnabled } = useVoice();

  useEffect(() => {
    if (voiceEnabled) {
      Speech.speak("Welcome to Drushti");
    }

    return () => {
      Speech.stop();
    };
  }, [voiceEnabled]);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/quiz');
    }, 1800);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={[styles.container, { padding: screenPadding }]}>
      <View style={[styles.logoShell, isTiny && styles.logoShellCompact]}>
        <Image source={require('../assets/images/appicon7.png')} style={[styles.logo, isTiny && styles.logoCompact]} />
      </View>
      <Text style={[styles.title, isTiny && styles.titleCompact]}>DRUSHTI</Text>
      <Text style={styles.subtitle}>Eye care support, made simple.</Text>

      <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
    </View>
  );
}
