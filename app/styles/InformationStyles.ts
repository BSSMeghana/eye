import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const InformationStyles = StyleSheet.create({
  bullet: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 4,
  },
  bulletCompact: {
    fontSize: 14,
    lineHeight: 21,
  },
  bulletContainer: {
    marginBottom: 12,
    marginLeft: 12,
  },
  bulletLarge: {
    fontSize: 17,
    lineHeight: 25,
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
  container: {
    alignItems: 'center',
    flexGrow: 1,
  },
  heading: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27,
    marginBottom: 8,
  },
  headingCompact: {
    fontSize: 18,
    lineHeight: 24,
  },
  headingLarge: {
    fontSize: 22,
    lineHeight: 29,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    minHeight: 44,
  },
  headerSpacer: {
    width: 44,
  },
  paragraph: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
  },
  paragraphCompact: {
    fontSize: 14,
    lineHeight: 21,
  },
  paragraphLarge: {
    fontSize: 17,
    lineHeight: 25,
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  subHeading: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 12,
  },
  subHeadingCompact: {
    fontSize: 15,
    lineHeight: 21,
  },
  subHeadingLarge: {
    fontSize: 17,
    lineHeight: 24,
  },
  title: {
    color: colors.ink,
    flex: 1,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    marginHorizontal: spacing.sm,
    textAlign: 'center',
  },
  titleCompact: {
    fontSize: 20,
    lineHeight: 26,
  },
  titleLarge: {
    fontSize: 26,
    lineHeight: 32,
  },
});

export default InformationStyles;
