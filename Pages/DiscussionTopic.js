import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import DiscussionStyles from '../styles/PageStyles/DiscussionStyles';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import DiscussionTopicStyles from '../styles/PageStyles/DiscussionTopicStyles';
import DiscussionCardStyles from '../styles/ComponentStyles/DiscussionCardStyles';

const DiscussionTopic = props => {
    const [discussion, setDiscussion] = useState(false);

    return (
    
    <SafeAreaView>
        
        <BackButtonHeader
                border={1}
                height={50}
                Header={"Discussions"}
            />
            
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={DiscussionStyles.scrollView}>

{/* avatar, name, post time */}

        <View style={{flex:1, flexDirection:"row"}}>
            <Image
            style={DiscussionCardStyles.Avatar}
            source={require('../Assets/avatars/PNGs/Girl3-3.png')}/>
            
        <View style={{flex:1, flexDirection:"column"}}>

            <Text>
                ChubbyEmu
            </Text>

            <Text>
                Posted 10 mins ago
            </Text>

        </View>
            </View>


{/* topic text, description text */}

        <View style={{flex:1, flexDirection:"column"}}>

        <Text style={DiscussionTopicStyles.TopicText}>
        Taken off pain meds after 10 years because people are dying from OxyContin. My Dr confirmed that I had done Nothing wrong to deserve this.
        </Text>

        <Text style={DiscussionTopicStyles.DescText}>
        So now I’m tortured with horrible pain every day. And people wonder why I want to just be dead?!?!
        </Text>

        </View> 

{/* upvote, save, share buttons (only img for now) */}

    <View style={{flex:1, flexDirection:"row"}}>

        <View style={{flex:1, flexDirection:"row", padding:10}}>
            <Image style={{
            height:20,
            width:20,
        }}
        source={require('../Assets/PNGs/upvoteIcon.png')}/>
       
           <Text style={DiscussionCardStyles.Upvote}>
           Upvote 12
           </Text>

        </View>

        <View style={{flex:2, flexDirection:"row", padding:10}}>
            <Image style={{
            height:20,
            width:20,
        }}
        source={require('../Assets/PNGs/bookmarkIcon.png')}/>
       
           <Text style={DiscussionCardStyles.Upvote}>
           Save
           </Text>

           <Image style={{
            height:20,
            width:20,
        }}
        source={require('../Assets/PNGs/shareIcon.png')}/>
       
           <Text style={DiscussionCardStyles.Upvote}>
           Share
           </Text>

        </View>
    </View>

{/* comment text input */}

    <View style={{flex:1, flexDirection:"row"}}>
    <Image
        style={DiscussionCardStyles.Avatar}
        source={require('../Assets/avatars/PNGs/Man1-2.png')}/>

    <TextInput
    // how to do textinput border? border:1, borderColor:"#568C9E"
    style={{flex:1, flexDirection:"row", border:1, borderColor:"#568C9E"}}
    placeholder="Add a comment" />

    </View>

        </ScrollView>

    </SafeAreaView>
)
}

export default DiscussionTopic;