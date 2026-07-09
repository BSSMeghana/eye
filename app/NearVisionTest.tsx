import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import BackChevron from '../components/BackChevron';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/VisionTestStyles';

const letterGroups = [
  ['P', 'G', 'H', 'D'],
  ['I', 'K', 'G', 'E'],
  ['U', 'S', 'Q', 'L'],
  ['A', 'V', 'O', 'R'],
  ['W', 'Y', 'P', 'Q'],
  ['R', 'B', 'W', 'Z'],
  ['M', 'Y', 'A', 'P'],
  ['C', 'T', 'K', 'F'],
];

const fontSizes = [48, 42, 36, 30, 24, 18, 14, 10]; // Decreasing font sizes for each page

export default function NearVisionTest() {
  const router = useRouter();
  const {
    contentMaxWidth,
    contentWidth,
    height,
    isCompact,
    isLargePhone,
    isTiny,
    screenPadding,
  } = useResponsiveLayout();
  const [page, setPage] = useState(0);
  const responsiveFontSize = Math.min(fontSizes[page], contentWidth / 5);
  const instructionStyle = [
    styles.instruction,
    styles.nearInstruction,
    isCompact && styles.instructionCompact,
    isLargePhone && styles.instructionLarge,
  ];
  const buttonsContainerStyle = [
    styles.buttonsContainer,
    styles.nearButtonsContainer,
    isTiny && styles.buttonsStacked,
    isCompact && styles.buttonsContainerCompact,
  ];
  const buttonStyle = [
    styles.button,
    isCompact && styles.buttonCompact,
    isLargePhone && styles.buttonLarge,
  ];
  const buttonTextStyle = [
    styles.buttonText,
    isCompact && styles.buttonTextCompact,
    isLargePhone && styles.buttonTextLarge,
  ];

  const handleCanRead = () => {
    const nextScore = page + 1;

    if (page < letterGroups.length - 1) {
      setPage(page + 1);
    } else {
      router.push({
        pathname: '/ResultScreen',
        params: { maxScore: letterGroups.length.toString(), score: nextScore.toString(), testType: 'near' },
      });
    }
  };

  const handleCantRead = () => {
    router.push({
      pathname: '/ResultScreen',
      params: { maxScore: letterGroups.length.toString(), score: page.toString(), testType: 'near' },
    });
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        styles.nearContainer,
        {
          minHeight: height,
          paddingBottom: isTiny ? 112 : 128,
          paddingHorizontal: screenPadding,
          paddingTop: isTiny ? 38 : isCompact ? 46 : 56,
        },
      ]}
    >
      <BackChevron
        onPress={() => router.back()}
        style={{ left: screenPadding, position: 'absolute', top: isTiny ? 10 : 16 }}
      />
      <View style={[styles.nearContent, { maxWidth: contentMaxWidth }]}>
        <Text style={instructionStyle}>
          Hold your phone at about 14 inches (35 cm) from your eyes.
        </Text>

        <View style={styles.nearLetterContainer}>
          {letterGroups[page].map((letter, index) => (
            <Text
              key={index}
              style={[
                styles.letter,
                { fontSize: responsiveFontSize, lineHeight: responsiveFontSize * 1.2 },
              ]}
            >
              {letter}
            </Text>
          ))}
        </View>

        <View style={buttonsContainerStyle}>
          <TouchableOpacity style={buttonStyle} onPress={handleCanRead} activeOpacity={0.78}>
            <Text style={buttonTextStyle}>Can Read</Text>
          </TouchableOpacity>

          <TouchableOpacity style={buttonStyle} onPress={handleCantRead} activeOpacity={0.78}>
            <Text style={buttonTextStyle}>Cannot Read</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
