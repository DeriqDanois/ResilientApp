import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';

const EditEmergency = props => {
    const [addContact, setContactAdded] = useState(false);


    return (
        <SafeAreaView>
            <View>
                        <BackButtonHeader
                            border={1}
                            height={100}
                            Header={"Edit Emergency Contact"}
                        />

            </View>

        </SafeAreaView>
       






    )
}


export default EditEmergency;