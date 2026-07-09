// app/styles/quizStyles.ts
import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const quizStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    backgroundColor: colors.background,
    flexGrow: 1,
    paddingBottom: spacing.xl,
  },
  content: {
    width: '100%',
  },
  title: {
    color: colors.ink,
    fontSize: 26,
    fontWeight: '600',
    letterSpacing: 0,
    textAlign: 'center',
  },
  headerRow: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
    minWidth: 0,
    position: 'relative',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 21,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },

  input: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.md,
    color: colors.ink,
    fontSize: 16,
    marginBottom: spacing.md,
    padding: 14,
  },
  questionContainer: {
    marginBottom: spacing.lg,
  },
  questionText: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  optionButton: {
    backgroundColor: colors.primarySoft,
    borderRadius: radius.pill,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  optionButtonSelected: {
    backgroundColor: colors.primary,
  },
  optionText: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '500',
  },
  optionTextSelected: {
    color: colors.card,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    marginTop: spacing.md,
    paddingVertical: 14,
  },
  submitButtonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '700',
  },
  skipButton: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  skipText: {
    color: colors.primaryDark,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default quizStyles;
