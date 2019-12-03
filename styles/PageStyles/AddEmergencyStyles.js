import { StyleSheet } from 'react-native';


const EmergencyContactStyles = StyleSheet.create({
    HeaderText: {
   
        marginBottom:'10%',
        color: "black",
        fontSize: 23,
        textAlign: "left",
        fontWeight: "600",
        marginLeft:"2%",
      
        
    },
    
    HeaderTextSmall: {
        marginBottom:"5%",
        fontSize:16,
        textAlign: 'left',
        left: 5,
        width:"100%",
        color:"#404040",
        lineHeight:22,

    },

    inputStyle: {
       
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "left",
        paddingLeft:20,
        width: '85%',
        height:"9%",
        borderColor: "#568C9E",
        borderWidth: 1.5,
        borderRadius: 12,
        margin: "3.5%",
        borderRadius: 12,
        fontSize:16
    },

    inputTextHeader: {
        color: "#568C9E",
        fontSize: 16,
        marginLeft:"7%",
        fontWeight:"bold",
        
        
    },

    buttonsText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },

    buttons: {
        borderWidth: 2.5,
        borderColor:"#568C9E",
        borderRadius: 40,
        fontSize: 10,
        alignItems:"center",
        alignSelf:"center",
        justifyContent: "center",
        width:"60%",
        flex:1,
        backgroundColor:"#568C9E",   
        

    },
    

    container: {
        marginTop:"11%",
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        
    },
    
    HeaderContainer: {
     
       marginLeft:'5%',
       marginTop:'15%',
       width:"80%",
  
    },

    RecommendedButton: {
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
        width: '85%',
        height:"39%",
        borderColor: "#568C9E",
        borderWidth: 1.5,
        borderRadius: 12,
        
    },
    RecommendedInputText: {
        color: "#568C9E",
        fontSize: 16,
        fontWeight:"bold",
        textAlign: 'center',
    }
})

export default EmergencyContactStyles;

