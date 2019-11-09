
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import  SavedPlaces from '../styles/PageStyles/SavedPlacesStyle';
import NavBar from '../comps/NavBar';
import {KeyboardAvoidingView} from 'react-native';
import SavedRehabs from '../comps/SavedRehabs';
import SavedPlacesStyle from '../styles/PageStyles/SavedPlacesStyle'
import { DrawerActions } from 'react-navigation-drawer';





const SavedPage = props => {
    const [login, checkLogin] = useState(false);

    const contactName = "Sved Page";


    
    return (

        <SafeAreaView style={{flex:1}}>

<View style={SavedPlacesStyle.HeaderContainer}>
        
        <TextInput style={SavedPlacesStyle.SearchInputStyle}> </TextInput>

    {/* Hamburger */}
        <TouchableOpacity
        onPress={()=>{
            props.navigation.dispatch(DrawerActions.openDrawer());
        }}>
            <Image 
                style={SavedPlacesStyle.HamburgerIcon}
                source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"}}>
            </Image>
        </TouchableOpacity>
     </View>
        
            <View style={{flex: 1, flexDirection:'row'}}>

                <ScrollView 
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={SavedPlaces.scrollView}>

                     <SavedRehabs />
               
                </ScrollView>

            </View>
            
        <NavBar />
       
      </SafeAreaView>

    )
}


export default SavedPage;



        
      


      

   