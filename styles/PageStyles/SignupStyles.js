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
        marginBottom: 25,
        fontSize:16,
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
        alignItems:"center",
        justifyContent: "center",
        marginTop:"4%",
        marginBottom:10,
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
        top:'25%',
    },


    container: {
        flex: 1,
        alignSelf: "stretch",
    },

    // Login Signup bar

    SignUpText:{
        color:'white', 
        textAlign:'center',
        fontSize:20, 
        justifyContent:"center",
        fontWeight:'bold',
    } ,

    OpaqueView: { 
        opacity:0.6,
        position: 'absolute',
        top: "47.5%",
        width:'100%',
        height:"7%",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'#002F43',  
        }

})

export default stylesSignUp;