import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import stylesSignUp from '../styles/SignupStyles'
import {KeyboardAvoidingView} from 'react-native';







const SignUp = props => {
    const [signup, setSignUp] = useState(false);

    

    return (


   
      <KeyboardAvoidingView style={{flex:1}} behavior='height'  enabled>
        
        <View style={stylesSignUp.container}>

     
           
  
         <Image
          style={stylesSignUp.LoginImage}
          source={{uri:'https://cdn.pixabay.com/photo/2015/03/26/09/41/mountain-690104_960_720.jpg'}}>
        </Image>

     
      <View style={{flex:1}}>
      
        <View style={{flex:6}}>
           {/* This is an Invisable View pushing the opaque tab down with flex of 6 taking up most of upper screen */}
        </View>
       
        <View
              style={stylesSignUp.OpaqueView}>
                
                
                  <TouchableOpacity style={{flex:1}}
                    onPress= {() => 
                    props. navigation.navigate('Login')}><Text  style={stylesSignUp.SignUpText}> Login</Text>
                  </TouchableOpacity>


                  <TouchableOpacity style={{flex:1}}
                    onPress= {() => 
                    props. navigation.navigate('SignUp')}><Text  style={stylesSignUp.SignUpText}> SignUp</Text>
                  </TouchableOpacity>
          </View>
          </View>
                    

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
                    onPress= {() => 
                    props. navigation.navigate('AddEmergencyContact')}>
                    <Text style={stylesSignUp.buttonsText}>Touch here</Text>  
                  </TouchableOpacity>
                
              </View>
         
              </View>
          </KeyboardAvoidingView>
          

                      
   
    )
}


export default SignUp;



        
      


      

   