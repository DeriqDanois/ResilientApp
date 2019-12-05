import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import HamburgerStyles from '../styles/ComponentStyles/HamburgerStyles';
import myaxios from '../axios';
import axios from 'axios';




const Username = "Username"





export function DrawerComponent({username, ...props}){


    const [useravatarandname, setUserAvatarAndName] = useState([]);

   

    const getRehab = async () => {
        var user_id = await AsyncStorage.getItem("user_id");
        var data = await myaxios('users_read', {id:user_id});
        // console.log(data)
        // console.log(json);
        // setUserAvatarAndName(json);
        // setUserAvatarAndName(username['john'])
        if (data.length === 0){
            setUserAvatarAndName({username:['Guest']})
        } else {
            setUserAvatarAndName(data[0].username);
        }
}
    

    // Handle 
   
    useEffect(() => {
        getRehab();
     []});

     

    return (
    <View style={HamburgerStyles.container}>
        <View style={{borderBottomColor:'#dadada', borderBottomWidth:1, width:"100%"}}>
  

            {/* USER INFO BOX */}
            <View style={{ flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image 
                        source={require('../Assets/avatars/PNGs/Girl3-3.png')}
                        style={{ width:60, height:60, margin:20, }}>
                    </Image>

                </View>

                <View style={{flex:2}}>

                    <View style={{flexDirection:'column', marginTop:20}}>
                        <Text style={HamburgerStyles.UsernameText}>{useravatarandname}</Text>

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

    

        <View style={{alignItems:'center',  marginTop:"-30%"}}>
            <DrawerItems {...props} />
        </View>

    
    
    

        <View></View>
        <View></View>
        <View></View>
    </View>
    
);

}