import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

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
        flex:1
    },
    
    LoginBottamHalf: {
    alignItems:'center',
    justifyContent:'center',
    flex: 0.75,
    backgroundColor:'#002F43',      
    },


    container: {
        flex:1, 
    
    },

    SignUpText:
    { color:'white', 
    textAlign:'center',
     fontSize:20, 
     flex:0.5,
    fontWeight:'bold'} 
})

export default styles;