import type { ReactNode } from 'react';
import { Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { colors, radius, spacing } from '../constants/theme';

type MobileOnlyGateProps = {
  children: ReactNode;
};

const MAX_PHONE_WIDTH = 767;

export default function MobileOnlyGate({ children }: MobileOnlyGateProps) {
  const { width } = useWindowDimensions();
  const shouldShowMobileMessage = Platform.OS === 'web' && width > MAX_PHONE_WIDTH;

  if (!shouldShowMobileMessage) {
    return children;
  }

  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.title}>Best viewed on mobile</Text>
        <Text style={styles.message}>
          DRUSHTI is designed for phone screens and camera-based use. Please open this app on
          your mobile device for the best experience.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  messageBox: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    maxWidth: 460,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },
  message: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  title: {
    color: colors.ink,
    fontSize: 26,
    fontWeight: '700',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
});
