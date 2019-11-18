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
        margin: "2%",
    },

    AddressBox:{
        height:20,
        width:60,
        flex:1
    },
    
    bookMarkIcon: {
        width:25, 
        height:25, 
        borderRadius:60, 
        position:'absolute', 
        backgroundColor:'white',
        justifyContent:'center', 
        alignItems:'center', 
        margin:"2%",
        left:"83%",
        shadowOffset:{  width: 5,  height:5,  },
        shadowColor: 'black',
        shadowOpacity: 0.2, 
    },
    RehabDescription:{
        fontSize:14,
        flex:1,
        
    },
 
    RatingContainer:{
        flexDirection:'row', 
        width:300, 
        marginTop:6
    },

    RatingNum: {
        flex:0.15, 
        fontSize:12, 
        justifyContent:'center'
    },

    AddressAndKm: {
        flexDirection:"row", 
        width:"100%",

        
    }




})
export default RehabResultsStyle;

