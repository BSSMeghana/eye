import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, usePathname, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MobileOnlyGate from '../components/MobileOnlyGate';
import { colors } from '../constants/theme';
import { VoiceProvider } from '../context/VoiceProvider'; // ✅ make sure this path is correct
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
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
  const { isTiny } = useResponsiveLayout();
  const hasShownIntro = useRef(false);

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded && !hasShownIntro.current && (pathname === '/' || pathname === '/index')) {
      hasShownIntro.current = true;
      router.replace('/Intro');
    }
  }, [loaded, pathname, router]);

  if (!loaded) return null;

  const hideNavRoutes = ['/Intro', '/quiz'];
  const showNav = !hideNavRoutes.includes(pathname);

  return (
    <VoiceProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <MobileOnlyGate>
          <SafeAreaView
            edges={['top']}
            style={{ backgroundColor: colors.background, flex: 1 }}
          >
            <View style={{ backgroundColor: colors.background, flex: 1 }}>
              <Stack
                initialRouteName="Intro"
                screenOptions={{
                  animation: 'none',
                  contentStyle: { backgroundColor: colors.background },
                  headerShown: false,
                }}
              >
                <Stack.Screen name="Intro" />
                <Stack.Screen name="index" />
                <Stack.Screen name="quiz" />
                <Stack.Screen name="UploadScreen" />
                <Stack.Screen name="EyeTestMenu" />
                <Stack.Screen name="EyeColor" />
                <Stack.Screen name="EyeGameMenu" />
                <Stack.Screen name="HomeCare" />
                <Stack.Screen name="DistanceVisionTest" />
                <Stack.Screen name="NearVisionTest" />
                <Stack.Screen name="PediatricVisionTest" />
                <Stack.Screen name="FollowDot" />
                <Stack.Screen name="ColorGame" />
                <Stack.Screen name="ResultScreen" />
                <Stack.Screen name="About" />
                <Stack.Screen name="Information" />
              </Stack>
            </View>

            {showNav && (
              <View style={indexStyles.fixedBottomNav}>
                {features.map(({ key, label, icon, route }) => {
                  const iconSize = isTiny ? 22 : 26;
                  const isActive = pathname === route || (route === '/' && pathname === '/index');
                  const navItemStyle = [
                    indexStyles.bottomNavItem,
                    isActive && indexStyles.bottomNavItemActive,
                  ];
                  const iconColor = isActive ? colors.primaryDark : colors.primary;

                  return (
                    <TouchableOpacity
                      key={key}
                      style={navItemStyle}
                      onPress={() => {
                        if (!isActive) {
                          router.navigate(route as RoutePath);
                        }
                      }}
                      activeOpacity={0.78}
                      accessibilityRole="button"
                      accessibilityLabel={label}
                    >
                      <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />
                      {!isTiny && (
                        <Text style={[indexStyles.bottomNavText, isActive && indexStyles.bottomNavTextActive]}>
                          {label}
                        </Text>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}

            <StatusBar backgroundColor={colors.background} style="dark" translucent={false} />
          </SafeAreaView>
        </MobileOnlyGate>
      </ThemeProvider>
    </VoiceProvider>
  );
}
