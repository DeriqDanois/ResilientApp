import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import HamburgerStyles from '../styles/ComponentStyles/HamburgerStyles';


const Username = "Username"



export const DrawerComponent = props => (
   
  
    <View style={HamburgerStyles.container}>
        <View style={{borderBottomColor:'grey', borderBottomWidth:1}}>
            <View>
                <View style={{ flexDirection:'row'}}>
                    <Image 
                        source={{uri: 'http://www.themes-lab.com/traqs/assets/global/images/avatars/avatar1_big.png'}}
                        style={{ width:80, height:80}}>
                    </Image>

                    <View style={{flexDirection:'column', margin:19}}>
                         <Text style={HamburgerStyles.UsernameText}>{Username}</Text>

                        <TouchableOpacity
                         onPress={()=>{
                            props. navigation.navigate("ProfilePage")
                            
                         }}>
                            <Text style={HamburgerStyles.EditProfileText}>Edit profile</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>

        </View>

    

        <View style={{alignItems:'center', justifyContent:'center'}}>
            <DrawerItems {...props} />
        </View>

    
    
    

        <View></View>
        <View></View>
        <View></View>
    </View>
    
);


