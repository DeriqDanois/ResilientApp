import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import LoginStyles from '../styles/PageStyles/LoginStyles';
import * as icon from '../comps/Svgs'



const Login = props => {


  const iconDim = 174;

  return (

    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' enabled>

      <View style={LoginStyles.container}>

        <Image
          style={LoginStyles.LoginImage}
          source={{ uri: 'https://cdn.pixabay.com/photo/2015/03/26/09/41/mountain-690104_960_720.jpg' }}>
        </Image>

        <View style={LoginStyles.Logo}>
      
          <icon.LogoAndHexagon fill={'white'} height={iconDim} width={iconDim} />
          
        </View>

      </View>

      <View style={LoginStyles.OpaqueView}>

        <TouchableOpacity style={{ flex: 1 }}
          onPress={() =>
            props.navigation.navigate('Login')}><Text style={LoginStyles.SignUpText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, }}
          onPress={() =>
            props.navigation.navigate('SignUp')}><Text style={LoginStyles.SignUpText}> SignUp</Text>
        </TouchableOpacity>
      </View>

      {/* Inputs and button Below */}

      <View style={LoginStyles.LoginBottamHalf}>

        <TextInput style={LoginStyles.inputStyle}
          placeholder="Username or Email"
          placeholderTextColor="rgba(255, 255, 255, 0.9)">
        </TextInput>

        <TextInput style={LoginStyles.inputStyle}
          placeholder="Password"
          placeholderTextColor="rgba(255, 255, 255, 0.9)">
        </TextInput>

        <TouchableOpacity
          style={LoginStyles.buttons}
          onPress={() =>
            props.navigation.navigate('Search')}>
          <Text style={LoginStyles.buttonsText}>Touch here</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>

  )
}


export default Login;









