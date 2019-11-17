import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { useState, useEffect } from 'react'
import DetailsCardStyles from '../styles/ComponentStyles/DetailsCardStyles';

import { KeyboardAvoidingView } from 'react-native';
import OverView from './OverView';
import Facility from './Facility';
import Reviews from './Reviews';


var longDescriptionStatic = "Founded in 1993 and located in both Metro Vancouver and Vancouver Island, Together We Can - Addiction Recovery & Education Society is one of Canada's premier treatment centres for men battling alcohol and drug addiction. Our mission is to educate and support men and families who desire a new life in recovery. We provide over 300 men with an immersive 60-90 day recovery-based primary addiction treatment experience, followed by transitional housing in a therapeutic residential environment. Together We Can understands that long-term recovery is most successful when people are provided with health and wellness supports for physical, mental, emotional and spiritual healing. Our continuum of care includes residential and outpatient addiction treatment, transitional housing, continuing care, alumni initiatives, and a support program for families; the combination of these cornerstones forms our integrated approach to recovery."

// Main Card

function DetailsCard(props) {

    const [overview, SetOverView] = useState(0)
    const [facilities, SetFacilities] = useState(0)
    const [reviews, SetReviews] = useState(0)
 

    const [underline1, SetUnderline1] = useState(0)
    const [underline2, SetUnderline2] = useState(0)
    const [underline3, SetUnderline3] = useState(0)

    useEffect(() => {
        SetOverView(1)
        SetUnderline1(1)
    }, []);

    return (

        <SafeAreaView>

            <View style={{ flex: 1 }}>

                <ScrollView style={{ flex: 1 }}>

                    <View style={{ flex: 0.75 }}>



                        <Text style={DetailsCardStyles.TypeofCenter}>{props.Type}</Text>
                        <Text style={DetailsCardStyles.HeaderText}>{props.Name}</Text>

                    </View>

                    <View style={{ marginTop: 10, flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{ flex: 1, borderBottomColor: '#568C9E', borderBottomWidth: underline1 }}>
                            <Text style={{ textAlign: 'center' }}
                                onPress={() => {
                                    SetOverView(1)
                                    SetFacilities(0)
                                    SetReviews(0)
                                    // Setting the underline to change
                                    SetUnderline1(2)
                                    SetUnderline2(0)
                                    SetUnderline3(0)

                                }}>OverView</Text>
                        </View>

                        <View style={{ flex: 1, borderBottomColor: '#568C9E', borderBottomWidth: underline2 }}>
                            <Text style={{ textAlign: 'center' }}
                                onPress={() => {
                                    SetFacilities(1)
                                    SetOverView(0)
                                    SetReviews(0)
                                    // Setting the underline to change
                                    SetUnderline1(0)
                                    SetUnderline2(2)
                                    SetUnderline3(0)
                                }}>Facility</Text>
                        </View>

                        <View style={{ flex: 1, borderBottomColor: '#568C9E', borderBottomWidth: underline3 }}>
                            <Text style={{ textAlign: 'center' }}
                                onPress={() => {
                                    SetReviews(1)
                                    SetOverView(0)
                                    SetFacilities(0)

                                    // Setting the underline to change
                                    SetUnderline3(2)
                                    SetUnderline2(0)
                                    SetUnderline1(0)
                                }}>Review</Text>
                        </View>
                    </View>


                    {/* Show OverView if OverView is clicked if else show nothing */}
                    {
                        (overview === 1) ? <OverView
                            PhoneNumber={"250-714-8000"}
                            LongDescription={longDescriptionStatic}
                            Direction={"1789 Willingdon ave"}
                            ReviewNum={"(50 Reviews)"}
                            WebsiteLink={"facebook"}
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