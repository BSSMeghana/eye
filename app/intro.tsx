import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function IntroScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/'); // or router.replace('(tabs)') if your home is inside tabs
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/eyeand.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.appName}>DRUSHTI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e6f0ff', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 120, height: 120, marginBottom: 20 },
  appName: { fontSize: 24, fontWeight: 'bold', color: '#003366' },
});
