import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="Intro">
        <Stack.Screen name="Intro" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="quiz" options={{ headerShown: false }} />
        <Stack.Screen name="ColorGame" options={{ headerShown: false }} />
        <Stack.Screen name="DistanceVisionTest" options={{ headerShown: false }} />
        <Stack.Screen name="EyeGameMenu" options={{ headerShown: false }} />
        <Stack.Screen name="FollowDot" options={{ headerShown: false }} />
        <Stack.Screen name="NearVisionTest" options={{ headerShown: false }} />
        <Stack.Screen name="PediatricVisionTest" options={{ headerShown: false }} />
        <Stack.Screen name="ResultScreen" options={{ headerShown: false }} />
        <Stack.Screen name="UploadScreen" options={{ headerShown: false }} />
        <Stack.Screen name="EyeColor" options={{ headerShown: false }} />{/* Other screens */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
