import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';

const EditEmergency = props => {
    const [addContact, setContactAdded] = useState(false);


    return (
        <SafeAreaView>
            <BackButtonHeader
                border={1}
                height={100}
                Header={"Edit Emergency Contact"}
            />
         <View style={{ flex: 1, width: '100%' }}>
             
        </View>

        </SafeAreaView>
       






    )
}


export default EditEmergency;