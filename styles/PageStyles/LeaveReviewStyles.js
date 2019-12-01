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

        resizeMode:"contain"
    },

    starbox: {
        marginTop:'2%', 
        marginBottom:'5%'
    },

    infoAndAvatar: {
        flex:1, 
        flexDirection:"row", 
        marginLeft:Dimensions.get('window').width/24,
        marginTop:Dimensions.get('window').width/24
    },

    inputSubmitView: {
        flex:1, 
        alignContent:'center', 
        justifyContent:'center',
        marginBottom:'10%'
    },

    submitButton: {
        borderRadius:18, 
        width:Dimensions.get('window').width/2.5, 
        height:Dimensions.get('window').height/26, 

        backgroundColor:'#568c9e', 
        justifyContent:'center',
        alignItems:'center'
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
        marginTop:Dimensions.get('window').height/60,
        letterSpacing:0.9,    
       
},

})

export default LeaveReviewStyles;