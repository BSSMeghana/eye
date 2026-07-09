import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const ColorGameStyles = StyleSheet.create({
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
  finalScore: {
    color: colors.primaryDark,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 30,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  header: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  headerCompact: {
    fontSize: 20,
    lineHeight: 26,
  },
  headerLarge: {
    fontSize: 26,
    lineHeight: 32,
  },
  playAgainButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    justifyContent: 'center',
    minHeight: 52,
    minWidth: 160,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm,
  },
  playAgainText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'center',
  },
  resultCard: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.xl,
    width: '100%',
  },
  score: {
    color: colors.muted,
    fontSize: 18,
    lineHeight: 24,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  scoreCompact: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  scoreLarge: {
    fontSize: 19,
    lineHeight: 26,
  },
  square: {
    borderRadius: radius.sm,
  },
});

export default ColorGameStyles;
