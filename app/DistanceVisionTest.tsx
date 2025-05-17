import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const letters = ['E', 'F', 'P', 'T', 'O', 'Z', 'L', 'P', 'E', 'D'];
const fontSizes = [280, 250, 220, 190, 140, 125, 100, 75, 50, 30]; // decreasing sizes per letter

export default function DistanceVisionTest() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (canRead: boolean) => {
    if (canRead) {
      setScore(score + 1); // increment score if user can read the letter
    }

    if (index < letters.length - 1) {
      setIndex(index + 1);
    } else {
      // Navigate to result screen with score
      router.push({
        pathname: '/ResultScreen',
        params: { score: score.toString() },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>Hold the phone at 3 feet (1 meter) distance from your eyes</Text>

      <View style={styles.letterContainer}>
        <Text style={[styles.letter, { fontSize: fontSizes[index] }]}>
          {letters[index]}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer(true)}>
          <Text style={styles.buttonText}>Can Read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer(false)}>
          <Text style={styles.buttonText}>Can't Read</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 40,
    color: '#064578',
  },
  letterContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  letter: {
    fontWeight: 'bold',
    color: 'black',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    gap: 20,
  },
  button: {
    backgroundColor: '#4fa9f6',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
