
import { StyleSheet } from 'react-native';

const indexStyles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    flexGrow: 1,
    alignItems: 'center',
  },

  // Header section with rounded bottom corners
  header: {
  marginTop: 10,
  textAlign: 'center',
},

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#064578',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#064578',
    marginTop: 8,
    marginBottom: 10,
  },
  // Primary button style
  button: {
    marginTop: 10,
    backgroundColor: '#4fa9f6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    shadowColor: '#1c84dd',
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  // Features cards container and card styles (unchanged)
  cardContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom:20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: '30%',
    aspectRatio: 1,
    borderRadius: 15,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 5,
  },
  cardLabel: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '600',
    color: '#4fa9f6',
    textAlign: 'center',
    marginBottom: 5,
  },

  // Footer container
  footerContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 17,
    color: '#444',
  },
   backButton: {
    backgroundColor: 'white',
    right: 150,
  },
});

export default indexStyles;