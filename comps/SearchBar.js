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

            <TextInput 
                onChangeText={(val) => { 
                    userInput = val,
                 console.log(userInput) 
                }}
                style={SearchBarStyles.SearchInputStyle}>
            </TextInput>


            <TouchableOpacity
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









