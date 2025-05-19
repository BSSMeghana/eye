// app/styles/quizStyles.ts
import { StyleSheet } from 'react-native';

const quizStyles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#003366',
    marginTop: 5,
  
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'center',
    color: '#003366',
    marginTop: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  questionContainer: {
    marginBottom: 18,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 8,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  optionButtonSelected: {
    backgroundColor: '#4fa9f6',
    borderColor: '#007AFF',
  },
  optionText: {
    color: '#000',
  },
  optionTextSelected: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#4fa9f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
   backButton: {
    backgroundColor: 'white',
    marginTop: 30,
  },

});

export default quizStyles;
