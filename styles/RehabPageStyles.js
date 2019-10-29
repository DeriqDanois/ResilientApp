import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const  RehabPageStyles = StyleSheet.create({

    HeaderText: {
        color: "#568C9E",
        fontSize: 24,
        marginTop: 18,
        marginBottom: 18,
     
    },
    
    HeaderTextSmall: {
        fontSize:14,
        textAlign: 'left',
        left: 5,
        width: 310,
    },

 

        inputTextHeader: {
            color: "#568C9E",
            fontSize: 15,
            marginLeft:18.5,
            fontWeight:"bold",
            margin:5,
        },




        containertwo: {
            flex: 1,
            marginTop: Constants.statusBarHeight,
            flexDirection: 'column'
       
          },
          
          scrollView: {
            marginHorizontal: 15,
     
          },

          ImageStyles:{
              flex:0.9,
              borderBottomRightRadius: 50,
          },

          searchIcon: {
            width:30,
            height:30,
         
         
        },

          

})
export default RehabPageStyles;