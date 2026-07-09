import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const ResultScreenStyles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.xl,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flexGrow: 1,
    justifyContent: 'center',
  },
  disclaimer: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: spacing.lg,
    textAlign: 'justify',
  },
  guidance: {
    backgroundColor: colors.primarySoft,
    borderRadius: radius.md,
    marginTop: spacing.lg,
    padding: spacing.md,
    width: '100%',
  },
  guidanceHeading: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  guidanceText: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
  },
  scoreText: {
    color: colors.muted,
    fontSize: 20,
    textAlign: 'center',
  },
  testName: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  title: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
});

export default ResultScreenStyles;
