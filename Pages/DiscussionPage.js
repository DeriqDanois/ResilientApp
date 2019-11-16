import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import DiscussionStyles from '../styles/PageStyles/DiscussionStyles';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader'



const DiscussionPage = props => {
    const [discussion, setDiscussion] = useState(false);


    const name = "Name";
    const title = "Header";


    return (


        <SafeAreaView>

            <BackButtonHeader
                border={1}
                height={50}
                Header={"Discussions"}
            />


            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={DiscussionStyles.scrollView}>


                <View style={{ flex: 1, marginTop: 50, marginBottom: 50, alignContent: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'black', borderRadius: 10 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image
                            source={{ uri: 'http://www.themes-lab.com/traqs/assets/global/images/avatars/avatar1_big.png' }}
                            style={{ flex: 1, width: 70, height: 70, margin: 10 }}></Image>
                        <Text style={{ flex: 4, fontSize: 20, marginTop: 10 }}>Q: How Long does it take for someone to OD</Text>
                    </View>
                </View>


            </ScrollView>
            < NavBar />
        </SafeAreaView>

    )
}

export default DiscussionPage;









