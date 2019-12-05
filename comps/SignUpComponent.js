import React, { useState, useEffect } from 'react';
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
  const [avatar, setAvatar] = useState('../Assets/avatars/PNGs/Girl3-3.png');
  const [hide, setHide ] = useState("");
  const [shrinkwidth, setShrinkWidth] = useState(250);
  const [shrinkheight, setShrinkHieght] = useState(30);
  const [shrinkmargin, setShrinMargin] = useState(30);
  const [errorcolor, setErrorColor] = useState('red');
  var track = ''
  const CreateUser = async()=>{
    //fetch db to create users
    console.log('email & password', email, password);

    var obj = {
        key:"users_create",
        data:{
            username:username,
            email:email,
            password:password,
            avatar:avatar
        }
    }
    var r = await axios.post("https://resilientdb.herokuapp.com/post", obj);
    console.log(r.data);

}


  return (

   

    <View style={stylesSignUp.LoginBottamHalf}>

      <TextInput style={{
            alignSelf: "center",
            justifyContent: "center",
            textAlign: "left",
            width: shrinkwidth,
            height: shrinkheight,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
            marginBottom: shrinkmargin,
            fontSize:18,
            color:'white',
      }}
           onTouchStart={()=>{
            setHide('none')
            setShrinkHieght(17)
            setShrinkWidth(230)
            setShrinMargin(20)
           
          }}
          onEndEditing={()=>{  
            if(username.length <= 0){
              setError('Enter a username')
            }
          }}
           onChangeText={(t)=> {
            setUsername(t)
  
    
          }}
          autoCapitalize="none"
        placeholder="Username"
        placeholderTextColor="rgba(200, 200, 200, 0.9)">
      </TextInput>

      <TextInput style={{
            alignSelf: "center",
            justifyContent: "center",
            textAlign: "left",
            width: shrinkwidth,
            height: shrinkheight,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
            marginBottom: 30,
            fontSize:18,
            color:'white',
      }}
           onTouchStart={()=>{
            setHide('none')
            setShrinkHieght(17)
            setShrinkWidth(230)
            setShrinMargin(20)
          }}
          onEndEditing={()=>{
            if(email.length < 1){
              setError('Enter an email')
              setErrorColor('red')
        
            }
          }}
           onChangeText={(t)=> {
            setEmail(t)
            
          }}
        placeholder="Email"
        placeholderTextColor="rgba(200, 200, 200, 0.9)">
      </TextInput>

      <TextInput style={{
            alignSelf: "center",
            justifyContent: "center",
            textAlign: "left",
            width: shrinkwidth,
            height: shrinkheight,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
            marginBottom: 30,
            fontSize:18,
            color:'white',
      }}
           onTouchStart={()=>{
            setHide('none')
            setShrinkHieght(17)
            setShrinkWidth(230)
            setShrinMargin(20)
          }}
          onEndEditing={()=>{
            setHide('')
            setShrinkHieght(20)
            setShrinkWidth(250)
            setShrinMargin(30)
          }}
           onChangeText={(t)=> {
              setPassword(t)
              if(password.length < 5){
                setError('password is too short');
            } else {
                  setError('password is good to go');
                  setErrorColor('green')
            }
          }}
        placeholder="Password"
        placeholderTextColor="rgba(200, 200, 200, 0.9)">
      </TextInput>
       

      <TouchableOpacity
        style={{
          borderWidth: 2.5,
          borderColor:"white",
          borderRadius: 40,
          fontSize: 10,
          alignItems:"center",
          display:hide,
          justifyContent: "center",
          height:"13%",
          width:250,
          backgroundColor:'#002F43',
        }}
        onPress={() => {
          if (error === "password is good to go"){
            // Create username, password, email
            CreateUser();
           props. navigation.navigate('AddEmergencyContact');
  
          } else {
            setError("Password is to short")
        }
  
        }}>
        <Text style={stylesSignUp.buttonsText}>SIGN UP</Text>
      </TouchableOpacity>
      

      <Text style={{color:errorcolor}}>{error}</Text>

    </View>

  )
}


export default withNavigation(SignUpComponent);









