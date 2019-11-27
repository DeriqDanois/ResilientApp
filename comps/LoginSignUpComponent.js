import React, { useState } from 'react';
import LoginComponent from '../comps/LoginComponent';
import SignUpComponent from '../comps/SignUpComponent';
import {View, KeyboardAvoidingView } from 'react-native'
import stylesSignUp from '../styles/PageStyles/SignupStyles';
import { withNavigation } from 'react-navigation';

function LoginSignUpComponent({renderLogin = false, renderSignUp = false, ...props}){

    return (
  
     
   
    <View style={{flex:1}}>
        
        {
        renderLogin && (
            <LoginComponent />
        )
        } 
        {/* Render Login or SignUp */}
        {
        renderSignUp && (
            <SignUpComponent />
        )
        }
   
   </View>

   

    
    )
  
    
  }



  export default withNavigation(LoginSignUpComponent);