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
                height={50}
                Header={"Discussions"}
            />


            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={DiscussionStyles.scrollView}>


                <View>
                    <DiscussionCard />
                    <DiscussionCard />
                    <DiscussionCard />
                    <DiscussionCard />
                    <DiscussionCard />
                </View>


            </ScrollView>
            < NavBar />
        </SafeAreaView>

    )
}

export default DiscussionPage;









