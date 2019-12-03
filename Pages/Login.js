import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import LoginStyles from '../styles/PageStyles/LoginStyles';
import * as icon from '../comps/Svgs'
import LoginSignUpComponent from '../comps/LoginSignUpComponent'


const Login = props => {


  const iconDim = 174;
  const [login, setLogin ] = useState(true);
  const [signup, setSignUp ] = useState(false);
  const [onlogin, setOnLogin ] = useState(1);
  const [onsignup, setOnSignUp ] = useState(0.5);
  



  return (

    <View style={{ flex: 1 }} >

      <View style={LoginStyles.container}>

          <Image
            style={LoginStyles.LoginImage}
            source={{ uri: 'https://bit.ly/2NMonRR' }}>
          </Image>

          <View style={{
                position:'absolute',
                alignSelf:'center',
                top:"10%"
       
             
          }}>
              <icon.LogoAndHexagon fill={'white'} height={iconDim} width={iconDim} />
          </View>

      </View>

      <View style={LoginStyles.OpaqueView}>

          <TouchableOpacity style={{ flex: 1 }}
            onPress={() =>{
              setLogin(true)
              setSignUp(false)
              setOnSignUp(0.5)
              setOnLogin(1)
       
            }}><Text 
            style={{
              color:'white', 
              textAlign:'center',
              fontSize:18, 
              justifyContent:"center",
              fontWeight:'bold',
              opacity:onlogin
            }}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, }}
            onPress={() =>{
              setSignUp(true)
              setLogin(false)
              setOnSignUp(1)
              setOnLogin(0.5)
   
              }}><Text
               style={{
                color:'white', 
                textAlign:'center',
                fontSize:18, 
                justifyContent:"center",
                fontWeight:'bold',
                opacity:onsignup
              }}>SIGN UP</Text>
          </TouchableOpacity>

      </View>

      {/* Inputs and button Below */}

      <KeyboardAvoidingView style={{flex:0.9}} behavior='padding' enabled>
        
        
      
        <LoginSignUpComponent
        renderLogin={login} 
        renderSignUp={signup} />


        </KeyboardAvoidingView>

    

   </View>

  )
}


export default Login;









