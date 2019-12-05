import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text} from 'react-native';
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


            <TouchableOpacity 
            style={{
                flex:1, 
                justifyContent:'center'}}
            onPress={()=>{
                props.navigation.navigate("SearchBarResults")
            
            }}>

        <Image
            style={SearchBarStyles.SearchIcon}
            source={require('../Assets/PNGs/greySearchIcon.png')}
        />


            <View 
                onPress={(val) => { 
                    userInput = val,
                 console.log(userInput) 
                
                }}
                style={SearchBarStyles.SearchInputStyle}>
                    <Text style={{textAlign:'left', justifyContent:'center', color:'grey', fontSize:17}}>Click to search</Text>
            </View>

            </TouchableOpacity>

            <TouchableOpacity style={{flex:0.27, height:'100%', justifyContent:'center' }}
                onPress={() => {
                    props.navigation.dispatch(DrawerActions.openDrawer());
                }}>
                {/* Hamburger  */}
                <icon.HamBurgerIcon width={"100%"} height={"100%"} />
            
            </TouchableOpacity>
        </View>

    )
}

export default withNavigation(SearchBar);









