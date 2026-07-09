import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../constants/theme';

const PediatricVisionTestStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flexGrow: 1,
  },
  instruction: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  symbol: {
    color: colors.testStimulus,
    fontWeight: 'bold',
    marginHorizontal: spacing.xs,
  },
  symbolRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.lg,
    width: '100%',
  },
});

export default PediatricVisionTestStyles;
