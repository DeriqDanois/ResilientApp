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
        
  
        
    },

    container: {
        alignItems:'center', 
        alignSelf:'center', 
        height:"8.30%", 
        width:'100%',
        shadowOffset:{  width: -2,  height:-2,},
        shadowRadius:15,
        shadowColor: 'black',
        color:"blue",
        shadowOpacity: 0.2,
        backfaceVisibility:"hidden"
    }

    
})

export default NavBarStyles;