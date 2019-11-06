import React from 'react';
import {TouchableOpacity, View, Text, Image, KeyboardAvoidingView} from 'react-native';
import { withNavigation } from 'react-navigation';
import NavBarStyles from '../styles/NavBarStyles';


const NavBar = props => {
    return(

        <KeyboardAvoidingView behavior="padding" enabled>
 
        <View style={NavBarStyles.NavBarBody}>

            <View  style={NavBarStyles.icons}>

            <TouchableOpacity 
            onPress={()=>{
            props.navigation.navigate("Search")}}>  
           
            <Image 
            style={NavBarStyles.Image}
            source={{uri: "https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"}}>
            </Image>

            </TouchableOpacity>


            </View>

            <TouchableOpacity style={NavBarStyles.sosButton}
            onPress= {() => 
                props.navigation.navigate('Login')}>
                     
                <Text style={NavBarStyles.sosText}>SOS</Text>
            </TouchableOpacity>

            <View  style={NavBarStyles.icons}>



            <TouchableOpacity 
                onPress={()=>{
                props.navigation.navigate("DiscussionPage")}}>  
               
                <Image 
                style={NavBarStyles.Image}
                source={{uri: "https://storage.needpix.com/rsynced_images/chat-1294839_1280.png"}}>
                </Image>

             </TouchableOpacity>
         
           </View>
 

        </View>

        </KeyboardAvoidingView>

    )

}

export default withNavigation(NavBar);