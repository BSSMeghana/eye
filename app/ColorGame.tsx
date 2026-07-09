import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import BackChevron from '../components/BackChevron';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/ColorGameStyles';

const GRID_SIZE = 4;
const TOTAL_ROUNDS = 10;

const generateColors = () => {
  // Base color - avoid too dark or light
  const base = Math.floor(Math.random() * 150) + 50;
  // Variation added to base color
  const variation = Math.floor(Math.random() * 40) + 15;

  // Base color and slightly different color in blue shades
  const baseColor = `rgb(${base}, ${base}, 255)`;
  const differentColor = `rgb(${Math.min(base + variation, 255)}, ${Math.min(base + variation, 255)}, 255)`;

  return { baseColor, differentColor };
};

const ColorGame = () => {
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
  const [differentIndex, setDifferentIndex] = useState(0);
  const [colors, setColors] = useState<{ baseColor: string; differentColor: string }>({
    baseColor: 'rgb(150,150,255)',
    differentColor: 'rgb(200,200,255)',
  });
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const generateNewGrid = () => {
    const { baseColor, differentColor } = generateColors();
    setDifferentIndex(Math.floor(Math.random() * GRID_SIZE * GRID_SIZE));
    setColors({ baseColor, differentColor });
  };

  useEffect(() => {
    generateNewGrid();
  }, []);

  const handlePress = (index: number) => {
    const nextScore = score + (index === differentIndex ? 1 : 0);
    setScore(nextScore);

    if (round === TOTAL_ROUNDS) {
      setIsComplete(true);
      return;
    }

    setRound((currentRound) => currentRound + 1);
    generateNewGrid();
  };

  const restartGame = () => {
    setScore(0);
    setRound(1);
    setIsComplete(false);
    generateNewGrid();
  };
  const gridWidth = Math.min(contentWidth, height * (isTiny ? 0.54 : 0.58), 420);
  const squareGap = isTiny ? 4 : 6;
  const squareSize = gridWidth / GRID_SIZE - squareGap * 2;
  const headerStyle = [
    styles.header,
    isCompact && styles.headerCompact,
    isLargePhone && styles.headerLarge,
  ];
  const scoreStyle = [
    styles.score,
    isCompact && styles.scoreCompact,
    isLargePhone && styles.scoreLarge,
  ];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          minHeight: height,
          paddingBottom: isTiny ? 112 : 128,
          paddingHorizontal: screenPadding,
          paddingTop: isTiny ? 66 : 76,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <BackChevron
        onPress={() => router.back()}
        style={{ left: screenPadding, position: 'absolute', top: isTiny ? 10 : 16 }}
      />
      <View style={[styles.content, { maxWidth: contentMaxWidth }]}>
        {isComplete ? (
          <View style={styles.resultCard}>
            <Text style={headerStyle}>Game Complete!</Text>
            <Text style={styles.finalScore}>Your Score: {score} / {TOTAL_ROUNDS}</Text>
            <TouchableOpacity
              style={styles.playAgainButton}
              onPress={restartGame}
              activeOpacity={0.78}
              accessibilityRole="button"
              accessibilityLabel="Play Color Game again"
            >
              <Text style={styles.playAgainText}>Play Again</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text style={headerStyle}>Find the Different Color</Text>
            <Text style={scoreStyle}>
              Round: {round} / {TOTAL_ROUNDS}   •   Score: {score}
            </Text>
            <View style={[styles.grid, { width: gridWidth }]}>
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.square,
                    {
                      backgroundColor: index === differentIndex ? colors.differentColor : colors.baseColor,
                      height: squareSize,
                      margin: squareGap,
                      width: squareSize,
                    },
                  ]}
                  onPress={() => handlePress(index)}
                  activeOpacity={0.78}
                  accessibilityRole="button"
                  accessibilityLabel={`Color square ${index + 1}`}
                />
              ))}
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ColorGame;
