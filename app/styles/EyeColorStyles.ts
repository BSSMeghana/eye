import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const EyeColorStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    justifyContent: 'center',
    minHeight: 52,
    minWidth: 140,
    paddingHorizontal: 40,
    paddingVertical: 14,
  },
  buttonCompact: {
    minHeight: 48,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  buttonLarge: {
    minHeight: 58,
    minWidth: 160,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  buttonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'center',
  },
  buttonTextCompact: {
    fontSize: 15,
    lineHeight: 20,
  },
  buttonTextLarge: {
    fontSize: 17,
    lineHeight: 24,
  },
  completedText: {
    color: colors.primaryDark,
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  instruction: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  instructionCompact: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  instructionLarge: {
    fontSize: 17,
    lineHeight: 24,
  },
  letter: {
    borderRadius: radius.md,
  },
  letterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
    width: '100%',
  },
});

export default EyeColorStyles;
