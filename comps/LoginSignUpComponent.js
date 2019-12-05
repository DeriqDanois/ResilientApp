import React, { useState, useEffect } from 'react';
import LoginComponent from '../comps/LoginComponent';
import SignUpComponent from '../comps/SignUpComponent';
import {View, KeyboardAvoidingView } from 'react-native'
import stylesSignUp from '../styles/PageStyles/SignupStyles';
import { withNavigation } from 'react-navigation';
import myaxios from '../axios'
function LoginSignUpComponent({renderLogin = false, renderSignUp = false, ...props}){

    const iconDim = 174;
    

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