
                       
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Linking, Alert, Platform} from 'react-native';
import SosPageStyles from '../styles/PageStyles/SosPageStyles';
import BackButtonHeader from '../comps/BackButtonHeader';
import * as icon from '../comps/Svgs'
import SendSMS from 'react-native-sms'



const EmergencyContact = props => {

    return (    
        
     <View style={{flex:1, paddingTop:props.topMargin,}}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ paddingTop: '5%' }}>
                <Image
                    style={{ width: 20, height: 20, marginLeft:10 }}
                    source={require('../Assets/PNGs/personIcon.png')}
                />
            </View>

            <View>
                <Text style={SosPageStyles.johnDoeStyle}>{props.contactFullName}</Text>
                <Text style={SosPageStyles.phStyle}>{props.phoneNum}</Text>
            </View>
        </View>

        <View style={{alignContent:'center', paddingBottom:'25%'}}>
            <TouchableOpacity
                style={{marginTop:"8%"}}
                onPress={() => {
                 
                    SendSMS.send({
                        body: 'The default body of the SMS!',
                        recipients: ['2507138300'],
                        successTypes: ['sent', 'queued'],
                        allowAndroidSendWithoutReadPermission: true
                    }, (completed, cancelled, error) => {
                 
                        console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
                 
                    });
                    
                }}>
                <View style={SosPageStyles.contactJohn}>
            <Text style={{ textAlign:'center', color: 'white', fontSize:24, fontWeight: 'bold' }}>Contact {props.contactName}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>

     )
         

 }

export default EmergencyContact;