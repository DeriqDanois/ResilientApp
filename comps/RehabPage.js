import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import  RehabPageStyles from '../styles/RehabPageStyles';
import {KeyboardAvoidingView} from 'react-native';
import NavBar from '../comps/NavBar'








const RehabPage = props => {
    const [login, checkLogin] = useState(false);


    return (

      <KeyboardAvoidingView style={{flex:1}} behavior='padding'  enabled>

 



    
        
        <View style={ RehabPageStyles.container}>

          <Image style={{alignContent:'center', justifyContent:'center'}}>

          </Image>
           
  
         <Image
          style={ RehabPageStyles.LoginImage}
          source={{uri:'https://cdn.pixabay.com/photo/2015/03/26/09/41/mountain-690104_960_720.jpg'}}>
        </Image>

          <View style={ RehabPageStyles.LoginBottamHalf}>
      
                  <TextInput style={ RehabPageStyles.inputStyle}
                  placeholder="Username or Email"
                  placeholderTextColor="rgba(255, 255, 255, 0.9)">
                  </TextInput>
          
               
                  <TextInput style={ RehabPageStyles.inputStyle}
                  placeholder="Password"
                  placeholderTextColor="rgba(255, 255, 255, 0.9)">
                  </TextInput>
              
                
              </View>
          </View >

     < NavBar />

   </KeyboardAvoidingView>

   
   
   
    )
}


export default RehabPage;



        
      


      

   