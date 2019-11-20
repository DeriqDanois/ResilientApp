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
import { withNavigation } from 'react-navigation';

function DiscussionCard({renderBookmark = true, ...props}){
  
    return (
        
<View>

{
    renderBookmark && (
        <Image 
            style={DiscussionCardStyles.Bookmark}
            source={require('../Assets/PNGs/savedIcon.png')}/>
            )
        }

        <TouchableOpacity
            style={{flex:1}}
            onPress={()=>{
                props.navigation.navigate("DiscussionTopic")
            }}>

        
    <View style={DiscussionCardStyles.WhiteCard}>
        
        <View style={{flex:4, flexDirection:"row"}}>
            <Image
            style={DiscussionCardStyles.Avatar}
            source={props.avatarImg}/>
            
        <Text style={DiscussionCardStyles.Text}>
            {props.DiscussionTitle}
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
           {props.upVoteNum}
           </Text>
        </View>

    <View style={{flex:2, flexDirection:"row"}}>
        <Text style={DiscussionCardStyles.PostStatus}>
       {props.timePosted}
       </Text>

       <Text style={DiscussionCardStyles.PostStatus}>
       {props.answerNum} answers
       </Text>

    </View>

</View>

</View>

</TouchableOpacity>

        </View>


    )
}

export default withNavigation(DiscussionCard);


//make discussion card with text, img, icon
//style the comps

//populate the discussion page with cards