import React, { useState } from 'react';

import { View, TextInput, TouchableOpacity, Image} from 'react-native';
import SearchComponentStyles from '../styles/ComponentStyles/SearchBarStyles';
import { DrawerActions } from 'react-navigation-drawer';
import SearchBarStyles from '../styles/ComponentStyles/SearchBarStyles';
import { withNavigation } from 'react-navigation';
import { useScreens } from 'react-native-screens';



function SearchBar(props)  {

  

    var userInput = ""

    return (

     <View style={SearchBarStyles.HeaderContainer}>
        
            <TextInput
             onChangeText={(val)=>{userInput=val,  console.log(userInput)}}
            style={SearchBarStyles.SearchInputStyle}> 
            </TextInput>

        {/* Hamburger */}
            <TouchableOpacity
            onPress={()=>{
                props.navigation.dispatch(DrawerActions.openDrawer());
                
            }}>
                <Image 
                    style={SearchBarStyles.HamburgerIcon}
                    source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"}}>
                </Image>
            </TouchableOpacity>
        </View>
     
    )
}

export default withNavigation(SearchBar);



        
      


      

   