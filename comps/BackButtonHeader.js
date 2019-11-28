import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, Button, Dimensions} from 'react-native';
import BackButtonHeaderStyles from '../styles/ComponentStyles/BackButtonHeaderStyles.js'
import { withNavigation } from 'react-navigation';
import * as icon from '../comps/Svgs'



function BackButtonHeader({renderBookmark = false, ...props})  {
    const [signup, setSignUp] = useState(false);
    const height = 50;

    return ( 
      
       
  <View style={{ height:props.height, 
        borderBottomColor:props.borderBottomColor, 
        borderBottomWidth:props.border,
        justifyContent:'center',
  
    }}>
    

    <View style={{flex:1, flexDirection:'row'}}>



    <TouchableOpacity
              style={{justifyContent:'center', width:'18%', }}
                onPress={()=>{
                props.navigation.goBack()
                  //image for back button
                }}>

            <icon.BackArrow style={{width:25, height:25, margin:20}}/>  
                </TouchableOpacity>

       <Text style={BackButtonHeaderStyles.HeaderTextStyle}>{props.Header}</Text>

     

       

            {
    renderBookmark && (
      <TouchableOpacity
        style={{flex:0.2, marginBottom:'15%', margin:4, justifyContent:'center' }}
      onPress={()=>{
        alert('add comment')
      }}>
        <icon.plusSign 
            style={{ 
              width:35,
              height:35, 
              }} />
            
           </TouchableOpacity>

                )
          }

</View>
   </View>  


    
    )
}


export default withNavigation(BackButtonHeader);