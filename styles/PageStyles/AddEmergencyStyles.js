import { StyleSheet } from 'react-native';


const EmergencyContactStyles = StyleSheet.create({
    HeaderText: {
        marginTop:'5%',
        flex:1,
        color: "black",
        fontSize: 23,
        textAlign: "left",
        fontWeight: "600",
        marginLeft:"2%"
    },
    
    HeaderTextSmall: {
        marginTop:"1%",
        marginBottom:"2%",
        fontSize:16,
        textAlign: 'left',
        left: 5,
        flex: 1,
        width:"100%",
        color:"#404040",
        lineHeight:23
    },

    inputStyle: {
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "left",
        paddingLeft:20,
        width: '85%',
        height:"7%",
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
        marginBottom:20,
        height: "35%",
        width:"60%",
        backgroundColor:"#568C9E",    
    },
    

    InputContainer: {
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
        width:'100%',
        textAlign: 'center',
    },

    container: {
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    
    HeaderContainer: {

       flex:0.4, 
       marginLeft:'5%',
       marginTop:'15%',
       width:"80%",
       marginBottom:-40  
    },

    RecommendedButton: {
        
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
        width: '85%',
        height:"50%",
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

