import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function About() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>ABOUT DRUSHTI</Text>
        
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Drushti</Text> is an AI-powered mobile application designed to screen for common eye conditions like{" "}
          <Text style={styles.italic}>Cataract, Diabetic Retinopathy</Text>, and <Text style={styles.italic}>Glaucoma</Text> using a smartphone camera and flashlight.
        </Text>

        <Text style={styles.paragraph}>The app also includes useful tools such as:</Text>

        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>• Vision Tests – for distance, near, and color vision</Text>
          <Text style={styles.bullet}>• Home Care – basic remedies and precautions for eye discomfort</Text>
          <Text style={styles.bullet}>• News & Events – updates on eye health awareness, medical camps, and community initiatives</Text>
          <Text style={styles.bullet}>• Games – to promote daily eye exercise, especially for kids</Text>
        </View>

        <Text style={styles.paragraph}>
          Drushti works offline, supports low-end Android devices, and provides quick, user-friendly screening—even for non-specialists.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  title: {
   fontSize: 25,
    fontWeight: 'bold',
    color: '#064578',
    textAlign: 'center',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
    lineHeight: 22,
  },
  bulletContainer: {
    marginBottom: 12,
  },
  bullet: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});
