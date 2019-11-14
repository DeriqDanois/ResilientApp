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

                        <Text style={EmergencyContactStyles.HeaderText}>Add a Emergency Contact</Text>

                        <Text style={EmergencyContactStyles.HeaderTextSmall}>
                            Resilient Helps send alerts to your friends
                            or loved ones in case of an emergency
                        </Text>

                        <Text style={EmergencyContactStyles.HeaderTextSmall}>All confedential</Text>

                        <Text style={EmergencyContactStyles.HeaderTextSmall}>
                            Resilient Helps send alerts to your friends
                             or loved ones in case of an emergency
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
                            <Text style={{ marginBottom: 10 }}> And / or </Text>
                            <TextInput
                                style={EmergencyContactStyles.RecommendedInput}
                                placeholder="add 911 as Contact">
                            </TextInput>
                        </View>

                        <View style={{ flex: 1, marginTop: "5%" }}>
                            <TouchableOpacity
                                style={EmergencyContactStyles.buttons}
                                onPress={() =>
                                    props.navigation.navigate('Search')}>
                                <Text style={EmergencyContactStyles.buttonsText}>Add Emergency Contact</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>

        </View>






    )
}


export default AddEmergencyContact;









