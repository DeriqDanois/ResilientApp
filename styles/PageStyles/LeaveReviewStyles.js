import { StyleSheet, Dimensions } from 'react-native';


const LeaveReviewStyles = StyleSheet.create({
    

 
    UsernameAndTimeBox: {
        flex:4, 
        flexDirection:"column"
    },

    Username: {
        marginTop:"3%",
        fontSize:15,
    },

    TimePosted: {
        marginTop:"3%",
        fontSize:11,
    },

    reviewAndInputCont: {
        justifyContent:'center', 
        alignItems:'center'
    },
  

    Avatar: {
        flex:1,
        height: 65,
        width: 65,
        margin: 5,
        resizeMode:"contain"
    },

    starbox: {
        marginTop:'2%', 
        marginBottom:'5%'
    },

    infoAndAvatar: {
        flex:1, 
        flexDirection:"row", 
        marginTop:"7%", 
        marginLeft:"7%"
    },

    inputSubmitView: {
        flex:1, 
        flexDirection:"row",  
        alignContent:'center', 
        justifyContent:'center'
    },

    submitButton: {
        borderRadius:18, 
        width:140, 
        height:40, 
        marginTop:'5%', 
        backgroundColor:'#568c9e', 
        justifyContent:'center'
    },

    submitButtonText: {
        textAlign:'center', 
        fontWeight:'bold', 
        color:'white', 
        fontSize:15,
    },

   



    inputStyles: {
        paddingLeft:'3%',
        paddingBottom:'30%',
        height:Dimensions.get("window").height/5, 
        width:Dimensions.get("window").width/1.1, 
        borderColor:"#568C9E",
        borderWidth: 1.75, 
        borderRadius:10, 
        alignSelf:'center', 

        
       
},

})

export default LeaveReviewStyles;