import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const HomeCareStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flexGrow: 1,
  },
  content: {
    width: '100%',
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    marginBottom: spacing.md,
    padding: spacing.md,
  },
  cardCompact: {
    borderRadius: radius.sm,
    padding: spacing.sm,
  },
  cardLarge: {
    padding: spacing.lg,
  },
  cardFoldable: {
    borderRadius: radius.lg,
  },
  cardTitle: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 26,
    marginBottom: spacing.sm,
  },
  cardTitleCompact: {
    fontSize: 18,
    lineHeight: 24,
  },
  cardTitleLarge: {
    fontSize: 22,
    lineHeight: 29,
  },
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  descriptionCompact: {
    fontSize: 14,
    lineHeight: 20,
  },
  descriptionLarge: {
    fontSize: 16,
    lineHeight: 24,
  },
  image: {
    aspectRatio: 16 / 9,
    backgroundColor: colors.primarySoft,
    borderRadius: radius.sm,
    marginBottom: spacing.md,
    width: '100%',
  },
  link: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  linkButton: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    minHeight: 44,
    paddingVertical: spacing.xs,
  },
  linkCompact: {
    fontSize: 14,
  },
  pageTitle: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  pageTitleCompact: {
    fontSize: 20,
    lineHeight: 26,
  },
  pageTitleLarge: {
    fontSize: 26,
    lineHeight: 32,
  },
  subtitleCompact: {
    fontSize: 14,
    lineHeight: 20,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  subtitleLarge: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default HomeCareStyles;
