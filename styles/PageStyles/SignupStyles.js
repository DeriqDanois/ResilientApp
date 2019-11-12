import { StyleSheet } from 'react-native';



const stylesSignUp = StyleSheet.create({

    inputStyle: {
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "left",
        width: 250,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 15,
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
        flex:1,
        width:undefined,
        height:undefined,
        resizeMode: 'cover'
    },
    
    LoginBottamHalf: {
        alignItems:'center',
        justifyContent:'center',
        flex: 0.65,
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

    // Signup bar below

    SignUpText:{
        color:'white', 
        textAlign:'center',
        fontSize:20, 
        justifyContent:"center",
        fontWeight:'bold',
    } ,

    OpaqueView: { 
        opacity:0.7,
        position: 'absolute',
        top: "55%",
        width:'100%',
        height:"6%",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'#002F43',  
        }

})

export default stylesSignUp;