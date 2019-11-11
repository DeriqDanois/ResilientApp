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

    container: {
        alignItems:'center', 
        alignSelf:'center', 
        height:"8.30%", 
        width:'100%',
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
    }

    
})

export default NavBarStyles;