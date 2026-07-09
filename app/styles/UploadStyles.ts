import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const UploadStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flexGrow: 1,
  },

  content: {
    width: '100%',
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: spacing.md,
    minHeight: 48,
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

  headerSpacer: {
    width: 44,
  },

  instructionCard: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    marginBottom: spacing.md,
    overflow: 'hidden',
    paddingTop: spacing.lg,
  },

  instructionCopy: {
    paddingHorizontal: spacing.lg,
  },

  instructionTitle: {
    color: colors.ink,
    fontSize: 21,
    fontWeight: '800',
    marginBottom: spacing.xs,
  },

  instructionTitleCompact: {
    fontSize: 18,
  },

  instructionText: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },

  instructionImage: {
    marginTop: spacing.sm,
    width: '100%',
  },

  image: {
    width: '100%',
    borderRadius: radius.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.md,
    marginTop: spacing.md,
    width: '100%',
  },

  buttonRowStacked: {
    flexDirection: 'column',
    gap: spacing.sm,
  },

  resultBox: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    padding: spacing.lg,
    width: '100%',
    marginTop: spacing.sm,
  },

  resultText: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 23,
    marginBottom: spacing.xs,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(14, 43, 100, 0.34)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    maxWidth: 360,
    width: '86%',
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: colors.warning,
  },

  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.ink,
  },

  modalButton: {
    backgroundColor: colors.warning,
    borderRadius: radius.pill,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  modalButtonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '600',
  },

  // Added missing styles to fix your errors:

  previewWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
    width: '100%',
  },

  previewImage: {
    width: '100%',
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  errorText: {
    color: colors.warning,
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
  },

  resultContainer: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    marginTop: spacing.md,
    padding: spacing.lg,
    width: '100%',
  },

  resultHeading: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },

  resultTitle: {
    color: colors.ink,
    fontSize: 19,
    fontWeight: '800',
  },

  resultLabel: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 2,
    textTransform: 'uppercase',
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
  },

  buttonInRow: {
    flex: 1,
  },

  buttonSecondary: {
    backgroundColor: colors.card,
    borderColor: colors.primary,
    borderWidth: 1,
  },

  buttonSecondaryText: {
    color: colors.primary,
  },

  reportButton: {
    marginTop: spacing.sm,
  },

  buttonText: {
    color: colors.card,
    fontWeight: '600',
    fontSize: 16,
  },

  loadingText: {
    color: colors.muted,
    fontSize: 14,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
});

export default UploadStyles;
