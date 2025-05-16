import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const eyeQuestions = [
  "Do you feel pain or discomfort in or around your eyes?",
  "Is there any discharge from your eye (watery, mucus, or pus)?",
  "Is there any swelling of the eyelids or around the eye?",
  "Do you have a family history of glaucoma or cataracts?",
  "Are you sensitive to bright light (photophobia)?",
  "Do you have diabetes or high blood pressure?",
  "Have you had any eye surgery or eye injury?",
  "Do you feel itching or burning in your eyes?",
];

const options = ['Yes', 'No', 'Sometimes', 'Not Sure'];

export default function QuizScreen() {

const router = useRouter();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  
  // Store answers as: { questionIndex: 'yes' | 'no' | 'sometimes' | 'not_sure' }
  const [answers, setAnswers] = useState({});

  const handleAnswer = (index, answer) => {
    setAnswers(prev => ({ ...prev, [index]: answer }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!name.trim() || !age.trim() || !profession.trim()) {
      Alert.alert("Please fill out your name, age, and profession.");
      return;
    }
    if (Object.keys(answers).length !== eyeQuestions.length) {
      Alert.alert("Please answer all the symptom questions.");
      return;
    }
    // You can handle submission logic here
    Alert.alert("Quiz submitted!", `Thanks, ${name}. Your responses have been recorded.`);
    // Optionally reset
    setName('');
    setAge('');
    setProfession('');
    setAnswers({});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Eye Health Quiz</Text>

      {/* Personal info */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Profession"
        value={profession}
        onChangeText={setProfession}
      />

      {/* Questions */}
      {eyeQuestions.map((q, i) => (
        <View key={i} style={styles.questionContainer}>
          <Text style={styles.questionText}>{q}</Text>
          <View style={styles.optionsRow}>
            {options.map(option => {
              const val = option.toLowerCase().replace(' ', '_');
              const selected = answers[i] === val;
              return (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleAnswer(i, val)}
                  style={[
                    styles.optionButton,
                    selected && styles.optionButtonSelected,
                  ]}
                >
                  <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20 }}>
        <Text style={{ color: '#1e90ff', fontSize: 18 }}>← Back</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  questionContainer: {
    marginBottom: 25,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#1e90ff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    minWidth: '22%',
    alignItems: 'center',
  },
  optionButtonSelected: {
    backgroundColor: '#1e90ff',
  },
  optionText: {
    color: '#1e90ff',
    fontWeight: '600',
  },
  optionTextSelected: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
