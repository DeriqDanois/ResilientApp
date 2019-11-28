import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import EmergencyContactStyles from '../styles/PageStyles/AddEmergencyStyles';



const AddEmergencyContact = props => {
    const [addContact, setContactAdded] = useState(false);


    return (

        <View style={EmergencyContactStyles.container}>
            <KeyboardAvoidingView behavior='padding' enabled>
                <ScrollView contentContainerStyle={{ flex: 1 }}>

                    <View style={EmergencyContactStyles.HeaderContainer}>

                        <Text style={EmergencyContactStyles.HeaderText}>Add an Emergency Contact</Text>

                        <Text style={EmergencyContactStyles.HeaderTextSmall}>
                        Resilient helps send alert to your friends or loved ones in case of an emergency
                        </Text>

                        <Text style={EmergencyContactStyles.HeaderTextSmall}>
                        You can always add or edit the contact information later
                        </Text>

                    </View>

                    {/* Inputs Below */}

                    <View style={{ flex: 1 }}>

                        <Text style={EmergencyContactStyles.inputTextHeader}>Name</Text>
                        <TextInput style={EmergencyContactStyles.inputStyle}></TextInput>

                        <Text style={EmergencyContactStyles.inputTextHeader}>Phone Number</Text>
                        <TextInput style={EmergencyContactStyles.inputStyle}></TextInput>

                        <Text style={EmergencyContactStyles.inputTextHeader}>Email (Optional)</Text>
                        <TextInput style={EmergencyContactStyles.inputStyle}></TextInput>

                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ marginTop: 10, marginBottom: 20, fontSize:16 }}> And / or </Text>
                            <TouchableOpacity
                                    onPress={()=>{
                                        alert("911 added as Your Emergency Contact")
                                    }}
                                style={EmergencyContactStyles.RecommendedButton}>
                                <Text style={{textAlign:'center', color:'#568C9E', fontWeight:'bold', fontSize:16}}>
                                    Add 911 as an Emergency Contact (Recommended)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, marginTop: "5%" }}>
                            <TouchableOpacity
                                style={EmergencyContactStyles.buttons}
                                onPress={() =>
                                    props.navigation.navigate('Search')}>
                                <Text style={EmergencyContactStyles.buttonsText}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>

        </View>






    )
}


export default AddEmergencyContact;









