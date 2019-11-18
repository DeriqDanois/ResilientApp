import React, { useState } from 'react';
import { Dimensions, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Button, Alert } from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import EditEmergencyPageStyles from '../styles/PageStyles/EditEmergencyPageStyles';

const EditEmergency = props => {
    const [addContact, setContactAdded] = useState(false);


    return (
        <SafeAreaView style={EditEmergencyPageStyles.box1}>
            <BackButtonHeader
                borderBottomColor={'rgba(52, 52, 52, 0.1)'}
                height={100}
                border={1}
                Header={"Edit Emergency Contact"}
            />
         <View style={EditEmergencyPageStyles.BodyStyles}>
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
                            location,and a call with our system 
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
                             <View style={{flex:1, flexDirection:'row'}}> 
                                <View>
                                    <Image style={EditEmergencyPageStyles.ImageStyles}
                                    source={require('../Assets/avatar.png')}
                                    />
                                </View>
                                      <Text style={EditEmergencyPageStyles.HeaderText}>{"John Doe"}</Text>
                                <View style={{flex:1}}>
                                    <Button
                                        title="Edit"
                                        color="#587a8b"
                                        onPress={() => Alert.alert('Edit your contacts')}/>
                                </View>
                             </View>
                                    {/* Flex End */}
                            <Text style={EditEmergencyPageStyles.PhoneNumber}>{"+1(250)718-8870"}</Text>
                            
                        {/* Row 2  Message - Edit*/}
                        <View style={{flex:1, flexDirection:'row', marginTop:'5%'}}>
                            <View>
                                <Image style={EditEmergencyPageStyles.ImageStyles}
                                   source={require('../Assets/PNGs/msgIcon.png')}
                                         
                                />
                            </View>
                            <View style={{flex:1}}>
                                {/* FLEX Start FOR Message and Edit Button */}
                            <View style={{flex:1, flexDirection:'row'}}> 
                            <Text style={{ flex:1, marginTop:'3%', marginLeft:'3%', fontSize:20 }}>Message</Text>
                                <View style={{flex:1}}>
                                    <Button
                                        title="Edit"
                                        color="#587a8b"
                                        onPress={() => Alert.alert('Edit your Message')}/>
                                </View>
                            </View>
                                {/* Flex End */}
                                <Text style={{fontSize:18, marginTop:'8%'}}> "Help! I maybe overdosing.</Text>
                                <Text style={{fontSize:15, color:'#587a8b'}}>Here is my current Location:</Text>
                                <Text  style={{fontSize:15,  color:'#587a8b'}}>(Your location at the time will be sent)"</Text>
                            </View>  
                        </View>
                        {/* End of Row 2 */}

                    </View>
                </View>
            </ScrollView>
        </View>
        </SafeAreaView>

    )
}


export default EditEmergency;