import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import BackChevron from '../components/BackChevron';
import { spacing } from '../constants/theme';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/EyeColorStyles';

const colorPlates = [
  require('../assets/images/img1.png'),
  require('../assets/images/img2.jpg'),
  require('../assets/images/img3.jpg'),
  require('../assets/images/img4.jpg'),
  require('../assets/images/img5.webp'),
  require('../assets/images/img6.avif'),
  require('../assets/images/img7.webp'),
];

const EyeColor: React.FC = () => {
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const plateSize = Math.min(contentWidth, height * (isTiny ? 0.42 : 0.48), 340);
  const instructionStyle = [
    styles.instruction,
    isCompact && styles.instructionCompact,
    isLargePhone && styles.instructionLarge,
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

  const handleNext = () => {
    if (currentIndex < colorPlates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          minHeight: height,
          paddingBottom: isTiny ? 112 : 128,
          paddingHorizontal: screenPadding,
          paddingTop: isTiny ? 38 : isCompact ? 46 : 56,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <BackChevron
        onPress={() => router.back()}
        style={{ left: screenPadding, position: 'absolute', top: isTiny ? 10 : 16 }}
      />
      <View style={[styles.content, { maxWidth: contentMaxWidth }]}>
        <Text style={instructionStyle}>Observe the plate and tap Next to continue</Text>
        <View style={styles.letterContainer}>
          <Image
            source={colorPlates[currentIndex]}
            style={[styles.letter, { width: plateSize, height: plateSize }]}
            resizeMode="contain"
          />
        </View>

        {currentIndex < colorPlates.length - 1 ? (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={buttonStyle}
              onPress={handleNext}
              activeOpacity={0.78}
              accessibilityRole="button"
              accessibilityLabel="Next color test plate"
            >
              <Text style={buttonTextStyle}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={[styles.completedText, { marginBottom: isTiny ? spacing.lg : 50 }]}>
            You have reached the end of the test.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default EyeColor;
