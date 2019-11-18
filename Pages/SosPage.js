
import React, { useState, useEffect, Linking } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import SosPageStyles from '../styles/PageStyles/SosPageStyles';
import BackButtonHeader from '../comps/BackButtonHeader';
import * as icon from '../comps/Svgs'


const SosPage = props => {
    const [login, checkLogin] = useState(false);

    const contactName = "Joe";

    // RNImmediatePhoneCall.immediatePhoneCall('0123456789');}

    iconDim = 400;

    return (
        <SafeAreaView style={SosPageStyles.containertwo}>

            <BackButtonHeader
                border={1}
                height={100}
                Header={"Emergency Contact"}
            />

            <View style={{ flex: 1, width: '100%' }}>

                <ScrollView
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={SosPageStyles.scrollView}>

                    <View>
                        <Text style={SosPageStyles.descriptionText}>This will automatically:</Text>
                        <Text style={SosPageStyles.bulletedText}>Text your current location to your contacts</Text>
                        <Text style={SosPageStyles.bulletedText2}>Call your contacts with emergency voice message</Text>
                    </View>
                    <View style={{ paddingLeft: '4%', paddingTop: 20 }}>
                        <Text 
                        onPress={()=>{
                            props.navigation.navigate("EditEmergency")
                        }}
                        style={{ textAlign: 'center', color: '#587a8b', paddingTop: 20, fontSize: 17 }}>
                            Edit your emergency contacts
                        </Text>

                        {/* //contact component starts from here */}

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ paddingLeft: '10%', paddingTop: '5%' }}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={{ uri: 'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png' }}
                                />
                            </View>
                            <View>
                                <Text style={SosPageStyles.johnDoeStyle}>John Doe</Text>
                                <Text style={SosPageStyles.phStyle}>+1(234)567-8900</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    alert("hello")
                                }}>
                                <View style={{ position: 'relative' }}>
                               
                                    <icon.EmergencyButton width={iconDim} height={iconDim} />
                                 
                                </View>
                                <View style={SosPageStyles.contactJohn}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>CONTACT JOHN</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>





                    <View style={{ height: 200, width: 200 }}>

                    </View>


                </ScrollView>

            </View>





        </SafeAreaView>

    )
}


export default SosPage;









