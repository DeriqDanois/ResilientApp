import { StyleSheet } from 'react-native'; 

const NavBarStyles = StyleSheet.create({
    NavBarBody: {
        textAlign: "center",
        width: "100%",
        height: 75,
        backgroundColor: '#E7F7FC',
        borderWidth: 0.5,
        borderColor: '#ECEAED',
        flexDirection: 'row',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // shadowColor: 'black',
        // shadowOpacity: 1,
        // elevation: 20,
        // shadowRadius: 50 ,
        // shadowOffset : { width: 56, height: 23},
        shadowColor: "black",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 6
    },

    icons: {
        height: 20,
        margin: 30,
        alignItems:'center',
        justifyContent: 'center',
        flex: 1,
        width:20,
        
    },
    
    sosButton: {
        height: 95,
        backgroundColor: '#568C9E',
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center',
        margin: 0,
        top: -25,
        flex: 1,   
    },
    
    sosText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily:'NunitoSans-ExtraBold',
        textShadowColor: 'black',
       textShadowOffset: { width: 0.5, height: 1 },
       textShadowRadius: 5
    },
    Image: {
        width:45,
        height:40,
    }
    
})

export default NavBarStyles;