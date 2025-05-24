import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
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
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswer = (index: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [index]: answer }));
  };

  const isFormComplete =
    name.trim() !== '' &&
    age.trim() !== '' &&
    profession.trim() !== '' &&
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
    setProfession('');
    setAnswers({});
  };

  return (
    <ScrollView contentContainerStyle={quizStyles.container}>
      
 <TouchableOpacity
  style={quizStyles.backButton}
  onPress={() => router.replace('./Intro')}>
  <Ionicons name="arrow-back" size={24} color="#007AFF" />
</TouchableOpacity>
      <Text style={quizStyles.title}>DRUSHTI</Text>
      <Text style={quizStyles.subtitle}>let's take a quick eye quiz!</Text>

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

      <TouchableOpacity
        style={[quizStyles.submitButton, !isFormComplete && { backgroundColor: '#ccc' }]}
        onPress={handleSubmit}
        disabled={!isFormComplete}
      >
        <Text style={quizStyles.submitButtonText}>Submit Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[quizStyles.submitButton, { backgroundColor: '#4fa9f6', marginTop: 10 }]}
        onPress={() => router.replace('/')}
      >
        <Text style={[quizStyles.submitButtonText, { color: 'white' }]}>Skip Quiz</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
