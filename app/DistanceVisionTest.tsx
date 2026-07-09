import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import BackChevron from '../components/BackChevron';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/VisionTestStyles';

const letters = ['E', 'F', 'P', 'T', 'O', 'Z', 'L', 'P', 'E', 'D'];
const fontSizes = [280, 250, 220, 190, 140, 125, 100, 75, 50, 30]; // decreasing sizes per letter

export default function DistanceVisionTest() {
  const router = useRouter();
  const { contentMaxWidth, contentWidth, height, isCompact, isLargePhone, isTiny, screenPadding } = useResponsiveLayout();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const maxLetterHeight = isTiny ? height * 0.2 : isCompact ? height * 0.24 : height * 0.28;
  const maxLetterWidth = isTiny ? contentWidth * 0.58 : isCompact ? contentWidth * 0.64 : contentWidth * 0.7;
  const responsiveFontSize = Math.min(fontSizes[index], maxLetterWidth, maxLetterHeight);
  const instructionStyle = [
    styles.instruction,
    isCompact && styles.instructionCompact,
    isLargePhone && styles.instructionLarge,
  ];
  const letterContainerStyle = [
    styles.letterContainer,
    styles.distanceLetterContainer,
    isTiny && styles.distanceLetterContainerTiny,
  ];
  const buttonsContainerStyle = [
    styles.buttonsContainer,
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

  const handleAnswer = (canRead: boolean) => {
    const nextScore = score + (canRead ? 1 : 0);
    setScore(nextScore);

    if (index < letters.length - 1) {
      setIndex(index + 1);
    } else {
      router.push({
        pathname: '/ResultScreen',
        params: { maxScore: letters.length.toString(), score: nextScore.toString(), testType: 'distance' },
      });
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        styles.distanceContainer,
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
      <View style={[styles.distanceContent, { maxWidth: contentMaxWidth }]}>
        <Text style={instructionStyle}>Place the phone at 3 feet distance from your eyes and take assistance for moving to next reading </Text>

        <View style={letterContainerStyle}>
          <Text style={[styles.letter, { fontSize: responsiveFontSize, lineHeight: responsiveFontSize * 1.05 }]}>
            {letters[index]}
          </Text>
        </View>

        <View style={buttonsContainerStyle}>
          <TouchableOpacity style={buttonStyle} onPress={() => handleAnswer(true)} activeOpacity={0.78}>
            <Text style={buttonTextStyle}>Can Read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle} onPress={() => handleAnswer(false)} activeOpacity={0.78}>
            <Text style={buttonTextStyle}>Cannot Read</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
