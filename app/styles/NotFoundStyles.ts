import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const NotFoundStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: 12,
  },
  buttonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '500',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  title: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: 10,
  },
});

export default NotFoundStyles;
