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
        //     <TouchableOpacity
        //     style={RehabPageStyles.bookMarkIcon}
        //         onPress={()=>{
        //             alert("Added To Saved Rehabs")
        //         }}>
        //         <icon.BookMarkIcon width={iconDim} height={iconDim} />
        // </TouchableOpacity>
            )
        }

        <TouchableOpacity
            style={{flex:1,}}
            onPress={()=>{
                props.navigation.navigate("DiscussionTopic")
            }}>

        
    <View style={DiscussionCardStyles.WhiteCard}>
        
        <View style={{flex:4, flexDirection:"row"}}>
            <Image
            style={DiscussionCardStyles.Avatar}
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

</TouchableOpacity>

        </View>


    )
}

export default withNavigation(DiscussionCard);


//make discussion card with text, img, icon
//style the comps

//populate the discussion page with cards