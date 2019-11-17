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
          source={{ uri: 'https://cdn.pixabay.com/photo/2015/03/26/09/41/mountain-690104_960_720.jpg' }}>
        </Image>


        <View style={stylesSignUp.Logo}>
         
          <icon.LogoAndHexagon fill={'white'} height={iconDim} width={iconDim} />
          
        </View>

      </View>

      <View style={stylesSignUp.OpaqueView}>


        <TouchableOpacity style={{ flex: 1, }}
          onPress={() =>
            props.navigation.navigate('Login')}><Text style={stylesSignUp.SignUpText}> Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, }}
          onPress={() =>
            props.navigation.navigate('SignUp')}><Text style={stylesSignUp.SignUpText}> SignUp</Text>
        </TouchableOpacity>
      </View>

      {/* Inputs and button Below */}

      <View style={stylesSignUp.LoginBottamHalf}>

        <TextInput style={stylesSignUp.inputStyle}
          placeholder="Username"
          placeholderTextColor="rgba(255, 255, 255, 0.9)">
        </TextInput>

        <TextInput style={stylesSignUp.inputStyle}
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.9)">
        </TextInput>

        <TextInput style={stylesSignUp.inputStyle}
          placeholder="Password"
          placeholderTextColor="rgba(255, 255, 255, 0.9)">
        </TextInput>

        <TouchableOpacity
          style={stylesSignUp.buttons}
          onPress={() =>
            props.navigation.navigate('AddEmergencyContact')}>
          <Text style={stylesSignUp.buttonsText}>Touch here</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>

  )
}


export default SignUp;









