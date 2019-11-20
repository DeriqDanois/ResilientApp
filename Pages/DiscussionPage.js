import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
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
                renderBookmark={false}
   
            />
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}>


                <View>
                    <DiscussionCard 
                    renderBookmark={false}
                    DiscussionTitle={"Taken off pain meds after 10 years because people are..."}
                    upVoteNum={"12"}
                    answerNum={"2"}
                    timePosted={"2 mins ago"}
                    avatarImg={require('../Assets/avatars/PNGs/Girl3-3.png')}
                    />
                    <DiscussionCard 
                    renderBookmark={false}
                    DiscussionTitle={"Taken off pain meds after 10 years because people are..."}
                    upVoteNum={"12"}
                    answerNum={"2"}
                    timePosted={"2 mins ago"}
                    avatarImg={require('../Assets/avatars/PNGs/Girl3-3.png')}
                    />
                    <DiscussionCard 
                    renderBookmark={false}
                    DiscussionTitle={"Taken off pain meds after 10 years because people are..."}
                    upVoteNum={"12"}
                    answerNum={"2"}
                    timePosted={"2 mins ago"}
                    avatarImg={require('../Assets/avatars/PNGs/Girl3-3.png')}
                    />
                    <DiscussionCard 
                    renderBookmark={false}
                    DiscussionTitle={"Taken off pain meds after 10 years because people are..."}
                    upVoteNum={"12"}
                    answerNum={"2"}
                    timePosted={"2 mins ago"}
                    avatarImg={require('../Assets/avatars/PNGs/Girl3-3.png')}
                    />
                    <DiscussionCard 
                    renderBookmark={false}
                    DiscussionTitle={"Taken off pain meds after 10 years because people are..."}
                    upVoteNum={"12"}
                    answerNum={"2"}
                    timePosted={"2 mins ago"}
                    avatarImg={require('../Assets/avatars/PNGs/Girl3-3.png')}
                    />
                
                </View>


            </ScrollView>
            < NavBar />
        </SafeAreaView>

    )
}

export default DiscussionPage;









