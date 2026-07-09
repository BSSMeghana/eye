import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const PostStyles = StyleSheet.create({
  compactContainer: {
    borderRadius: radius.sm,
    marginBottom: spacing.sm,
    padding: spacing.sm,
  },
  compactImage: {
    height: 138,
    marginBottom: spacing.sm,
  },
  compactMeta: {
    fontSize: 10,
  },
  compactSummary: {
    fontSize: 14,
    lineHeight: 20,
  },
  compactTitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  largeContainer: {
    padding: spacing.lg,
  },
  largeImage: {
    height: 188,
  },
  tinyImage: {
    height: 118,
  },
  postContainer: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    marginBottom: spacing.md,
    overflow: 'hidden',
    padding: spacing.md,
  },
  postImage: {
    borderRadius: radius.sm,
    height: 164,
    marginBottom: spacing.md,
    width: '100%',
  },
  postMeta: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0,
    marginBottom: spacing.xs,
    textTransform: 'uppercase',
  },
  postSummary: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  postTitle: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 24,
    marginBottom: spacing.xs,
  },
});

export default PostStyles;
