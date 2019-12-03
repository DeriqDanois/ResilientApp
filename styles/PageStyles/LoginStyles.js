import { StyleSheet } from 'react-native';



const stylesSignUp = StyleSheet.create({

    inputStyle: {
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "left",
        width: 250,
        height: 30,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginBottom: 40,
        fontSize:18,
        color:'white',
    },  

    buttonsText: {
        fontSize: 16,
        color: "white",
        fontWeight:"bold"
    },

    buttons: {
        borderWidth: 2.5,
        borderColor:"white",
        borderRadius: 40,
        fontSize: 10,
        alignItems:"center",
        justifyContent: "center",
        height:45,
        width:250,
        backgroundColor:'#002F43',     
    },

    LoginImage: {
        flex:1,
        width:"100%",
        height:"100%",
        resizeMode: 'cover',
        opacity:0.7
    },
    
    LoginBottamHalf: {
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
        backgroundColor:'#002F43',      
    },
    Logo: {
        position:'absolute',
        alignSelf:'center',
        top:'20%',
    },


    container: {
        flex: 1,
        alignSelf: "stretch",
    },

    // Login Signup bar


    OpaqueView: { 
        opacity:0.6,
        position: 'absolute',
        top: "46%",
        width:'100%',
        height:"7%",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'#002F43',  
        }

})

export default stylesSignUp;