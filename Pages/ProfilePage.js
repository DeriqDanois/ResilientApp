import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import stylesSignUp from '../styles/PageStyles/SignupStyles'
import {KeyboardAvoidingView} from 'react-native';
import * as icon from '../comps/Svgs';






const ProfilePage = props => {
    const [signup, setSignUp] = useState(false);

    

    const iconDim = 174;

    return ( 
   
      <KeyboardAvoidingView style={{flex:1}} behavior='padding'  enabled>  
     
      <View style={stylesSignUp.container}>

          </View>
         
      </KeyboardAvoidingView>
                      
    )
}


export default ProfilePage;



        
      


      

   