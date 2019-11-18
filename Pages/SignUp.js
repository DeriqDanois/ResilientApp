import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import stylesSignUp from '../styles/PageStyles/SignupStyles';
import * as icon from '../comps/Svgs'






const SignUp = props => {
  const [signup, setSignUp] = useState(false);



  const iconDim = 174;

  return (

    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' enabled>

    <View style={stylesSignUp.container}>

      <Image
        style={stylesSignUp.LoginImage}
        source={{ uri: 'https://bit.ly/2NMonRR' }}>
      </Image>

      <View style={stylesSignUp.Logo}>
    
        <icon.LogoAndHexagon fill={'white'} height={iconDim} width={iconDim} />
        
      </View>

    </View>

    <View style={stylesSignUp.OpaqueView}>

      <TouchableOpacity style={{ flex: 1 }}
        onPress={() =>
          props.navigation.navigate('Login')}><Text style={stylesSignUp.SignUpText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1, }}
        onPress={() =>
          props.navigation.navigate('SignUp')}><Text style={stylesSignUp.SignUpText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>

    {/* Inputs and button Below */}

    <View style={stylesSignUp.LoginBottamHalf}>

      <TextInput style={stylesSignUp.inputStyle}
        placeholder="USERNAME"
        placeholderTextColor="rgba(255, 255, 255, 0.9)">
      </TextInput>

      <TextInput style={stylesSignUp.inputStyle}
        placeholder="Email"
        placeholderTextColor="rgba(255, 255, 255, 0.9)">
      </TextInput>

      <TextInput style={stylesSignUp.inputStyle}
        placeholder="PASSWORD"
        placeholderTextColor="rgba(255, 255, 255, 0.9)">
      </TextInput>
       

      <TouchableOpacity
        style={stylesSignUp.buttons}
        onPress={() =>
          props.navigation.navigate('Search')}>
        <Text style={stylesSignUp.buttonsText}>LOGIN</Text>
      </TouchableOpacity>

    </View>

  </KeyboardAvoidingView>

  )
}


export default SignUp;









