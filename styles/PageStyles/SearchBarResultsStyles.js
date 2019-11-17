import { StyleSheet, Dimensions } from 'react-native';


const SearchBarResultsStyles = StyleSheet.create({

  ResultsDescriptionText:{
        fontSize:20, 
        textAlign:'center'
  },

    ResultsBox: { 
        marginTop:10,
       
        width:"80%", 
        height:100, 
        backgroundColor:'white', 
        borderWidth:0.5, 
        width:Dimensions.get("window").width, 
        alignSelf:'center', 
        justifyContent:'center' 
    },

    InputStyle:{
        width:"80%", 
        height:30, borderWidth:1, 
         borderColor:'teal', 
         textAlign:'center', 
         alignSelf:'center'
    },




})

export default SearchBarResultsStyles;

