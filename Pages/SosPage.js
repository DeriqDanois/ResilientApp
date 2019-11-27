
import React, { useState, useEffect, Linking } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import SosPageStyles from '../styles/PageStyles/SosPageStyles';
import BackButtonHeader from '../comps/BackButtonHeader';
import EmergencyContact from '../comps/EmergencyContact'
import * as icon from '../comps/Svgs'


const SosPage = props => {
    const [login, checkLogin] = useState(false);

    const contactName = "Joe";

    // RNImmediatePhoneCall.immediatePhoneCall('0123456789');}

    iconDim = 400;

    return (
        <SafeAreaView style={SosPageStyles.containertwo}>

            <BackButtonHeader
                borderBottomColor={'rgba(52, 52, 52, 0.1)'}
                height={100}
                border={1}
                Header={"Emergency Contact"}
            
            />

            <View style={{ flex: 1, width: '90%', alignSelf:'center' }}>

                <ScrollView
                    horizontal={false}
                    showsVerticalScrollIndicator={false}>

                    <View style={{margin:'5%'}}>
                        <Text style={SosPageStyles.descriptionText}> This will automatically:</Text>
                        <Text style={SosPageStyles.bulletedText}>{" \u2022 Text your current location"}</Text>
                        <Text style={SosPageStyles.bulletedText}>{" \u2022 Call with emergency voice message"}</Text>

                            <Text 
                            onPress={()=>{
                                props.navigation.navigate("EditEmergency")
                            }}
                            style={SosPageStyles.editLinkText}>
                                Edit your emergency contact 
                            </Text>
                    </View>

                   
                    {/* //contact component starts from here */}

                        <EmergencyContact
                        phoneNum={"+1(250)719-2239"} 
                        contactName={"John"}
                        contactFullName={"John Doe"}
                        topMargin={"2%"}
                        />
                        <EmergencyContact
                        phoneNum={"+1(250)713-9999"} 
                        contactName={"Jim"}
                        contactFullName={"Jim Bean"}
                        topMargin={"2%"}
                        />
                        <EmergencyContact
                        phoneNum={"+1(778)324-8755"} 
                        contactName={"Mary"}
                        contactFullName={"Mary Jane"}
                        topMargin={"2%"}
                        />

                    {/*  */}

                </ScrollView>
            </View>
        </SafeAreaView>

    )
}


export default SosPage;









