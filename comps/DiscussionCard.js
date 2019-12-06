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

function DiscussionCard({renderBookmark = true, timeposted, discussiontitle, discussionauthor,answers, useravatar, discussion, upvotes,...props}){

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
                props.navigation.navigate("DiscussionTopic", {
                    discussionauthor:discussionauthor, 
                    useravatar:useravatar, 
                    upvotes:upvotes, 
                    answers:answers, 
                    discussiontitle:discussiontitle,
                    discussion:discussion,
                    timeposted:timeposted,
                    })
            }}>

        
    <View style={DiscussionCardStyles.WhiteCard}>
        
        <View style={{flex:4, flexDirection:"row"}}>
            <Image
            style={DiscussionCardStyles.Avatar}
            source={useravatar}/>
            
        <Text style={DiscussionCardStyles.Text}>
            {discussiontitle}
        </Text>
        </View> 

        <View style={{flex:1, flexDirection:"row", padding:10}}>
            <Image style={{
            height:20,
            width:20,
        }}
        source={require('../Assets/PNGs/upvoteIcon.png')}/>
       
       <View style={{flex:0.8}}>
           <Text style={DiscussionCardStyles.Upvote}>
           {upvotes}
           </Text>
        </View>

    <View style={{flex:5, flexDirection:"row"}}>
        <Text style={DiscussionCardStyles.PostStatus}>
       {timeposted}
       </Text>

       <Text style={{
                fontWeight:"300",
                color:"grey",
                marginRight:5,
                marginLeft:5,
                fontSize:11
       }}>
       {answers} answers
       </Text>

    </View>

</View>
    {/* <Text>{discussionauthor}</Text> */}

</View>

</TouchableOpacity>

        </View>


    )
}

export default withNavigation(DiscussionCard);


//make discussion card with text, img, icon
//style the comps

//populate the discussion page with cards