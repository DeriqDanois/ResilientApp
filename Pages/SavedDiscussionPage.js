import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import SavedDiscussionStyles from '../styles/PageStyles/SavedDiscussionStyles';
import BackButtonHeader from '../comps/BackButtonHeader';
import DiscussionCard from '../comps/DiscussionCard';
import NavBar from '../comps/NavBar';





const SavedDiscussions = props => {
    const [login, checkLogin] = useState(false);

    const contactName = "Saved Discussion";

    return (

        <SafeAreaView style={SavedDiscussionStyles.containertwo}>

            <BackButtonHeader
                borderBottomColor={'rgba(52, 52, 52, 0.1)'}
                height={100}
                border={1}
                Header={"Saved Discussions"}
      
            />


            <View style={{ flex: 1, width: '100%' }}>

                <ScrollView
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={SavedDiscussionStyles.scrollView}>

                <View>
                    <DiscussionCard 
                       DiscussionTitle={"Taken off pain meds after 10 years because people are..."}
                       upVoteNum={"12"}
                       answerNum={"2"}
                       timePosted={"2 mins ago"}
                       avatarImg={require('../Assets/avatars/PNGs/Girl3-3.png')}
                    />
                    <DiscussionCard 
                       DiscussionTitle={"Anyone here been addicted to painkillers?.."}
                       upVoteNum={"14"}
                       answerNum={"20"}
                       timePosted={"2 mins ago"}
                       avatarImg={require('../Assets/avatars/PNGs/Girl3-3.png')}
                    />
                  
                </View>


                </ScrollView>

            </View>

            <NavBar />

        </SafeAreaView>

    )
}


export default SavedDiscussions



















