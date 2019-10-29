import { StyleSheet } from 'react-native';



const stylesSignUp = StyleSheet.create({



    inputStyle: {
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "left",
        width: 250,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 1,
    },

    buttonsText: {
        fontSize: 15,
        color: "white",
    },

    buttons: {
        borderWidth: 2.5,
        borderColor:"white",
        borderRadius: 40,
        fontSize: 10,
        alignItems:"center",
        justifyContent: "center",
        marginTop:30,
        marginBottom:20,
        height: 40,
        width:250,
        backgroundColor:'#002F43',   
    },

    LoginImage: {
        width: 500,
        height: 400,
        flex:1

    },

    imageContainer: {
        alignItems: "center",
        justifyContent:"center",
        position:"absolute",
    },
    
    LoginBottamHalf: {
        alignItems:'center',
        justifyContent:'center',
        flex:0.75,
        width:'100%',
        backgroundColor:'#002F43',      
    },

    SignUpText:{ color:'white', 
    textAlign:'center',
     fontSize:20, 
     flex:0.5,
    fontWeight:'bold'},

    
    
})

export default stylesSignUp;