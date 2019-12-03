import { StyleSheet, ImageBackground, Dimensions } from 'react-native'; 

const NavBarStyles = StyleSheet.create({
 
    container: {
        flex:0.02,
        height:Dimensions.get('window').height/50,
        bottom:0,
        alignItems:'center',
        shadowOffset:{  width: 0,  height:0},
        shadowColor: 'black',
        justifyContent:'flex-end',
        shadowRadius:12,
        shadowOpacity: 0.25,
    
    }
    

    
})

export default NavBarStyles;