import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const MenuStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: spacing.sm,
    minHeight: 56,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
    width: '100%',
  },
  buttonCompact: {
    borderRadius: radius.sm,
    marginVertical: spacing.xs,
    minHeight: 50,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  buttonLarge: {
    minHeight: 62,
    paddingVertical: spacing.md,
  },
  buttonText: {
    color: colors.primaryDark,
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
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flexGrow: 1,
    justifyContent: 'center',
  },
  gameButton: {
    marginBottom: 20,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  gameContent: {
    width: '100%',
  },
  gameTitle: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: 40,
    textAlign: 'center',
  },
  gameTitleCompact: {
    fontSize: 20,
    lineHeight: 26,
    marginBottom: spacing.lg,
  },
  gameTitleLarge: {
    fontSize: 26,
    lineHeight: 32,
    marginBottom: 44,
  },
  menuContent: {
    width: '100%',
  },
  scrollContainer: {
    minHeight: '100%',
  },
  title: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  titleCompact: {
    fontSize: 20,
    lineHeight: 26,
    marginBottom: spacing.md,
  },
  titleLarge: {
    fontSize: 26,
    lineHeight: 32,
    marginBottom: spacing.xl,
  },
});

export default MenuStyles;
