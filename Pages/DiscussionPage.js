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


        <SafeAreaView style={{flex:1}}>

            

            <BackButtonHeader
                borderBottomColor={'rgba(52, 52, 52, 0.1)'}
                height={100}
                border={1}
                Header={"Discussions"}
            />
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={DiscussionStyles.scrollView}>


                <View>
                    <DiscussionCard renderBookmark={false}/>
                    <DiscussionCard renderBookmark={false}/>
                    <DiscussionCard renderBookmark={false}/>
                    <DiscussionCard renderBookmark={false}/>
                    <DiscussionCard renderBookmark={false}/>
                </View>


            </ScrollView>
            < NavBar />
        </SafeAreaView>

    )
}

export default DiscussionPage;









