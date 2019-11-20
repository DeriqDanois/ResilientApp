import { StyleSheet, ImageBackground } from 'react-native'; 

const NavBarStyles = StyleSheet.create({
 
    container: {
        flex:0.08,
        alignItems:'center',
        justifyContent:"flex-end", 
       
        shadowOffset:{  width: 0,  height:0},
        shadowColor: 'black',
        shadowRadius:12,
        shadowOpacity: 0.25,

    }

    
})

export default NavBarStyles;