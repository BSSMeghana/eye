import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../constants/theme';

const IntroStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  logo: { height: 70, width: 70 },
  logoCompact: { height: 60, width: 60 },
  logoShell: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
    padding: spacing.md,

  },
  logoShellCompact: {
    marginBottom: spacing.md,
  },
  loader: {
    marginTop: spacing.xl,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    fontWeight: '500',
    marginTop: spacing.xs,
  },
  title: { color: colors.ink, fontSize: 34, fontWeight: '600', letterSpacing: 0 },
  titleCompact: { fontSize: 30 },
});

export default IntroStyles;
