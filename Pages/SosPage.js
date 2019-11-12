
import React from 'react';
import { useState, useEffect, Linking} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import  SosPageStyles from '../styles/PageStyles/SosPageStyles';
import {KeyboardAvoidingView} from 'react-native';
import DetailsCard from '../comps/DetailsCard';
import { FlatList } from 'react-native-gesture-handler';
import BackButtonHeader from '../comps/BackButtonHeader';
import * as icon from '../comps/Svgs';


const SosPage = props => {
    const [login, checkLogin] = useState(false);

    const contactName = "Joe";

    // RNImmediatePhoneCall.immediatePhoneCall('0123456789');}

    iconDim = 2200;
    
    return (
        <SafeAreaView style={SosPageStyles.containertwo}>
                
            <BackButtonHeader 
            border={1}
            height={100}
            Header={"Emergency Contact"}
            />

            <View style={{flex: 1, width:'100%'}}>

                <ScrollView 
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={SosPageStyles.scrollView}>
                    
                    <TouchableOpacity
                    onPress={()=>{
                        alert("hello")
                    }}>

                    <View>
                        <Text style={SosPageStyles.descriptionText}>This will automatically:</Text>
                        <Text style={SosPageStyles.bulletedText}>Text your current location</Text>
                        <Text style={SosPageStyles.bulletedText2}>Call with emergency voice message</Text>
                    </View>

                        <icon.EmergencyButton width={iconDim} height={iconDim} />

                    </TouchableOpacity>

                        <View style={{height:200, width:200}}>
                      
                        </View>
                    
            
                </ScrollView>

            </View>

        
            
   
       
      </SafeAreaView>

    )
}


export default SosPage;



        
      


      

