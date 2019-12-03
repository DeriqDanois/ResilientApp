import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { useState, useEffect } from 'react'
import DetailsCardStyles from '../styles/ComponentStyles/DetailsCardStyles';
import * as icon from '../comps/Svgs'

import { KeyboardAvoidingView } from 'react-native';
import axios from 'axios'
import OverView from './OverView';
import Facility from './Facility';
import Reviews from './Reviews';


const iconDim = 30;
var longDescriptionStatic = "Founded in 1993 and located in both Metro Vancouver and Vancouver Island, Together We Can - Addiction Recovery & Education Society is one of Canada's premier treatment centres for men battling alcohol and drug addiction. Our mission is to educate and support men and families who desire a new life in recovery. We provide over 300 men with an immersive 60-90 day recovery-based primary addiction treatment experience, followed by transitional housing in a therapeutic residential environment. Together We Can understands that long-term recovery is most successful when people are provided with health and wellness supports for physical, mental, emotional and spiritual healing. Our continuum of care includes residential and outpatient addiction treatment, transitional housing, continuing care, alumni initiatives, and a support program for families; the combination of these cornerstones forms our integrated approach to recovery."

// Main Card

function DetailsCard({ description, stars, starNum, address, phonenum, websitelink, name, type, image, ...props}) {
    
    const [overview, SetOverView] = useState(0)
    const [facilities, SetFacilities] = useState(0)
    const [reviews, SetReviews] = useState(0)

    const [savednum, SetSavedNum] = useState(phonenum);
    const [savedaddress, SetSavedAddress] = useState(address);
    const [saveddiscription, SetSavedDiscription] = useState(description);
    const [savedstars, SetSavedStars] = useState(stars);
    const [savedname, SetSavedName] = useState(name);
    const [savedwebsitelink, SetSavedWebsiteLink] = useState(websitelink);
    const [savedimage, SetSavedImageUrl] = useState(image);

    const [Background1, SetBackground1] = useState("white")
    const [Background2, SetBackground2] = useState("white")
    const [Background3, SetBackground3] = useState("white")
    const [textcolor1, SetTextColor1] = useState("white")
    const [textcolor2, SetTextColor2] = useState("black")
    const [textcolor3, SetTextColor3] = useState("black")
 

    const CreateRehab= async()=>{
       var starToInt = starNum*10;
        //fetch db to create users
        console.log('email & password', name, starToInt, phonenum, type, description, address, websitelink, image);
        
        var obj = {
            key:"savedrehab_create",
            data:{
                name:name,
                ratings:starToInt,
                phonenum:phonenum,
                type:type,
                description:description,
                address:address,
                websitelink:websitelink,
                imgurl:image,
                

            }
        }
        var r = await axios.post("http://localhost:3001/post", obj);
        console.log(r.data);
        
    
    }

    useEffect(() => {
        SetOverView(1)
        SetBackground1("#568C9E")
        console.log(image)
        console.log(type)
        console.log(starNum*10)
    }, []);

    

    return (

        <SafeAreaView>

            <View style={{ flex: 1 }}>
                {/* BookMark Below */}
                <TouchableOpacity style={DetailsCardStyles.bookMarkIcon}
                    onPress={()=>{
                        alert("Added To Saved Rehabs")
                        CreateRehab();
                    }}>
                    <icon.BookMarkUnsavedIcon width={iconDim} height={iconDim} />
                </TouchableOpacity>

                <ScrollView style={{ flex: 1 }}>

                    <View style={{ flex: 0.75 }}>
   
                        <Text style={DetailsCardStyles.HeaderText}>{name}</Text>

                    </View>

                    <View style={{ marginTop: 10, flex: 1, height:50, borderWidth:0.7, borderColor:'#DADADA', flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{ flex: 1, borderLeftWidth:0.5, borderColor:'#DADADA', height:'100%', justifyContent:'center', backgroundColor: Background1 }}>
                            <Text style={{ textAlign: 'center', color: textcolor1}}
                                onPress={() => {
                                    SetOverView(1)
                                    SetFacilities(0)
                                    SetReviews(0)
                                    // Setting the Background to change
                                    SetBackground1("#568C9E")
                                    SetBackground2("white")
                                    SetBackground3("white")
                                    // Color of text in button
                                    SetTextColor1("white")
                                    SetTextColor2("black")
                                    SetTextColor3("black")
                                

                                }}>Overview</Text>
                        </View>

                        <View style={{ flex: 1, borderLeftWidth:0.5, borderColor:'#DADADA', height:'100%', justifyContent:'center', backgroundColor: Background2 }}>
                            <Text style={{ textAlign: 'center', color: textcolor2 }}
                                onPress={() => {
                                    SetFacilities(1)
                                    SetOverView(0)
                                    SetReviews(0)
                                    // Setting the Background to change
                                    SetBackground1("white")
                                    SetBackground2("#568C9E")
                                    SetBackground3("white")
                                //    color of text in button
                                    SetTextColor1("black")
                                    SetTextColor2("white")
                                    SetTextColor3("black")
                                }}>Facility</Text>
                        </View>

                        <View style={{ flex: 1, borderLeftWidth:0.5, borderColor:'#DADADA', height:'100%', justifyContent:'center', backgroundColor: Background3 }}>
                            <Text style={{ textAlign: 'center', color: textcolor3}}
                                onPress={() => {
                                    SetReviews(1)
                                    SetOverView(0)
                                    SetFacilities(0)

                                    // Setting the Background to change
                                    SetBackground3("#568C9E")
                                    SetBackground2("white")
                                    SetBackground1("white")
                                    //    color of text in button
                                    SetTextColor1("black")
                                    SetTextColor2("black")
                                    SetTextColor3("white")
                                }}>Review</Text>
                        </View>
                    </View>


                    {/* Show OverView if OverView is clicked if else show nothing */}
                    {
                        (overview === 1) ? <OverView
                            PhoneNumber={phonenum}
                            LongDescription={description}
                            Direction={address}
                            reviewNum={stars}
                            WebsiteLink={websitelink}
                            ratingNum={starNum}
                            starsCount={starNum}
                        /> : null
                    }
                    {/* Show facility if facility is clicked if else show nothing */}
                    {
                        (facilities === 1) ? <Facility /> : null
                    }
                    {/* Show Reviews if Reviews is clicked if else show nothing */}
                    {
                        (reviews === 1) ? <Reviews
                            Ratings={"5"}
                        /> : null
                    }

                </ScrollView>

            </View>

        </SafeAreaView>


    )

}










export default DetailsCard