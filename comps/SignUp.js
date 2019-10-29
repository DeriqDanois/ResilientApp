import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import stylesSignUp from '../styles/SignupStyles'
import {KeyboardAvoidingView} from 'react-native';







const SignUp = props => {
    const [signup, setSignUp] = useState(false);

    

    return (





        <View style={{flex:1, width: '100%', alignItems: 'center', justifyContent: 'center',}}> 
  
         <Image
          style={stylesSignUp.LoginImage}
          source={{uri:'https://cdn.pixabay.com/photo/2015/03/26/09/41/mountain-690104_960_720.jpg'}}>
        </Image>


        <View
              style={{
              backgroundColor:'red',
              width: '100%',
              height:'7%', 
              top: "50.5%",
              position:'absolute',
              opacity:0.60,
              margin:'auto',
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'row',
              backgroundColor:'#002F43',  
              flex:1,
              }}>
                  
              
               
                  <TouchableOpacity style={{flex:1}}
                    onPress= {() => 
                    props. navigation.navigate('Login')}><Text  style={stylesSignUp.SignUpText}> Login</Text>
                  </TouchableOpacity>


                  <TouchableOpacity style={{flex:1}}
                    onPress= {() => 
                    props. navigation.navigate('SignUp')}><Text  style={stylesSignUp.SignUpText}> SignUp</Text>
                  </TouchableOpacity>
          </View>
                     
                    

          <View style={stylesSignUp.LoginBottamHalf}>
      
              
           
          
                  <TextInput style={stylesSignUp.inputStyle}
                  placeholder="Email"
                  placeholderTextColor="rgba(255, 255, 255, 0.9)">
                  </TextInput>
          
               
                  <TextInput style={stylesSignUp.inputStyle}
                  placeholder="Username"
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
                    <Text style={stylesSignUp.buttonsText}>Next</Text>  
                  </TouchableOpacity>
                
              </View>
          </View>
          

   
   
    )
}


export default SignUp;



        
      


      

   