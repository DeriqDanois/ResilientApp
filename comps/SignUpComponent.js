import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import stylesSignUp from '../styles/PageStyles/SignupStyles';
import axios from 'axios';
import { withNavigation } from 'react-navigation';



const SignUpComponent = props => {
  const [signup, setSignUp] = useState(false);
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [error, setError ] = useState("");

  const CreateUser = async()=>{
    //fetch db to create users
    console.log('email & password', email, password);

    var obj = {
        key:"users_create",
        data:{
            username:username,
            email:email,
            password:password
        }
    }
    var r = await axios.post("http://localhost:3001/post", obj);
    console.log(r.data);

}


  return (

   

    <View style={stylesSignUp.LoginBottamHalf}>

      <TextInput style={stylesSignUp.inputStyle}
           onChangeText={(t)=> {
            setUsername(t)
          }}
          autoCapitalize="none"
        placeholder="Username"
        placeholderTextColor="rgba(200, 200, 200, 0.9)">
      </TextInput>

      <TextInput style={stylesSignUp.inputStyle}
           onChangeText={(t)=> {
            setEmail(t)
            
          }}
        placeholder="Email"
        placeholderTextColor="rgba(200, 200, 200, 0.9)">
      </TextInput>

      <TextInput style={stylesSignUp.inputStyle}
           onChangeText={(t)=> {
              setPassword(t)
              if(password.length < 5){
                setError('password is too short');
            } else {
                  setError('password is good to go');
            }
          }}
        placeholder="Password"
        placeholderTextColor="rgba(200, 200, 200, 0.9)">
      </TextInput>
       

      <TouchableOpacity
        style={stylesSignUp.buttons}
        onPress={() => {
          if (error === "password is good to go"){
            // Create username, password, email
            CreateUser();
           props. navigation.navigate('AddEmergencyContact');
  
          } else {
            setError("Password is to short")
        }
  
        }}>
        <Text style={stylesSignUp.buttonsText}>Sign Up</Text>
      </TouchableOpacity>
      

      <Text style={{color:'red'}}>{error}</Text>

    </View>

  )
}


export default withNavigation(SignUpComponent);









