import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import DiscussionTopicStyles from '../styles/PageStyles/DiscussionTopicStyles';
import axios from 'axios';


const DiscussionTopic = props => {
  
    var discussionauthor = props.navigation.getParam("discussionauthor");
    var useravatar = props.navigation.getParam("useravatar");
    var answers = props.navigation.getParam("answers");
    var discussion = props.navigation.getParam("discussion");
    var timeposted = props.navigation.getParam("timeposted");
    var upvotes = props.navigation.getParam("upvotes");
    var discussiontitle = props.navigation.getParam("discussiontitle");




    const StartDiscussion = async()=>{
        //fetch db to create saved discussion
        var obj = {
            key:"discussionsaved_create",
            data:{
                discussionauthor:discussionauthor,
                timeposted:timeposted,
                discussion:discussion,
                discussiontitle:discussiontitle,
                useravatar:useravatar,
                upvotes:upvotes,
                answers:answers,
        
            }
        }

    var r = await axios.post("https://resilientdb.herokuapp.com/post", obj);
    console.log(r.data);
}

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
                <Text style={DiscussionTopicStyles.Username}>{discussionauthor}</Text>
                <Text style={DiscussionTopicStyles.TimePosted} >{timeposted}</Text>
            </View>
        </View>

{/* topic text, description text */}

        <View style={{flex:1, flexDirection:"column", marginTop:'3%'}}>

        <Text style={DiscussionTopicStyles.TopicText}>
        {discussiontitle}
        </Text>

        <Text style={DiscussionTopicStyles.DescText}>
        {discussion}
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
<Text style={DiscussionTopicStyles.UpVoteText}>{upvotes + "  Upvote"}</Text>
            </TouchableOpacity>

           {/*  Save*/}

            <TouchableOpacity 
                style={DiscussionTopicStyles.Save}
                onPress={()=>{
                    alert("Save")
                    StartDiscussion();

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
        source={require('../Assets/avatars/PNGs/Girl3-3.png')}/>

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