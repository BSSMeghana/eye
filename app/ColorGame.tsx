import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const GRID_SIZE = 4;
const SQUARE_SIZE = width / GRID_SIZE - 12;

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
  const [differentIndex, setDifferentIndex] = useState(0);
  const [colors, setColors] = useState<{ baseColor: string; differentColor: string }>({
    baseColor: 'rgb(150,150,255)',
    differentColor: 'rgb(200,200,255)',
  });
  const [score, setScore] = useState(0);

  const generateNewGrid = () => {
    const { baseColor, differentColor } = generateColors();
    setDifferentIndex(Math.floor(Math.random() * GRID_SIZE * GRID_SIZE));
    setColors({ baseColor, differentColor });
  };

  useEffect(() => {
    generateNewGrid();
  }, []);

  const handlePress = (index: number) => {
    if (index === differentIndex) {
      setScore(score + 1);
      generateNewGrid();
    } else {
      setScore(0); // reset score on wrong press
      generateNewGrid();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find the Different Color</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <View style={styles.grid}>
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.square,
              { backgroundColor: index === differentIndex ? colors.differentColor : colors.baseColor },
            ]}
            onPress={() => handlePress(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default ColorGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f9ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#064578',
  },
  score: {
    fontSize: 18,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width - 20,
    justifyContent: 'center',
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    margin: 6,
    borderRadius: 5,
  },
});
