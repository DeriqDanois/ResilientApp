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
        
        <View style={{flex:4, flexDirection:"row"}}>
            <Image style={{
        flex:1,
        height: 45,
        width: 45,
        margin: 5,
        resizeMode:"contain"
    }}
        source={require('../Assets/avatars/PNGs/Girl3-3.png')}/>
            
        <Text style={DiscussionCardStyles.Text}>
            Taken off pain meds after 10 years because people are...
        </Text>
        </View> 

        <View style={{flex:1, flexDirection:"row", padding:10}}>
            <Image style={{
            height:20,
            width:20,
        }}
        source={require('../Assets/PNGs/upvoteIcon.png')}/>
       
       <View style={{flex:1}}>
           <Text style={DiscussionCardStyles.Upvote}>
           12
           </Text>
        </View>

    <View style={{flex:2, flexDirection:"row"}}>
        <Text style={DiscussionCardStyles.PostStatus}>
       10 mins ago
       </Text>

       <Text style={DiscussionCardStyles.PostStatus}>
       2 answers
       </Text>

    </View>

</View>

</View>


    )
}

export default DiscussionCard;


//make discussion card with text, img, icon
//style the comps

//populate the discussion page with cards