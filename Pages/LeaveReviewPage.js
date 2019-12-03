import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import LeaveReviewStyles from '../styles/PageStyles/LeaveReviewStyles';
import { Rating, AirbnbRating } from 'react-native-ratings';
import axios from 'axios';
import myaxios from '../axios';


const ReviewForm = props => {
  
    const [ review, setReview] = useState("");
    const [ reviewtitle, setReviewTitle] = useState("");
    const [ stars, setStars] = useState("");
    const [ useravatar, setUserAvatar] = useState("");
    const [useravatarandname, setUserAvatarAndName] = useState({username:['fakl']});
    var time = new Date().toLocaleString();
    var facility = props.navigation.getParam("name");


    const getUsers = async () => {
        var data = await myaxios('users_read', {});
       
        if (data.length === 0){
            setUserAvatarAndName({username:['Guest']})
        } else {
            setUserAvatarAndName(data[0]);
        }
    }

    // Handle    
    useEffect(() => {
    getUsers();
    setUserAvatar(require('../Assets/avatars/PNGs/Girl3-3.png'));   
    []});
    
 
    const LeaveReview = async()=>{
        //fetch db to create users
        console.log('email & password', reviewtitle, review, useravatar, stars );

        var obj = {
            key:"review_create",
            data:{
                name:useravatarandname.username,
                time:time,
                title:reviewtitle,
                message:review,
                avatar:useravatar,
                stars:stars,
                facility:facility,
            }
        }

    var r = await axios.post("http://localhost:3001/post", obj);
    console.log(r.data);
}
            

    return (
    <SafeAreaView style={{flex:1}}>
    
        
        <BackButtonHeader
                borderBottomColor={'rgba(52, 52, 52, 0.1)'}
                border={1}
                height={100}
                Header={"Together We Can"}/>
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}>

        <View style={LeaveReviewStyles.Container}>

{/* avatar, name, post time */}

        <View style={LeaveReviewStyles.infoAndAvatar}>
            <View style={{flex:1}}>
                <Image
                style={LeaveReviewStyles.Avatar}
                source={useravatar}/>
            </View>

            <View style={LeaveReviewStyles.UsernameAndTimeBox} >
                <Text style={LeaveReviewStyles.Username}> ChubbyEmu </Text>
                <Text style={LeaveReviewStyles.TimePosted} >Posted 10 mins ago</Text>
            </View>
        </View>
       
   {/* Container with review stars and input below */}
        <View style={LeaveReviewStyles.reviewAndInputCont}>
            <View style={LeaveReviewStyles.starbox}>

                {/* Ratings */}
                <AirbnbRating
                    reviews={["Terrible", "Bad", "Average", "OK", "Good"]}
                    reviewColor='#568c9e'
                    ratingBackgroundColor='#c8c7c8'
                    count={5}
                    showRating={true}
                    defaultRating={0}
                    size={25}
                    selectedColor={'#568c9e'}
                    onFinishRating={(t) =>{
                        setStars(t);
                    
                            props. navigation.navigate("LeaveReview");
                    }}/>
            </View>

            <View style={LeaveReviewStyles.inputSubmitView}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Title</Text>
            <TextInput
                 onChangeText={(t)=>{
                    setReviewTitle(t);
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

                <Text style={{fontSize:20, fontWeight:'bold', marginTop:20}}>Review</Text>

                <TextInput
                onChangeText={(t)=>{
                    setReview(t);

                }}
                // how to do textinput border? border:1, borderColor:"#568C9E"
                style={LeaveReviewStyles.inputStyles}
                placeholder="Add a comment" />
            </View>

            <TouchableOpacity
                style={LeaveReviewStyles.submitButton}
                    onPress={()=>{
   
                        if(stars === ''){
                            alert('add a rating')
                        } else {
                        LeaveReview();
                        alert('Thanks for the feedback!')
                        }
            }}>
                <Text style={LeaveReviewStyles.submitButtonText}>submit</Text>
                </TouchableOpacity>
                <View style={{height:120, flex:1, backgroundColor:'red'}}></View>
        </View>

  

    {/* End of input comment and I con View */}

    </View>



        </ScrollView>
   
        <NavBar />
    
</SafeAreaView>
          
    )
}


export default ReviewForm;