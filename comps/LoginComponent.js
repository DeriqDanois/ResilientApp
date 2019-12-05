import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import LoignComponentStyles from '../styles/PageStyles/LoginStyles';
import * as icon from '../comps/Svgs'
import { ScrollView } from 'react-native-gesture-handler';
import myaxios from '../axios';
import { withNavigation } from 'react-navigation';


const LoginComponent = props => {

  const iconDim = 174;
  const [error, setError ] = useState("");
  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");
  const [hide, setHide ] = useState("");
  const [shrinkwidth, setShrinkWidth] = useState(250);
  const [shrinkheight, setShrinkHieght] = useState(30);
  const [shrinkmargin, setShrinMargin] = useState(30);





  const getUsers = async () => {
    var data = await myaxios('users_read', {username:username, password:password});
    console.log(data);
    await AsyncStorage.setItem("user_id", JSON.stringify(data[0].id));
    if(data.length !== 0){
      props.navigation.navigate('Search')
    } 
    if (data.length === 0) {
      console.log('user does not exist');
    }
}

// Handle    

  return (

      <View style={LoignComponentStyles.LoginBottamHalf}>

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
            onSubmitEditing={()=>{
              setHide('')
              setShrinkHieght(30)
              setShrinkWidth(250)
              setShrinMargin(30)
           
        
            }}
          onChangeText={(t)=> {
            setUsername(t)
        
          }}
            placeholder="Username or Email"
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
              setShrinkHieght(30)
              setShrinkWidth(250)
              setShrinMargin(30)
        
            }}
            onChangeText={(t)=> {
              setPassword(t)

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
              height:"15%",
              width:250,
              backgroundColor:'#002F43',  
            }}
            onPress={() => {
              getUsers();
              
            }}>
            <Text style={LoignComponentStyles.buttonsText}>LOGIN</Text>
        
          </TouchableOpacity>
          
          <Text style={{color:"red"}}>{error}</Text>
    </View>    
  )
}




export default withNavigation(LoginComponent);