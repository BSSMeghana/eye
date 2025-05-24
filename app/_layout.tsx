import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import indexStyles from './indexStyles';

type RoutePath = '/' | '/UploadScreen' | '/EyeTestMenu' | '/EyeColor' | '/EyeGameMenu' | '/HomeCare';

const features: {
  key: string;
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  route: RoutePath;
}[] = [
  { key: 'home', label: 'Home', icon: 'home', route: '/' },
  { key: 'vision', label: 'Testing', icon: 'eye-check-outline', route: '/EyeTestMenu' },
  { key: 'upload', label: 'Upload', icon: 'upload', route: '/UploadScreen' },
  { key: 'games', label: 'Games', icon: 'gamepad-variant-outline', route: '/EyeGameMenu' },
  { key: 'homecare', label: 'Home Care', icon: 'home-heart', route: '/HomeCare' },
];

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const pathname = usePathname();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  const hideNavRoutes = ['/Intro', '/quiz'];
  const showNav = !hideNavRoutes.includes(pathname);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Stack initialRouteName="Intro">
            <Stack.Screen name="Intro" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="quiz" options={{ headerShown: false }} />
            <Stack.Screen name="UploadScreen" options={{ headerShown: false }} />
            <Stack.Screen name="EyeTestMenu" options={{ headerShown: false }} />
            <Stack.Screen name="EyeColor" options={{ headerShown: false }} />
            <Stack.Screen name="EyeGameMenu" options={{ headerShown: false }} />
          </Stack>
        </View>

        {showNav && (
  <View style={indexStyles.fixedBottomNav}>
    {features.map(({ key, label, icon, route }) => {
      const isCenter = key === 'upload';
      const isActive = pathname === route;
      // Make upload icon bigger, others smaller
      const iconSize = key === 'upload' ? 50 : 30;  

      return (
        <TouchableOpacity
          key={key}
          style={isCenter ? indexStyles.centerNavItem : indexStyles.bottomNavItem}
          onPress={() => router.push(route as RoutePath)}
        >
          <MaterialCommunityIcons name={icon} size={iconSize} color="#007AFF" />
          <Text style={indexStyles.bottomNavText}>{label}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
)}


        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
