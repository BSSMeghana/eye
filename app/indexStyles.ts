import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../constants/theme';

const indexStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexGrow: 1,
    paddingBottom: 96,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },

  header: {
    alignItems: 'center',
    elevation: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 48,
    paddingBottom: spacing.sm,
    paddingTop: spacing.xs,
    zIndex: 30,
  },

  headerCompact: {
    minHeight: 42,
    paddingBottom: spacing.xs,
    paddingTop: 0,
  },

  headerActions: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 78,
  },

  headerIconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.xs,
    minHeight: 40,
    minWidth: 36,
  },

  headerSide: {
    width: 78,
  },

  headerTitleWrap: {
    alignItems: 'center',
    flex: 1,
  },


  title: {
    color: colors.ink,
    fontSize: 26,
    fontFamily: 'avenir-heavy',
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
  },

  titleCompact: {
    fontSize: 22,
  },

  titleLarge: {
    fontSize: 28,
  },

  subtitle: {
    fontSize: 15,
    color: colors.muted,
    marginTop: 8,
    marginBottom: 10,
    textAlign: 'center',
  },

  footerContainer: {
    marginTop: spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerText: {
    fontSize: 14,
    color: colors.muted,
    textAlign: 'center',
  },

  postsSection: {
    marginTop: spacing.sm,
  },

  postsSectionCompact: {
    marginTop: spacing.xs,
  },

  sectionTitle: {
    color: colors.ink,
    fontSize: 21,
    fontWeight: '800',
    marginBottom: spacing.md,
  },

  sectionTitleCompact: {
    fontSize: 18,
    marginBottom: spacing.sm,
  },

  sectionTitleLarge: {
    fontSize: 22,
  },

  backButton: {
    backgroundColor: colors.card,
    // The position and placement of back button handled inline in component for flexibility
  },

  fixedBottomNav: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    left: 0,
    minHeight: 86,
    paddingBottom: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    position: 'absolute',
    right: 0,
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 18,
},


  bottomNavItem: {
    alignItems: 'center',
    borderRadius: radius.md,
    justifyContent: 'center',
    flex: 1,
    minHeight: 56,
    paddingHorizontal: 2,
    paddingVertical: spacing.xs,
  },

  bottomNavItemActive: {
    backgroundColor: colors.primarySoft,
  },

  bottomNavText: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '700',
    marginTop: 4,
    textAlign: 'center',
  },

  bottomNavTextActive: {
    color: colors.primaryDark,
  },
  rightButtonsContainer: {
  flexDirection: 'row',
  position: 'absolute',
  right: 0,
  padding: 8,
  marginTop: -10,
  alignItems: 'center',
},

});

export default indexStyles;
