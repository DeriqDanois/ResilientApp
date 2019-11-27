import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import LoginStyles from '../styles/PageStyles/LoginStyles';
import * as icon from '../comps/Svgs'
import LoginSignUpComponent from '../comps/LoginSignUpComponent'


const Login = props => {


  const iconDim = 174;
  const [login, setLogin ] = useState(true);
  const [signup, setSignUp ] = useState(false);



  return (

    <View style={{ flex: 1 }} >

      <View style={LoginStyles.container}>

          <Image
            style={LoginStyles.LoginImage}
            source={{ uri: 'https://bit.ly/2NMonRR' }}>
          </Image>

          <View style={LoginStyles.Logo}>
              <icon.LogoAndHexagon fill={'white'} height={iconDim} width={iconDim} />
          </View>

      </View>

      <View style={LoginStyles.OpaqueView}>

          <TouchableOpacity style={{ flex: 1 }}
            onPress={() =>{
              setLogin(true)
              setSignUp(false)
            }}><Text style={LoginStyles.SignUpText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, }}
            onPress={() =>{
              setSignUp(true)
              setLogin(false)
              }}><Text style={LoginStyles.SignUpText}>SIGN UP</Text>
          </TouchableOpacity>

      </View>

      {/* Inputs and button Below */}

      <View style={{flex:0.85}}>
      
        <LoginSignUpComponent
        renderLogin={login} 
        renderSignUp={signup} />


        </View>

    

   </View>

  )
}


export default Login;









