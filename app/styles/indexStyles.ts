import { StyleSheet } from 'react-native';

const indexStyles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: '#a1c4fd',
    flexGrow: 1,
    alignItems: 'center',
  },

  // Header section with rounded bottom corners
  header: {
    width: '100%',
    backgroundColor: '#3a8dde',
    paddingVertical: 30,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginTop: 8,
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
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  card: {
    backgroundColor: 'white',
    width: '40%',
    aspectRatio: 1,
    borderRadius: 15,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardLabel: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#064578',
    textAlign: 'center',
  },

  // Footer container
  footerContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  footerText: {
    fontSize: 17,
    color: '#444',
  },
});

export default indexStyles;
