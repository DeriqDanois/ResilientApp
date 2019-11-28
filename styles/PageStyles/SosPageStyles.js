import { StyleSheet } from 'react-native';



const SosPageStyles = StyleSheet.create({
       containertwo: {
            flex: 1,
          },
     
          CircleInnerText: {
              textAlign:'center',
              fontSize:20,
              fontWeight:'bold'
          },
          descriptionText: {
            textAlign: 'center',
            fontSize: 20,
            paddingTop: 20,
            color: 'grey',
            textAlign:'left',
            marginBottom:"5%"
          },
          bulletedText: {        
            textAlign: 'center',
            lineHeight:35,
            fontSize: 17,
            color: 'black',
            fontWeight:'500',
            textAlign:'left'
          },
      
     

      

          // start  Emergency Contact Component Style

          contactJohn: {
            alignSelf:'center',
            width:'90%',
            height:"75%",
            justifyContent:'center',
            backgroundColor:'#A61B1D',
            borderRadius:60,
            borderWidth:9,
            borderColor:'white',
            shadowOffset:{  width: 2,  height:2,},
            shadowColor: 'black',
            shadowOpacity: 0.4,
            shadowRadius: 13,
          },

          phStyle: {
            paddingTop:13,
            fontSize:23,
            marginLeft:"9%",
          },

          johnDoeStyle: {
            paddingTop:20,
            fontSize: 20,
            fontWeight:'bold',
            paddingLeft: "10%",  
          },

          // end

          editLinkText: { 
            textDecorationLine:'underline', 
            fontWeight:"500", 
            textAlign: 'left', 
            color: '#568c9e', 
            marginTop:'6%',
            marginLeft:'5%',
            fontSize: 17,
          }


    

     

          

})

export default SosPageStyles;

