import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

export const DOT_SIZE = 40;

const FollowDotStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  controlButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    justifyContent: 'center',
    minHeight: 54,
    minWidth: 180,
    paddingHorizontal: 60,
    paddingVertical: 16,
    position: 'absolute',
  },
  controlButtonCompact: {
    minHeight: 48,
    minWidth: 150,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm,
  },
  controlButtonLarge: {
    minHeight: 60,
    minWidth: 200,
  },
  controlButtonText: {
    color: colors.card,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
  },
  controlButtonTextCompact: {
    fontSize: 16,
    lineHeight: 22,
  },
  controlButtonTextLarge: {
    fontSize: 19,
    lineHeight: 26,
  },
  dot: {
    backgroundColor: colors.primary,
    borderRadius: DOT_SIZE / 2,
    height: DOT_SIZE,
    position: 'absolute',
    width: DOT_SIZE,
  },
  instruction: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    position: 'absolute',
    textAlign: 'center',
  },
  instructionCompact: {
    fontSize: 17,
    lineHeight: 24,
  },
  instructionLarge: {
    fontSize: 22,
    lineHeight: 30,
  },
});

export default FollowDotStyles;
