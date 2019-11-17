import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import DiscussionStyles from '../styles/PageStyles/DiscussionStyles';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import DiscussionCard from '../comps/DiscussionCard';



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


                <View>
                    {DiscussionCard}
                </View>


            </ScrollView>
            < NavBar />
        </SafeAreaView>

    )
}

export default DiscussionPage;









