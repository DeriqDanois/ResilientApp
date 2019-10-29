import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import NavBarStyles from '../styles/NavBarStyles';


const NavBar = props => {
    return(
        <View style={NavBarStyles.NavBarBody}>

            <View  style={NavBarStyles.icons}>
           
            <Image 
             style={NavBarStyles.Image}
             source={{uri: "https://storage.needpix.com/rsynced_images/chat-1294839_1280.png"}}>
             </Image>

            </View>

            <TouchableOpacity style={NavBarStyles.sosButton}
            onPress= {() => 
                props.navigation.navigate('Login')}>
                     
                <Text style={NavBarStyles.sosText}>SOS</Text>
            </TouchableOpacity>


            <View  style={NavBarStyles.icons}>
           
           <Image 
            style={NavBarStyles.Image}
            source={{uri: "https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"}}>
            </Image>

           </View>
 

        </View>

    )

}

export default withNavigation(NavBar);