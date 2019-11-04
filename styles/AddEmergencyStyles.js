import { StyleSheet } from 'react-native';


const EmergencyContactStyles = StyleSheet.create({
    HeaderText: {
        color: "#568C9E",
        fontSize: 24,
        textAlign: "left",
  
       
    
    },
    
    HeaderTextSmall: {
        fontSize:14,
        textAlign: 'left',
        left: 5,
        width: 310,
        

    },

    inputStyle: {
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "left",
        width: 320,
        height:38,
        borderColor: "#568C9E",
        borderWidth: 1,
        margin: 15,
        borderRadius: 12,
    },

    inputTextHeader: {
        color: "#568C9E",
        fontSize: 15,
        marginLeft:18.5,
        fontWeight:"bold",
        
    },

    buttonsText: {
        fontSize: 18,
        color: "white",
    },

    buttons: {
        borderWidth: 2.5,
        borderColor:"#568C9E",
        borderRadius: 40,
        fontSize: 10,
        alignItems:"center",
        justifyContent: "center",
        marginTop:30,
        marginBottom:20,
        height: 50,
        width:250,
        backgroundColor:"#568C9E",
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 56, height: 13},     
    },

    LoginImage: {
        flex:5.5
    },
    

    InputContainer: {
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
    width:'100%',
    textAlign: 'center'
    },

    container: {
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: 10,
    
    },
    HeaderContainer: {
        flex:1, 
        paddingTop: 25,
        marginBottom: 25,
    },
    RecommendedInput: {
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
        width: 320,
        height:95,
        borderColor: "#568C9E",
        borderWidth: 1,
        margin: 15,
        borderRadius: 12,
    },
    RecommendedInputText: {
        color: "#568C9E",
        fontSize: 15,
        fontWeight:"bold",
        textAlign: 'center',

    
    }
  

})

export default EmergencyContactStyles;

