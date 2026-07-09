import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../constants/theme';

const AboutStyles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  bullet: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 6,
  },
  bulletCompact: {
    fontSize: 14,
    lineHeight: 21,
  },
  bulletContainer: {
    marginBottom: 12,
  },
  bulletLarge: {
    fontSize: 17,
    lineHeight: 25,
  },
  container: {
    alignItems: 'center',
    flexGrow: 1,
  },
  highlight: {
    color: colors.primary,
    fontWeight: '600',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
    minHeight: 44,
  },
  headerSpacer: {
    width: 44,
  },
  italic: {
    fontStyle: 'italic',
  },
  paragraph: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
    textAlign: 'justify',
  },
  paragraphCompact: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: spacing.sm,
  },
  paragraphLarge: {
    fontSize: 17,
    lineHeight: 25,
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
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

export default AboutStyles;
