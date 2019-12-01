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
    

    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>



    <TouchableOpacity
              style={{justifyContent:'center' }}
                onPress={()=>{
                props.navigation.goBack()
                  //image for back button
                }}>

            <icon.BackArrow style={{width:25, height:25, margin:20}}/>  
                </TouchableOpacity>
       
        <View style={{flex:1, justifyContent:'center'}}>

           <Text style={BackButtonHeaderStyles.HeaderTextStyle}>{props.Header}</Text>

        </View>

     

     

       

            {
    renderBookmark && (
      <TouchableOpacity
        style={{flex:0.21, justifyContent:'center'}}
      onPress={()=>{
        props. navigation.navigate("StartDiscussionPage");
      }}>
        <icon.plusSign 
            style={{ 
              width:Dimensions.get("window").width/14,
              height:Dimensions.get("window").height/13, 
              }} />
            
           </TouchableOpacity>

                )
          }

</View>
   </View>  


    
    )
}


export default withNavigation(BackButtonHeader);