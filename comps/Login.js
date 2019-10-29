import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/MainStyles';
import {KeyboardAvoidingView} from 'react-native';








const Login = props => {
    const [login, checkLogin] = useState(false);


    return (



      <KeyboardAvoidingView style={{flex:1}} behavior='height'  enabled>
        
        <View style={styles.container}>

          <Image style={{alignContent:'center', justifyContent:'center'}}>

          </Image>
           
  
         <Image
          style={styles.LoginImage}
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
                    props. navigation.navigate('Login')}><Text  style={styles.SignUpText}> Login</Text>
                  </TouchableOpacity>


                  <TouchableOpacity style={{flex:1}}
                    onPress= {() => 
                    props. navigation.navigate('SignUp')}><Text  style={styles.SignUpText}> SignUp</Text>
                  </TouchableOpacity>
          </View>
                    

          <View style={styles.LoginBottamHalf}>
      
              
           
          
                  <TextInput style={styles.inputStyle}
                  placeholder="Username or Email"
                  placeholderTextColor="rgba(255, 255, 255, 0.9)">
                  </TextInput>
          
               
                  <TextInput style={styles.inputStyle}
                  placeholder="Password"
                  placeholderTextColor="rgba(255, 255, 255, 0.9)">
                  </TextInput>
                  
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress= {() => 
                    props. navigation.navigate('Search')}>
                    <Text style={styles.buttonsText}>Touch here</Text>  
                  </TouchableOpacity>
                
              </View>
          </View >

          </KeyboardAvoidingView>


   
   
   
    )
}


export default Login;



        
      


      

   