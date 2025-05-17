import { StyleSheet } from 'react-native';

const quizStyles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
  borderWidth: 1,
  color: 'black',
  borderColor: 'black',
  backgroundColor: 'white',
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
export default quizStyles;
