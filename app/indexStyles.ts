import { StyleSheet } from 'react-native';

const indexStyles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    flexGrow: 1,
    paddingBottom: 80, // space for bottom navigation
  },

  header: {
  flexDirection: 'row',        // align children horizontally
  alignItems: 'center',        // vertically center items
  justifyContent: 'center',    // center title + subtitle horizontally
  position: 'relative',        // so the hamburger icon absolute works relative to header
  paddingVertical: 8,
  paddingHorizontal: 40,       // some padding on left and right
},


  title: {
    marginTop: -5,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#064578',
    textAlign: 'center',
  },

  footerContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerText: {
    fontSize: 17,
    color: '#444',
  },

  backButton: {
    backgroundColor: 'white',
    // The position and placement of back button handled inline in component for flexibility
  },

  fixedBottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: -15,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  bottomNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 13,
  },

  centerNavItem: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 20,
    marginTop: -25,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  bottomNavText: {
    fontSize: 10,
    color: '#4fa9f6',
    marginTop: 3,
  },
});

export default indexStyles;
