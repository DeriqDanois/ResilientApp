import { StyleSheet } from 'react-native';


const NavBarStyles = StyleSheet.create({
    NavBarBody: {
        textAlign: "center",
        width: "100%",
        height: 80,
        backgroundColor: 'white',
        position:'absolute',
        bottom:0,
        borderWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
  
    },

    icons: {
        height: 20,
        margin: 30,
        alignItems:'center',
        justifyContent: 'center',
        flex: 1,
    },
    
    sosButton: {
        height: 95,
        backgroundColor: 'teal',
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center',
        margin: 0,
        top: -25,
        flex: 1,
    },
    sosText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    Image: {
        width:45,
        height:40,
    }
    
})

export default NavBarStyles;