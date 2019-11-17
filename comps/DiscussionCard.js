import React from 'react';
import { useState } from 'react';
import { View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
    Button } from 'react-native';
import DiscussionCardStyles from '../styles/ComponentStyles/DiscussionCardStyles';

function DiscussionCard(props){
  
    return (
        
    <View style={DiscussionCardStyles.WhiteCard}>
        

        <Image
            source={{ uri: 'http://www.themes-lab.com/traqs/assets/global/images/avatars/avatar1_big.png' }}
            style={{ flex: 1, width: 70, height: 70, margin: 10 }}></Image>
        <Text style={{ flex: 4, fontSize: 20, marginTop: 10 }}>Q: How Long does it take for someone to OD</Text>

        </View>


    )
}

export default DiscussionCard;


//make discussion card with text, img, icon
//style the comps

//populate the discussion page with cards