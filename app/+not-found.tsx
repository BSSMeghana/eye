import { Link, Stack } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/NotFoundStyles';

export default function NotFoundScreen() {
  const { contentMaxWidth, isTiny, screenPadding } = useResponsiveLayout();

  return (
    <>
      <Stack.Screen options={{ title: 'Page Not Found' }} />
      <View style={[styles.container, { padding: screenPadding }]}>
        <View style={{ alignItems: 'center', maxWidth: contentMaxWidth, width: '100%' }}>
        <Text style={styles.emoji}>👁️</Text>
        <Text style={[styles.title, isTiny && { fontSize: 20, lineHeight: 26 }]}>Oops! Page Not Found</Text>
        <Text style={styles.subtitle}>The screen you are looking for does not exist.</Text>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Go to Home</Text>
          </TouchableOpacity>
        </Link>
        </View>
      </View>
    </>
  );
}
