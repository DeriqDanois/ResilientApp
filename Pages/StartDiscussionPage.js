import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Dimensions, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import LeaveReviewStyles from '../styles/PageStyles/LeaveReviewStyles';
import { Rating, AirbnbRating } from 'react-native-ratings';
import axios from 'axios';
import myaxios from '../axios';


const DiscussionForm = props => {
    const [ discussiontitle, setDiscussionTitle] = useState("");
    const [ discussion, setDiscussion] = useState("");
    const [ useravatar, setUserAvatar] = useState(require('../Assets/avatars/PNGs/Girl3-3.png'));
    var time = new Date().toLocaleString();
    const [useravatarandname, setUserAvatarAndName] = useState({});


    const getRehab = async () => {
        var user_id = await AsyncStorage.getItem("user_id")
        var data = await myaxios('users_read', {id:user_id});
        // console.log(data)
        // console.log(json);
        // setUserAvatarAndName(json);
        // setUserAvatarAndName(username['john'])
        if (data.length === 0){
            setUserAvatarAndName({username:['Guest']})
        } else {
            setUserAvatarAndName(data[0]);
        }
        
    }
    
    // Handle    
    useEffect(() => {
        setTimeout(function(){ getRehab(); }, 2000);

     []});

    const StartDiscussion = async()=>{
        //fetch db to create users
        console.log('email & password', discussion, discussiontitle);

        var obj = {
            key:"discussion_create",
            data:{
                discussionauthor:useravatarandname.username,
                timeposted:time,
                discussion:discussion,
                discussiontitle:discussiontitle,
                useravatar:useravatar,
                upvotes:0,
                answers:0,
        
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
                Header={"Start Discussion"}/>
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}>

        

        <View style={LeaveReviewStyles.Container}>

{/* avatar, name, post time */}

        <View style={LeaveReviewStyles.infoAndAvatar}>
            <View style={{flex:1}}>
                <Image
                    style={LeaveReviewStyles.Avatar}
                    source={require('../Assets/avatars/PNGs/Girl3-3.png')}
                />
            </View>

            <View style={LeaveReviewStyles.UsernameAndTimeBox} >
                <Text style={LeaveReviewStyles.Username}>{useravatarandname.username}</Text>
                <Text style={LeaveReviewStyles.TimePosted} >Posting Anonamously</Text>
            </View>
        </View>
       
   {/* Container with review stars and input below */}
        <View style={LeaveReviewStyles.reviewAndInputCont}>
            <View style={LeaveReviewStyles.starbox}>
                <Text style={{fontSize:20, fontWeight:"600",  marginTop:Dimensions.get('window').width/9}}>Discussion Title</Text>
            <TextInput
                 onChangeText={(t)=>{
                    setDiscussionTitle(t);

                }}
                // how to do textinput border? border:1, borderColor:"#568C9E"
                style={{
                    paddingLeft:'3%',
                    height:Dimensions.get("window").height/17, 
                    width:Dimensions.get("window").width/1.1, 
                    borderColor:"#568C9E",
                    borderWidth: 1.75, 
                    borderRadius:10, 
                    alignSelf:'center', 
                    marginTop:Dimensions.get('window').height/60,
                    letterSpacing:0.9,
                }}
                placeholder="Add a comment" />
            </View>

            <View style={LeaveReviewStyles.inputSubmitView}>
            <Text style={{fontSize:20, fontWeight:"600", marginTop:Dimensions.get('window').width/40}}>Discussion</Text>

                <TextInput
                multiline={true}
                onChangeText={(t)=>{
                    setDiscussion(t);

                }}
                // how to do textinput border? border:1, borderColor:"#568C9E"
                style={LeaveReviewStyles.inputStyles}
                placeholder="Add a comment" />
            </View>

            <TouchableOpacity
                style={LeaveReviewStyles.submitButton}
                    onPress={()=>{
                    
                        StartDiscussion();
                        alert('Your post has been made!')
                        
            }}>
                <Text style={LeaveReviewStyles.submitButtonText}>Post</Text>
                </TouchableOpacity>
        </View>

  

    {/* End of input comment and I con View */}

    </View>
        </ScrollView>
        <NavBar />
   
</SafeAreaView>

          
    )
}


export default DiscussionForm;