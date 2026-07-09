import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

const ThreeDotStyles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 40,
  },
  menu: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radius.sm,
    borderWidth: 1,
    elevation: 40,
    minWidth: 160,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xs,
    position: 'absolute',
    right: 0,
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 16,
    top: 40,
    zIndex: 50,
  },
  menuItem: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  menuItemText: {
    color: colors.ink,
    fontSize: 16,
  },
});

export default ThreeDotStyles;
