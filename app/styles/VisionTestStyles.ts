import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const VisionTestStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    flex: 1,
    justifyContent: 'center',
    minHeight: 52,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
  },
  buttonCompact: {
    minHeight: 48,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  buttonLarge: {
    minHeight: 58,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
    width: '100%',
  },
  buttonsContainerCompact: {
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  buttonsStacked: {
    flexDirection: 'column',
  },
  buttonText: {
    color: colors.card,
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
  distanceContainer: {
    minHeight: '100%',
  },
  distanceContent: {
    alignItems: 'center',
    gap: spacing.lg,
    justifyContent: 'center',
    marginTop: spacing.md,
    width: '100%',
  },
  distanceLetterContainer: {
    flexGrow: 0,
    minHeight: 180,
    width: '100%',
  },
  distanceLetterContainerTiny: {
    minHeight: 140,
  },
  instruction: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  instructionCompact: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  instructionLarge: {
    fontSize: 17,
    lineHeight: 24,
  },
  letter: {
    color: colors.testStimulus,
    fontWeight: 'bold',
    includeFontPadding: false,
    textAlign: 'center',
  },
  letterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nearButtonsContainer: {
    marginBottom: 0,
    marginTop: spacing.lg,
  },
  nearContainer: {
    minHeight: '100%',
  },
  nearContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  nearInstruction: {
    marginBottom: spacing.xl,
  },
  nearLetterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
    width: '100%',
  },
});

export default VisionTestStyles;
