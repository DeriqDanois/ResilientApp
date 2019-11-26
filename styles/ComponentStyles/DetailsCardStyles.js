import {StyleSheet} from 'react-native'


const DetailsCardStyles = StyleSheet.create({
    SlidableCard:{
        flex:1, 
    },


    DirectionText:{
        marginTop:10,
        marginLeft:'5%',
     
    }, 
    rowText:{
        alignSelf:'center',
        flex:1,
    }, 
    ButtonText:{
       textAlign:'center',
       fontSize:12,
       color:'white',
       fontWeight:'bold'

    }, 
    HeaderText:{
        textAlign:"left",
        marginLeft:"5%",
        margin:9,
        fontSize:17,
        fontWeight:'500',
   
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
        fontSize:15
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