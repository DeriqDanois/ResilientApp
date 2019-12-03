import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Button, Alert } from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import EditEmergencyContacts from '../comps/EditEmergecyContact';
import EditEmergencyPageStyles from '../styles/PageStyles/EditEmergencyPageStyles';
import axios from '../axios';

const EditEmergency = props => {
    const [addContact, setContactAdded] = useState(false);
    const [contacts, setContacts] = useState([])


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




    return (
        
        <SafeAreaView style={EditEmergencyPageStyles.box1}>
            <BackButtonHeader
                borderBottomColor={'rgba(52, 52, 52, 0.1)'}
                height={100}
                border={1}
                Header={"Edit Emergency Contact"}
  
            />
       
             <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={EditEmergencyPageStyles.scrollView}>
                <View style={{flexDirection:'row', marginTop:'10%'}}>
                    <View>
                        <Image style={EditEmergencyPageStyles.AlertIconTop}
                               source={require('../Assets/PNGs/WarningIcon.png')}/>
                        
                    </View>
                    <View>
                        
                <View>
                    <View style={EditEmergencyPageStyles.HeaderTextContainer}>
                        <Text style={EditEmergencyPageStyles.BodyTopText}>
                            When CONTACT button is pressed,
                            Your Emergency contact will receive
                            an MMS Text of your current 
                            location, and a call with our system 
                            voice message:
                        </Text>
                        <Text style={EditEmergencyPageStyles.BodyLowerText}>
                            "Hello, this is an Emergency call
                            from Resilient App. You've been
                            listed as an Emergency Contact for this
                            person who maybe overdosing. We've texted
                            you his current location. They need your
                            help immediately."
                        </Text>
                    </View>   
                </View>
                        {/* Row 1  Contacts Name - Edit*/}
                        {/* FLEX Start FOR Emergency Contact and Edit Button */}
                        { 
                        contacts.map((obj, i) => (
                             <EditEmergencyContacts
                             key={i}
                             fullName={obj.name}
                             phoneNum={obj.phonenum}
                             message={obj.message}
                         
                             />
                        ))
                        }
                         
                           
                        {/* End of Row 2 */}
                        <TouchableOpacity 
                            onPress={()=>{
                                props.navigation.navigate('AddEmergencyContact')
                            }}>
                            <Image 
                            style={{
                                alignItems:"center", 
                                resizeMode:'contain',
                                marginTop:50, 
                                marginBottom:50, 
                                width:Dimensions.get('window').width/1.4, 
                                height:Dimensions.get('window').height/11}}
                            source={require('../Assets/PNGs/addMoreECbtn.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}


export default EditEmergency;