import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import SearchComponentStyles from '../styles/ComponentStyles/SearchBarStyles';
import { DrawerActions } from 'react-navigation-drawer';
import SearchBarStyles from '../styles/ComponentStyles/SearchBarStyles';
import { withNavigation } from 'react-navigation';
import * as icon from '../comps/Svgs'



function SearchBar(props) {

    const iconDim = 60



    var userInput = ""

    return (

        <View style={SearchBarStyles.HeaderContainer}>


            <TouchableOpacity style={{flex:1}}
            onPress={()=>{
            
            }}>

        <Image
            style={SearchBarStyles.SearchIcon}
            source={require('../Assets/PNGs/greySearchIcon.png')}
        />


            <TextInput 
            placeholder = "Try 'injection site'"
                onChangeText={(val) => { 
                    userInput = val,
                 console.log(userInput) 
                 props.navigation.navigate("SearchBarResults")
                }}
                style={SearchBarStyles.SearchInputStyle}>
            </TextInput>

            </TouchableOpacity>

            <TouchableOpacity style={{flex:0.25}}
                onPress={() => {
                    props.navigation.dispatch(DrawerActions.openDrawer());
                }}>
               {/* Hamburger  */}
             <icon.HamBurgerIcon  style={SearchBarStyles.HamburgerIcon} />
            
            </TouchableOpacity>
        </View>

    )
}

export default withNavigation(SearchBar);









