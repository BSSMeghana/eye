import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import quizStyles from './styles/quizStyles';

const eyeQuestions: string[] = [
  "Do you feel pain or discomfort in or around your eyes?",
  "Is there any discharge from your eye (watery, mucus, or pus)?",
  "Is there any swelling of the eyelids or around the eye?",
  "Do you have a family history of glaucoma or cataracts?",
  "Are you sensitive to bright light (photophobia)?",
  "Do you have diabetes or high blood pressure?",
  "Have you had any eye surgery or eye injury?",
  "Do you feel itching or burning in your eyes?",
];

const options: string[] = ['Yes', 'No', 'Sometimes', 'Not Sure'];

export default function QuizScreen() {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  
  // answers: key = question index, value = selected answer as string
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswer = (index: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [index]: answer }));
  };

  const handleSubmit = () => {
    if (!name.trim() || !age.trim() || !profession.trim()) {
      Alert.alert("Please fill out your name, age, and profession.");
      return;
    }
    if (Object.keys(answers).length !== eyeQuestions.length) {
      Alert.alert("Please answer all the symptom questions.");
      return;
    }
    Alert.alert("Quiz submitted!", `Thanks, ${name}. Your responses have been recorded.`);
    // Reset form
    setName('');
    setAge('');
    setProfession('');
    setAnswers({});
  };

  return (
  <ScrollView contentContainerStyle={quizStyles.container}>
    <Text style={quizStyles.title}>Eye Health Quiz</Text>

    <TextInput
      style={quizStyles.input}
      placeholder="Name"
      placeholderTextColor="gray" 
      value={name}
      onChangeText={setName}
    />

    <TextInput
      style={quizStyles.input}
      placeholder="Age"
      placeholderTextColor="gray" 
      value={age}
      onChangeText={setAge}
      keyboardType="numeric"
    />

    <TextInput
      style={quizStyles.input}
      placeholder="Profession"
      placeholderTextColor="gray" 
      value={profession}
      onChangeText={setProfession}
    />

    {eyeQuestions.map((question, i) => (
      <View key={i} style={quizStyles.questionContainer}>
        <Text style={quizStyles.questionText}>{question}</Text>
        <View style={quizStyles.optionsRow}>
          {options.map(option => {
            const val = option.toLowerCase().replace(' ', '_');
            const selected = answers[i] === val;
            return (
              <TouchableOpacity
                key={option}
                onPress={() => handleAnswer(i, val)}
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

    <TouchableOpacity style={quizStyles.submitButton} onPress={handleSubmit}>
      <Text style={quizStyles.submitButtonText}>Submit Quiz</Text>
    </TouchableOpacity>
  </ScrollView>
);

}

