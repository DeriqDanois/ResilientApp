import React, { useState } from 'react';
import { Dimensions, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Button, Alert } from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import EditEmergencyPageStyles from '../styles/PageStyles/EditEmergencyPageStyles';

const EditEmergencyContacts = props => {
    const [addContact, setContactAdded] = useState(false);


    return (
       <View style={{flex:1, borderBottomWidth:1, paddingBottom:"15%", paddingTop: "15%", borderColor:"#DADADA"}}>
            {/* Row 1  Contacts Name - Edit*/}
            {/* FLEX Start FOR Emergency Contact and Edit Button */}
                    <View style={{flex:1, flexDirection:'row'}}> 
                    <View>
                        <Image style={EditEmergencyPageStyles.ImageStyles}
                        source={require('../Assets/PNGs/personIcon.png')}
                        />
                    </View>
                            <Text style={EditEmergencyPageStyles.HeaderText}>{props.fullName}</Text>
                    <View style={{flex:1}}>
                        <Button
                            title="Edit"
                            color="#587a8b"
                            onPress={() => Alert.alert('Edit your contacts')}/>
                    </View>
                    </View>
                        {/* Flex End */}
                <Text style={EditEmergencyPageStyles.PhoneNumber}>{props.phoneNum}</Text>
                
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
                    <Text style={{fontSize:18, marginTop:'8%'}}>{props.message}</Text>
                    <Text style={{fontSize:15, color:'#587a8b'}}>Here is my current Location:</Text>
                    <Text  style={{fontSize:15,  color:'#587a8b'}}>(Your location at the time will be sent)"</Text>
                </View>  
            </View>
            {/* End of Row 2 */}
        </View>
          
    )
}


export default EditEmergencyContacts;