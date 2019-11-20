import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import DiscussionTopicStyles from '../styles/PageStyles/DiscussionTopicStyles';

const DiscussionTopic = props => {
    const [discussion, setDiscussion] = useState(false);

    return (
    
    <SafeAreaView style={{flex:1}}>
        
        <BackButtonHeader
                borderBottomColor={'rgba(52, 52, 52, 0.1)'}
                border={1}
                height={100}
                Header={"Discussions"}
            />
  
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}>

        <View style={DiscussionTopicStyles.Container}>


{/* avatar, name, post time */}

        <View style={{flex:1, flexDirection:"row", marginTop:"5%"}}>

            <View style={{flex:1}}>
                <Image
                style={DiscussionTopicStyles.Avatar}
                source={require('../Assets/avatars/PNGs/Girl3-3.png')}/>
            </View>
            <View style={DiscussionTopicStyles.UsernameAndTimeBox} >
                <Text style={DiscussionTopicStyles.Username}> ChubbyEmu </Text>
                <Text style={DiscussionTopicStyles.TimePosted} >Posted 10 mins ago</Text>
            </View>
        </View>

{/* topic text, description text */}

        <View style={{flex:1, flexDirection:"column", marginTop:'3%'}}>

        <Text style={DiscussionTopicStyles.TopicText}>
        Taken off pain meds after 10 years because people are dying from OxyContin. My Dr confirmed that I had done Nothing wrong to deserve this.
        </Text>

        <Text style={DiscussionTopicStyles.DescText}>
        So now I’m tortured with horrible pain every day. And people wonder why I want to just be dead?!?!
        </Text>

        </View> 

{/* upvote, save, share buttons (only img for now) */}

         <View style={DiscussionTopicStyles.ButtonBar}>

          {/* UpVote */}

            <TouchableOpacity 
                style={DiscussionTopicStyles.UpVote}
                onPress={()=>{
                    alert("upVote")
                }}>
                <Image
                 source={require('../Assets/PNGs/upvoteIcon.png')} 
                style={{       
                    height:18,
                    width:18,
                  }}
                  />
                <Text style={DiscussionTopicStyles.UpVoteText}>Upvote 12</Text>
            </TouchableOpacity>

           {/*  Save*/}

            <TouchableOpacity 
                style={DiscussionTopicStyles.Save}
                onPress={()=>{
                    alert("Save")
                }}>
                <Image
                source={require('../Assets/PNGs/bookmarkIcon.png')}
                    style={{     
                        height:18,
                        width:18,
                        }}/>
                <Text style={DiscussionTopicStyles.SaveText}>Save</Text>
            </TouchableOpacity>

          {/* Share */}

            <TouchableOpacity
                 style={DiscussionTopicStyles.Share}
                 onPress={()=>{
                    alert("Share")
                }}>
            <Image
                source={require('../Assets/PNGs/shareIcon.png')}
                style={{
                height:18,
                width:18,
                }}/>
                <Text style={DiscussionTopicStyles.ShareText}>Share</Text>
            </TouchableOpacity>
     
      
        </View>

{/* comment text input */}

    <View style={{flex:1, flexDirection:"row",  alignContent:'center', justifyContent:'center'}}>
    <Image
        style={DiscussionTopicStyles.Avatar}
        source={require('../Assets/avatars/PNGs/Man1-2.png')}/>

    <TextInput
    // how to do textinput border? border:1, borderColor:"#568C9E"
    style={{flex:3, height:'60%', borderColor:"#568C9E", paddingLeft:"2%", borderWidth:1, borderRadius:10, alignSelf:'center', marginRight:"13%"}}
    placeholder="Add a comment" />

    </View>
    {/* End of input comment and I con View */}
    </View>

        </ScrollView>
            <NavBar />
    </SafeAreaView>
)
}

export default DiscussionTopic;