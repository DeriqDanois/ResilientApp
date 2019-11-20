import { StyleSheet } from 'react-native';


const EmergencyContactStyles = StyleSheet.create({
    HeaderText: {
        marginTop:'5%',
        flex:1,
        color: "#568C9E",
        fontSize: 23,
        textAlign: "left",
    },
    
    HeaderTextSmall: {
        marginTop:"1%",
        letterSpacing: 0.7,
        fontSize:12,
        textAlign: 'left',
        left: 5,
        flex: 1,
        width:"100%",
    },

    inputStyle: {
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
        width: '80%',
        height:"7%",
        borderColor: "#568C9E",
        borderWidth: 1,
        borderRadius: 12,
        margin: "3.5%",
        borderRadius: 12,
    },

    inputTextHeader: {
        color: "#568C9E",
        fontSize: 15,
        marginLeft:"10%",
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
        alignSelf:"center",
        justifyContent: "center",
        marginBottom:20,
        height: "47%",
        width:"60%",
        backgroundColor:"#568C9E",
        // shadowColor: 'black',
        // shadowOpacity: 1,
        // elevation: 6,
        // shadowRadius: 15 ,
        // shadowOffset : { width: 56, height: 13},     
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

       flex:0.49, 
       marginRight:'20%',
       marginLeft:'5%',
       marginTop:'15%',
       width:"70%",    
    },

    RecommendedButton: {
        
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
        width: '80%',
        height:"40%",
        borderColor: "#568C9E",
        borderWidth: 1,
        borderRadius: 12,
       
    },
    RecommendedInputText: {
        color: "#568C9E",
        fontSize: 14,
        fontWeight:"bold",
        textAlign: 'center',
    }
})

export default EmergencyContactStyles;

