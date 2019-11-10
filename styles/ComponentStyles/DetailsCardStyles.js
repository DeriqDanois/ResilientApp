import {StyleSheet} from 'react-native'


const DetailsCardStyles = StyleSheet.create({
    SlidableCard:{
        flex:1, 
    },

    BodyText:{
        marginTop:10,
     
    }, 
    rowText:{
        marginTop:10,
        flex:1,
    }, 
    ButtonText:{
       textAlign:'center',
       fontSize:12,

    }, 
    HeaderText:{
        marginTop:5,
        alignSelf:"center",
        fontSize:16,
        fontWeight:'bold',
   
    }, 

    TypeofCenter:{
        marginTop:5,
        left: "10%",
        fontSize:12,
       color:'grey',
     
   

    },
    Types:{
        marginTop:20,
        fontSize:12,
       color:'grey',
        flex:1,
    },

    BodyTextContainer: {
         marginTop:0, 
         marginLeft:40,
         position:'absolute',
    },

    StarBox:{
        flex:1,
        marginBottom:12,
        alignSelf:'auto',
    }, 
    containertwo: {
        flex: 1,
  
      },
      scrollView: {
        marginHorizontal: 15,
     
      },

})

export default DetailsCardStyles;