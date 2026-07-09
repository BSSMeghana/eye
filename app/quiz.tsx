import { useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/theme';
import { useVoice } from '../context/VoiceProvider';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import quizStyles from './styles/quizStyles';

const eyeQuestions: string[] = [
  "Do you feel pain or discomfort in or around your eyes?",
  "Do you experience blurred vision?",
  "Do you have diabetes or high blood pressure?",
  "Do you experience dry eyes frequently?",
];

const options: string[] = ['Yes', 'No', 'Sometimes', 'Not Sure'];

export default function QuizScreen() {
  const router = useRouter();
  const { contentMaxWidth, isTiny, screenPadding } = useResponsiveLayout();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const { voiceEnabled } = useVoice();

  useEffect(() => {
    if (voiceEnabled) {
      Speech.speak("Take a quiz or directly skip");
    }

    return () => {
      Speech.stop();
    };
  }, [voiceEnabled]);

  const handleAnswer = (index: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [index]: answer }));
  };

  const isFormComplete =
    name.trim() !== '' &&
    age.trim() !== '' &&
    Object.keys(answers).length === eyeQuestions.length;

  const handleSubmit = () => {
    if (!isFormComplete) {
      Alert.alert("Please fill out all fields and answer all questions.");
      return;
    }

    Alert.alert(
      "Success",
      "Quiz submitted successfully!",
      [{ text: "OK", onPress: () => router.replace('/') }],
      { cancelable: false }
    );

    setName('');
    setAge('');
    setAnswers({});
  };

  return (
    <View style={quizStyles.safeArea}>
      <ScrollView
        contentContainerStyle={[
          quizStyles.container,
          {
            alignItems: 'center',
            paddingHorizontal: Math.max(screenPadding, 24),
            paddingTop: Math.max(screenPadding, 18),
          },
        ]}
      >
      <View style={[quizStyles.content, { maxWidth: contentMaxWidth }]}>
      <View style={quizStyles.headerRow}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.82}
          style={[quizStyles.title, isTiny && { fontSize: 24 }]}
        >
          DRUSHTI
        </Text>
        <TouchableOpacity
          style={quizStyles.skipButton}
          onPress={() => router.replace('/')}
        >
          <Text style={quizStyles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <Text style={quizStyles.subtitle}>A quick check-in before you begin.</Text>

      <TextInput
        style={quizStyles.input}
        placeholder="Name"
        placeholderTextColor={colors.muted}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={quizStyles.input}
        placeholder="Age"
        placeholderTextColor={colors.muted}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      {eyeQuestions.map((question, i) => (
        <View key={i} style={quizStyles.questionContainer}>
          <Text style={quizStyles.questionText}>{question}</Text>
          <View style={quizStyles.optionsRow}>
            {options.map(option => {
              const selected = answers[i] === option;
              return (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleAnswer(i, option)}
                  style={[
                    quizStyles.optionButton,
                    selected && quizStyles.optionButtonSelected,
                  ]}
                >
                  <Text style={[quizStyles.optionText, selected && quizStyles.optionTextSelected]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={[quizStyles.submitButton, !isFormComplete && { backgroundColor: colors.border }]}
        onPress={handleSubmit}
        disabled={!isFormComplete}
      >
        <Text style={quizStyles.submitButtonText}>Submit Quiz</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}
