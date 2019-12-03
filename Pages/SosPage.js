
import React, { useState, useEffect, Linking } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import SosPageStyles from '../styles/PageStyles/SosPageStyles';
import BackButtonHeader from '../comps/BackButtonHeader';
import EmergencyContact from '../comps/EmergencyContact';
import * as icon from '../comps/Svgs';
import axios from '../axios';


const SosPage = props => {
    const [login, checkLogin] = useState(false);
    const contactName = "Joe";
    const [contacts, setContacts] = useState([])
    var location = "9191 barrard st"


    const getEmergencyContact = async () => {
        var data = await axios('emergencycontact_read', {});
        if (data.length === 0){
            setUserAvatarAndName({username:['none']})
        } 
        setContacts(data)
    }
    
    // Handle 
   
    useEffect(() => {
        getEmergencyContact();
     []});



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
                    {
                        contacts.map((obj, i) => (
                        <EmergencyContact
                        key={i}
                        phoneNum={obj.phonenum}
                        phone={obj.phonenum}
                        contactName={obj.name}
                        contactFullName={obj.name}
                        topMargin={"2%"}
                        message={obj.message}
                        />
                        ))
                    }

                    <EmergencyContact
                        phoneNum={"911"}
                        phone={"911"}
                        contactName={"911"}
                        contactFullName={"Emergency Responders"}
                        topMargin={"2%"}
                        message={"Help I'm Oding my location is " + location}
                        />
                 


                </ScrollView>
            </View>
        </SafeAreaView>

    )
}


export default SosPage;









