import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const colorPlates = [
  require('/Users/meghanabss/Downloads/eye/assets/images/img1.png'),
  require('/Users/meghanabss/Downloads/eye/assets/images/img2.jpg'),
  require('/Users/meghanabss/Downloads/eye/assets/images/img3.jpg'),
  require('/Users/meghanabss/Downloads/eye/assets/images/img4.jpg'),
  require('/Users/meghanabss/Downloads/eye/assets/images/img5.webp'),
  require('/Users/meghanabss/Downloads/eye/assets/images/img6.avif'),
  require('/Users/meghanabss/Downloads/eye/assets/images/img7.webp'),
];

const EyeColor: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < colorPlates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>Observe the plate and tap Next to continue</Text>
      <View style={styles.letterContainer}>
        <Image source={colorPlates[currentIndex]} style={[styles.letter, { width: 300, height: 300 }]} resizeMode="contain" />
      </View>

      {currentIndex < colorPlates.length - 1 ? (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={{ marginBottom: 50, fontSize: 16, color: 'green' }}>
          You've reached the end of the test.
        </Text>
      )}
    </View>
  );
};

export default EyeColor;

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
    width: 300,
  height: 300,
  borderRadius: 10,
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