import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen() {
  const { score } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test Completed</Text>
      <Text style={styles.scoreText}>Your Score: {score} / 10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2e9fb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#064578',
  },
  scoreText: {
    fontSize: 20,
    color: '#444',
  },
});
