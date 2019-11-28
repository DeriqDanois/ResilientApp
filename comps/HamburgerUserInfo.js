import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HamburgerStyles from '../styles/ComponentStyles/HamburgerStyles';



function HamburgerUserInfo({ avatar, username, ...props }) {



        return (

        <View style={{ flexDirection:'row'}}>
        <View style={{flex:1}}>

            <Image 
                source={avatar}
                style={{ width:60, height:60, margin:10, }}>
            </Image>

            </View>

            <View style={{flex:1}}>

                 <View style={{flexDirection:'column', marginTop:10}}>
                            <Text style={HamburgerStyles.UsernameText}>{username}</Text>

                        <TouchableOpacity 
                            onPress={()=>{
                            props. navigation.navigate("ProfilePage")   
                            }}>
                            <Text style={HamburgerStyles.EditProfileText}>Edit profile</Text>
                        </TouchableOpacity>
                    </View>
        
            </View>

                   
                
         
        </View>
        )
            
};


export default HamburgerUserInfo;

