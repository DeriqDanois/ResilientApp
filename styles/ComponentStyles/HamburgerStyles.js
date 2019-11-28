import { StyleSheet } from 'react-native';


const HamburgerStyles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: 'white',
   
      justifyContent: 'space-around',
    },
    EditProfileText: {
      fontSize: 16,
      color: '#568C9E',
      paddingVertical: 6,
      fontWeight:"500",
    },
    UsernameText: {
      fontSize: 28,
      letterSpacing: 0.4,
      fontWeight: "600",
    },

  });

  export default HamburgerStyles;