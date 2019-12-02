import {StyleSheet, Dimensions} from 'react-native'


const DetailsCardStyles = StyleSheet.create({
    SlidableCard:{
        flex:1, 
    },


    DirectionText:{
        marginTop:10,
        marginLeft:'5%',
        fontSize:16,
     
    }, 
    rowText:{
        alignSelf:'center',
        fontSize:16,
        flex:1,
    }, 
    ButtonText:{
       textAlign:'center',
       fontSize:14,
       color:'white',
       fontWeight:'bold'

    }, 
    HeaderText:{
        textAlign:"left",
        marginLeft:"5%",
        margin:9,
        fontSize:22,
        fontWeight:'500',
   
    }, 

    bookMarkIcon: {
        width:60, 
        height:60, 
        borderRadius:60, 
        position:'absolute', 
        backgroundColor:'white',
        justifyContent:'center', 
        alignItems:'center',
        top:Dimensions.get('window').width/-7.8,
        left:"75%",
        shadowOffset:{  width: 3,  height:3,  },
        shadowColor: 'black',
        shadowOpacity: 0.2, 
    },

   
    containertwo: {
        flex: 1,
  
      },
      
      scrollView: {
        marginHorizontal: 15,
      },


    //   Facilities styles below

    facilityTextHeader:{
        marginTop:'10%', 
        marginLeft:"4%", 
        fontWeight:"bold", 
        fontSize:20
    },

    rowViews:{
        flex:1, 
        flexDirection:"row",  
        alignItems:"center", 
        borderBottomWidth:0.5, 
        width:'100%',
        borderBottomColor:'grey',
    
    },

    facilitiesText:{
        margin:'5%'
    },

    //Views inside the row to hold the text
    rowColumnViews:{
        flex:1, 
        margin:'5%'
        

    }

})

export default DetailsCardStyles;