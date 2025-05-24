import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Information() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>INFORMATION</Text>

        {/* Cataract Section */}
        <Text style={styles.heading}> Cataract</Text>
        <Text style={styles.paragraph}>
          Cataract is an eye disease in which the lens of the eye becomes cloudy, leading to blurred or dim vision. The lens is normally clear and helps to focus light onto the retina at the back of the eye. When a cataract forms, it blocks or distorts the light, making it harder to see.
        </Text>

        <Text style={styles.subHeading}>Causes</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>• Diabetes</Text>
          <Text style={styles.bullet}>• Eye injury</Text>
          <Text style={styles.bullet}>• Long-term use of steroids</Text>
          <Text style={styles.bullet}>• Smoking and alcohol use</Text>
          <Text style={styles.bullet}>• Genetic factors</Text>
          <Text style={styles.bullet}>• Excessive exposure to sunlight (UV radiation)</Text>
        </View>

        <Text style={styles.subHeading}>Symptoms</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>• Blurry vision</Text>
          <Text style={styles.bullet}>• Faded colors</Text>
          <Text style={styles.bullet}>• Difficulty seeing at night</Text>
          <Text style={styles.bullet}>• Frequent changes in eyeglass prescription</Text>
        </View>

        {/* Diabetic Retinopathy Section */}
        <Text style={styles.heading}> Diabetic Retinopathy</Text>
        <Text style={styles.paragraph}>
          Diabetic Retinopathy is an eye disease that occurs in people with diabetes. It happens when high blood sugar levels damage the blood vessels in the retina, the light-sensitive layer at the back of the eye. Over time, this can lead to vision problems or even blindness.
        </Text>

        <Text style={styles.subHeading}>How it happens</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>• Blood vessels leak fluid or blood</Text>
          <Text style={styles.bullet}>• Blood vessels swell</Text>
          <Text style={styles.bullet}>• Blood vessels close off</Text>
          <Text style={styles.bullet}>• New abnormal blood vessels grow</Text>
        </View>

        <Text style={styles.subHeading}>Symptoms</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>• Often no early symptoms</Text>
          <Text style={styles.bullet}>• Blurry vision</Text>
          <Text style={styles.bullet}>• Sudden loss of vision</Text>
        </View>

        {/* Glaucoma Section */}
        <Text style={styles.heading}> Glaucoma</Text>
        <Text style={styles.paragraph}>
          Glaucoma is a group of eye conditions that damage the optic nerve, which is vital for good vision. This damage is often caused by abnormally high pressure in the eye. If untreated, glaucoma can lead to permanent vision loss or blindness.
        </Text>

        <Text style={styles.subHeading}>Causes</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>• Increased intraocular pressure</Text>
          <Text style={styles.bullet}>• Blockage of fluid drainage in the eye</Text>
          <Text style={styles.bullet}>• Eye injury</Text>
          <Text style={styles.bullet}>• Genetics and age</Text>
          <Text style={styles.bullet}>• Certain medical conditions like diabetes and high blood pressure</Text>
        </View>

        <Text style={styles.subHeading}>Symptoms</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>• Often no early symptoms (silent thief of sight)</Text>
          <Text style={styles.bullet}>• Loss of peripheral (side) vision</Text>
          <Text style={styles.bullet}>• Tunnel vision in advanced stages</Text>
          <Text style={styles.bullet}>• Eye pain or redness (in some types)</Text>
        </View>
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
    paddingBottom: 40,
  },
  title: {
fontSize: 25,
    fontWeight: 'bold',
    color: '#064578',
    textAlign: 'center',
    marginBottom: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
    color: '#222',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
    color: '#444',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
  bulletContainer: {
    marginLeft: 12,
    marginBottom: 12,
  },
  bullet: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});
