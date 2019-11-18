import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Button, Alert } from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import EditEmergencyPageStyles from '../styles/PageStyles/EditEmergencyPageStyles';

const EditEmergency = props => {
    const [addContact, setContactAdded] = useState(false);


    return (
        <SafeAreaView style={EditEmergencyPageStyles.box1}>
            <BackButtonHeader
                border={1}
                height={100}
                Header={"Edit Emergency Contact"}
            />
         <View>
             <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={EditEmergencyPageStyles.scrollView}>
                <View style={{flex:1, flexDirection:'row', marginTop:'10%'}}>
                    <View>
                        <Image style={{width: 30, height: 30, marginLeft:'3%', marginTop:'5%'}}
                        source={{uri: 'https://storage.needpix.com/rsynced_images/warning-98596_1280.png'}}
                        />
                    </View>
                    <View>
                        <Text style={{color:'grey', paddingRight:'12%', fontSize:18}}>
                            When CONTACT button is pressed,
                            Your Emergency contact will receive
                            an MMS Text of your current 
                            location,and a call with our system 
                            voice message:
                        </Text>
                        <Text style={{color:'#587a8b', paddingTop:'10%', paddingRight:'10%', fontSize:20}}>
                            "Hello, this is an Emergency call
                            from Resilient App. You've been
                            listed as an Emergency Contact for this
                            person who maybe overdosing. We've texted
                            you his current location. They need your
                            help immediately."
                        </Text>
                        <Text>________________________________________________________</Text>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View>
                                <Image style={{width: 30, height: 30, marginTop:'25%'}}
                                source={require('../Assets/avatar.png')}
                                />
                            </View>
                            <View>
                                <Text style={{marginTop:'5%', marginLeft:'15%', fontSize:20}}>John Doe</Text>
                                <Text style={{fontSize:18, paddingTop:'5%', paddingLeft:'5%'}}>+1(234)567-8900</Text>
                            </View>
                            <View style={{ marginLeft:'27%', marginTop:'1%'}}>
                                <Button
                                    title="Edit"
                                    color="#587a8b"
                                    onPress={() => Alert.alert('Edit your contacts')}
                                />
                            </View>
                        </View>
                        <View style={{flex:1, flexDirection:'row', marginTop:'5%'}}>
                            <View>
                                <Image style={{width: 30, height: 30, marginTop:'25%'}}
                                source={{uri:'https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884_960_720.png'}}
                                />
                            </View>
                            <View>
                                <Text style={{marginTop:'3%', marginLeft:'10%', fontSize:20}}>Message</Text>
                                <Text style={{fontSize:18, marginTop:'8%', paddingLeft:'8%'}}>
                                    "Help! I maybe overdosing.
                                </Text>
                                <Text style={{fontSize:15, paddingLeft:'10%', color:'#587a8b'}}>Here is my current Location:</Text>
                                <Text  style={{fontSize:15, paddingLeft:'6%', color:'#587a8b'}}>(Your location at the time will be sent)"</Text>
                            </View>
                            <View style={{marginTop:'1%'}}>
                                <Button
                                    title="Edit"
                                    color="#587a8b"
                                    onPress={() => Alert.alert('Edit your message')}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

        </SafeAreaView>
       






    )
}


export default EditEmergency;