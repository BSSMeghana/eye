import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
  const [page, setPage] = useState(0);
  const [lastReadableSize, setLastReadableSize] = useState(fontSizes[0]);

  const handleCanRead = () => {
    setLastReadableSize(fontSizes[page]);
    if (page < letterGroups.length - 1) {
      setPage(page + 1);
    } else {
      alert(`Test complete! Your near vision font size: ${fontSizes[page]}`);
      // navigate to result or reset test
    }
  };

  const handleCantRead = () => {
    alert(`Test complete! Your near vision font size: ${lastReadableSize}`);
    // navigate to result or reset test
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>
        Hold your phone at about 14 inches (35 cm) from your eyes.
      </Text>

      <View style={styles.letterContainer}>
        {letterGroups[page].map((letter, index) => (
          <Text key={index} style={[styles.letter, { fontSize: fontSizes[page] }]}>
            {letter}
          </Text>
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCanRead}>
          <Text style={styles.buttonText}>Can Read</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCantRead}>
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
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instruction: {
    fontSize: 16,
    color: '#064578',
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    textAlign: 'center',
  },
  letterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 50,
    marginBottom: 150,
  },
  letter: {
    fontWeight: 'bold',
    color: 'black',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-around',
    width: '100%',
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
