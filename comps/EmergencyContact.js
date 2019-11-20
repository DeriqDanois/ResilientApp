
                       
import React, { useState, useEffect, Linking } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import SosPageStyles from '../styles/PageStyles/SosPageStyles';
import BackButtonHeader from '../comps/BackButtonHeader';
import * as icon from '../comps/Svgs'



const EmergencyContact = props => {

    return (    
        
     <View style={{flex:1, paddingTop:props.topMargin,}}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ paddingTop: '5%' }}>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../Assets/PNGs/personIcon.png')}
                />
            </View>

            <View>
                <Text style={SosPageStyles.johnDoeStyle}>{props.contactFullName}</Text>
                <Text style={SosPageStyles.phStyle}>{props.phoneNum}</Text>
            </View>
        </View>

        <View style={{alignContent:'center', paddingBottom:'30%',  borderBottomWidth:1, borderColor:"#DADADA"}}>
            <TouchableOpacity
                style={{marginTop:"8%"}}
                onPress={() => {
                    alert("hello")
                }}>
                <View style={SosPageStyles.contactJohn}>
            <Text style={{ textAlign:'center', color: 'white', fontSize:24, fontWeight: 'bold' }}>CONTACT {props.contactName}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>

     )
         

 }

export default EmergencyContact;