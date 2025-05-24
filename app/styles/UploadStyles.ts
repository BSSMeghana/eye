import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const UploadStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },

  backButton: {
    marginTop: 15,
    alignSelf: 'flex-start',
    marginBottom: 5,
    padding: 6,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    color: '#064578',
  },

  instructionImage: {
     width: '90%',
  height: 400,
  aspectRatio: 16 / 9,
  marginBottom: 20,
  },

  image: {
    width: width * 0.9,
    height: width * 0.6,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 25,
  },

  buttonContainer: {
    flex: 1,
    marginHorizontal: 8,
  },

  resultBox: {
    backgroundColor: '#e6f0ff',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginTop: 10,
    shadowColor: '#1e90ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },

  resultText: {
    fontSize: 18,
    color: '#1e90ff',
    fontWeight: '600',
    marginBottom: 6,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 30,
    width: width * 0.8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#d9534f',
  },

  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  modalButton: {
    backgroundColor: '#d9534f',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Added missing styles to fix your errors:

  previewWrapper: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  previewImage: {
    width: width * 0.9,
    height: width * 0.6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  errorText: {
    color: 'red',
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
  },

  resultContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#e6f0ff',
    borderRadius: 10,
    width: '100%',
  },

  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default UploadStyles;
