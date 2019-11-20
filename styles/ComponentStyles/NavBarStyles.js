import { StyleSheet, ImageBackground } from 'react-native'; 

const NavBarStyles = StyleSheet.create({
 
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:"flex-end", 
        width:'100%',
        shadowOffset:{  width: 0,  height:0},
        shadowColor: 'black',
        shadowRadius:12,
        shadowOpacity: 0.25,
        backfaceVisibility:'hidden',
    }

    
})

export default NavBarStyles;