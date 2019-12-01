import { StyleSheet, Dimensions } from 'react-native';

const RehabResultsStyle = StyleSheet.create({
    rehabAddress: {
        fontSize: 11,
        flex:2
    },

    RehabDistance:{
        fontSize:10,
        flex:0.3,
    },

    RehabName: {
        fontSize: 19,
        margin:Dimensions.get("window").width/160,
    },

    AddressBox:{
        height:20,
        width:60,
        flex:1
    },
    
    bookMarkIcon: {
        width:Dimensions.get("window").width/30, 
        height:Dimensions.get("window").height/60, 
        borderRadius:60, 
        position:'absolute', 
        backgroundColor:'white',
        justifyContent:'center', 
        alignItems:'center', 
        margin:"4%",
        left:"83%",
        top:-10,
        shadowOffset:{  width: 1,  height:1,  },
        shadowColor: 'black',
        shadowOpacity: 0.4, 
        shadowRadius:3,
    },

    RehabDescription:{
        fontSize:14,
        flex:1, 
    },
 
    RatingContainer:{
        flexDirection:'row', 
        justifyContent:'center',
        margin:Dimensions.get("window").width/180,

    },

    RatingNum: {
        flex:0.12, 
        fontSize:12, 
        justifyContent:'center'
    },

    AddressAndKm: {
        flexDirection:"row", 
        
 

        
        
    }




})
export default RehabResultsStyle;

