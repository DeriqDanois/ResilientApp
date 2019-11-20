import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import LeaveReviewStyles from '../styles/PageStyles/LeaveReviewStyles';
import { Rating, AirbnbRating } from 'react-native-ratings';


const ReviewForm = props => {
    const [addContact, setContactAdded] = useState(false);
            

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
                source={require('../Assets/avatars/PNGs/Girl3-3.png')}/>
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
                    defaultRating={props.Ratings}
                    size={25}
                    selectedColor={'#568c9e'}
                    onFinishRating={(t) =>{
                    
                            props. navigation.navigate("LeaveReview");
                    }}/>
            </View>

            <View style={LeaveReviewStyles.inputSubmitView}>
                <TextInput
                // how to do textinput border? border:1, borderColor:"#568C9E"
                style={LeaveReviewStyles.inputStyles}
                placeholder="Add a comment" />
            </View>

            <TouchableOpacity
                style={LeaveReviewStyles.submitButton}
                    onPress={()=>{
                        alert("Thank you for your feedback!")
            }}>
                <Text style={LeaveReviewStyles.submitButtonText}>submit</Text>
                </TouchableOpacity>
        </View>

  

    {/* End of input comment and I con View */}

    </View>



        </ScrollView>
        <NavBar />
</SafeAreaView>
          
    )
}


export default ReviewForm;