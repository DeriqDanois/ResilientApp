import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import LoignComponentStyles from '../styles/PageStyles/LoginStyles';
import * as icon from '../comps/Svgs'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { withNavigation } from 'react-navigation';


const LoginComponent = props => {

  const iconDim = 174;
  const [error, setError ] = useState("");
  const [Username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");

  return (

      <View style={LoignComponentStyles.LoginBottamHalf}>

          <TextInput style={LoignComponentStyles.inputStyle}
          onChangeText={(t)=> {
            setUsername(t)
          }}
            placeholder="Username or Email"
            placeholderTextColor="rgba(200, 200, 200, 0.9)">
          </TextInput>

          <TextInput style={LoignComponentStyles.inputStyle}
            onChangeText={(t)=> {
              setPassword(t)
            }}
            placeholder="Password"
            placeholderTextColor="rgba(200, 200, 200, 0.9)">
          </TextInput>
          

          <TouchableOpacity
            style={LoignComponentStyles.buttons}
            onPress={() => {
                props.navigation.navigate('Search')
            }}>
            <Text style={LoignComponentStyles.buttonsText}>LOGIN</Text>
        
          </TouchableOpacity>
          
          <Text style={{color:"red"}}>{error}</Text>
    </View>    
  )
}




export default withNavigation(LoginComponent);