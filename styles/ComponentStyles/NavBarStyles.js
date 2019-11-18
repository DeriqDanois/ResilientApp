import { StyleSheet, ImageBackground } from 'react-native'; 

const NavBarStyles = StyleSheet.create({
 
    container: {
        alignItems:'center', 
        height:"6%",
        width:'100%',
        shadowOffset:{  width: -2,  height:-2,},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        backfaceVisibility:'hidden',
        
      
    }

    
})

export default NavBarStyles;