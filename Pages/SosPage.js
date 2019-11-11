
import React from 'react';
import { useState, useEffect, Linking} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import  SosPageStyles from '../styles/PageStyles/SosPageStyles';
import {KeyboardAvoidingView} from 'react-native';
import BackButtonHeader from '../comps/BackButtonHeader';







const SosPage = props => {
    const [login, checkLogin] = useState(false);

    const contactName = "Joe";

    // RNImmediatePhoneCall.immediatePhoneCall('0123456789');}
    
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
                        }}>
                        <View style={{margin:50, alignSelf:'center', justifyContent:'center', width:300, height:300, borderRadius:200, backgroundColor:"blue"}}>
                            <Text style={SosPageStyles.CircleInnerText}>{contactName}</Text>
                        </View>  

                     </TouchableOpacity>

                        <View style={{margin:50, alignSelf:'center', justifyContent:'center', width:300, height:300, borderRadius:200, backgroundColor:"blue"}}>
                            <Text style={SosPageStyles.CircleInnerText}>{contactName}</Text>
                            </View>  

                
               
            
                </ScrollView>

            </View>
            
   
       
      </SafeAreaView>

    )
}


export default SosPage;



        
      


      

   