import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import LoginStyles from '../styles/PageStyles/LoginStyles';
import * as icon from '../comps/Svgs'



const Login = props => {


  const iconDim = 174;
  const [error, setError ] = useState("");
  const [Username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");

  return (

    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' enabled>

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
            onPress={() =>
              props.navigation.navigate('Login')}><Text style={LoginStyles.SignUpText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, }}
            onPress={() =>
              props.navigation.navigate('SignUp')}><Text style={LoginStyles.SignUpText}>SIGN UP</Text>
          </TouchableOpacity>

      </View>

      {/* Inputs and button Below */}

      <View style={LoginStyles.LoginBottamHalf}>

          <TextInput style={LoginStyles.inputStyle}
          onChangeText={(t)=> {
            setUsername(t)
          }}
            placeholder="USERNAME OR EMAIL"
            placeholderTextColor="rgba(255, 255, 255, 0.9)">
          </TextInput>

          <TextInput style={LoginStyles.inputStyle}
            onChangeText={(t)=> {
              setPassword(t)
            }}
            placeholder="PASSWORD"
            placeholderTextColor="rgba(255, 255, 255, 0.9)">
          </TextInput>
          

          <TouchableOpacity
            style={LoginStyles.buttons}
            onPress={() => {
                props.navigation.navigate('Search')
            }}>
            <Text style={LoginStyles.buttonsText}>LOGIN</Text>
        
          </TouchableOpacity>
          
          <Text style={{color:"red"}}>{error}</Text>
        

      </View>

    </KeyboardAvoidingView>

  )
}


export default Login;









