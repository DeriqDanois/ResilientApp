import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import EmergencyContactStyles from '../styles/PageStyles/AddEmergencyStyles';
import axios from 'axios';


const AddEmergencyContact = props => {
    const [addContact, setContactAdded] = useState(false);

    const [ contactname, setContactName ] = useState("");
    const [ contactphone, setContactPhone ] = useState("");
    const [ contactmessage, setContactMessage ] = useState("");
    const [ contactemail, setContactEmail ] = useState("");

    const [error, setError ] = useState("");

    const AddEmergencyContact = async()=>{
        //fetch db to create users
        console.log('email & password', contactmessage, contactname, contactphone, contactemail);

        var obj = {
            key:"emergencycontact_create",
            data:{
                phonenum:contactphone,
                name:contactname,
                message:contactmessage,
                email:contactemail,
            }
        }

    var r = await axios.post("http://localhost:3001/post", obj);
    console.log(r.data);

}



    return (

        <View style={EmergencyContactStyles.container}>
            <KeyboardAvoidingView behavior='position' enabled>
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
                        <TextInput style={EmergencyContactStyles.inputStyle}
                        onChangeText={(t)=>{
                            setContactName(t);

                        }}></TextInput>

                        <Text style={EmergencyContactStyles.inputTextHeader}>Phone Number</Text>
                        <TextInput style={EmergencyContactStyles.inputStyle}
                        onChangeText={(t)=>{
                            setContactPhone(t)
                        }}></TextInput>

                        <Text style={EmergencyContactStyles.inputTextHeader}>Message (Add Emergency Message)</Text>
                        <TextInput style={EmergencyContactStyles.inputStyle}
                        onChangeText={(t)=>{
                            setContactMessage(t)
                        }}></TextInput>

                        <View style={{ flex: 0.9, alignItems: 'center' }}>
                            <Text style={{ marginBottom:'1%', fontSize:16 }}> And / or </Text>
                            <TouchableOpacity
                         
                                    onPress={()=>{
                                        alert("911 added as Your Emergency Contact")
                                    }}
                                style={EmergencyContactStyles.RecommendedButton}>
                                <Text style={{textAlign:'center', color:'#568C9E', fontWeight:'bold', fontSize:16}}>
                                    Add 911 as an Emergency Contact (Recommended)</Text>
                            </TouchableOpacity>
                        </View>

       
                        </View>

            
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={{ height:'7%', marginBottom:30, width:'88%', }}>
                            <TouchableOpacity
                                style={EmergencyContactStyles.buttons}
                                onPress={() => {
                                    AddEmergencyContact();
                                    props.navigation.navigate('Search')}}>
                                <Text style={EmergencyContactStyles.buttonsText}>Add Contact</Text>
                            </TouchableOpacity>
                           
                    </View>


        </View>






    )
}


export default AddEmergencyContact;









