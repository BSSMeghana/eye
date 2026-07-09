import * as Speech from 'expo-speech';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import BackChevron from '../components/BackChevron';
import { useVoice } from '../context/VoiceProvider';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/AboutStyles';

export default function About() {
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
      Speech.speak('About');
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
  const paragraphStyle = [
    styles.paragraph,
    isCompact && styles.paragraphCompact,
    isLargePhone && styles.paragraphLarge,
  ];
  const bulletStyle = [
    styles.bullet,
    isCompact && styles.bulletCompact,
    isLargePhone && styles.bulletLarge,
  ];

  return (
    <View style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {
            minHeight: height,
            paddingBottom: isTiny ? 104 : 120,
            paddingHorizontal: screenPadding,
            paddingTop: isTiny ? 18 : 28,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ maxWidth: contentMaxWidth, width: '100%' }}>
          <View style={styles.header}>
            <BackChevron onPress={() => router.back()} />
            <Text style={titleStyle}>
              About
            </Text>
            <View style={styles.headerSpacer} />
          </View>

          <Text style={paragraphStyle}>
            <Text style={styles.bold}>Drushti</Text> is an AI-powered mobile application
            built to screen for common eye conditions such as{' '}
            <Text style={styles.italic}>Cataract</Text>,{' '}
            <Text style={styles.italic}>Diabetic Retinopathy</Text>, and{' '}
            <Text style={styles.italic}>Glaucoma</Text>—using your smartphone camera and
            flashlight.
          </Text>

          <Text style={paragraphStyle}>
            A standout feature of Drushti is its ability to{' '}
            <Text style={styles.highlight}>analyze retina images in real-time</Text>. If
            the image is not clear, the app smartly notifies the user and avoids false
            diagnoses.
          </Text>

          <Text style={paragraphStyle}>
            Additional features include:
          </Text>

          <View style={styles.bulletContainer}>
            <Text style={bulletStyle}>
              • <Text style={styles.bold}>Vision Tests</Text> – distance, near, and color
              vision
            </Text>
            <Text style={bulletStyle}>
              • <Text style={styles.bold}>Home Care</Text> – simple remedies for daily eye
              wellness
            </Text>
            <Text style={bulletStyle}>
              • <Text style={styles.bold}>News & Events</Text> – latest on eye health
              awareness and programs
            </Text>
            <Text style={bulletStyle}>
              • <Text style={styles.bold}>Eye Games</Text> – fun exercises for kids to
              train eye muscles
            </Text>
          </View>

          <Text style={paragraphStyle}>
            Drushti works <Text style={styles.highlight}>entirely offline</Text>, supports{' '}
            <Text style={styles.highlight}>low-end Android devices</Text>, and is friendly
            even for <Text style={styles.highlight}>non-specialists</Text>.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
