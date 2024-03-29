import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, Button} from 'react-native';
import BackButtonHeaderStyles from '../styles/ComponentStyles/BackButtonHeaderStyles.js'
import { withNavigation } from 'react-navigation';
import * as icon from '../comps/Svgs'



const BackButtonHeader = props => {
    const [signup, setSignUp] = useState(false);
    const height = 50;

    return ( 
       
  <View style={{ height:props.height, 
        borderBottomColor:'rgba(0, 0, 0, 0.3)', 
        borderBottomWidth:props.border,
        justifyContent:'center',
    }}>

      

       <Text style={BackButtonHeaderStyles.HeaderTextStyle}>{props.Header}</Text>

     

       

          <TouchableOpacity
              style={{justifyContent:'center', width:'18%'}}
                onPress={()=>{
                props.navigation.navigate('Search')}}>
                {
                  //image for back button
                }

            <icon.BackArrow style={{width:40,height:20, margin: 10}}/>  
            
          </TouchableOpacity>

   </View>  


    
    )
}


export default withNavigation(BackButtonHeader);