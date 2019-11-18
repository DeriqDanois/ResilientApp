import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import SavedDiscussionStyles from '../styles/PageStyles/SavedDiscussionStyles';
import BackButtonHeader from '../comps/BackButtonHeader';
import DiscussionCard from '../comps/DiscussionCard';





const SavedDiscussions = props => {
    const [login, checkLogin] = useState(false);

    const contactName = "Saved Discussion";



    return (


        <SafeAreaView style={SavedDiscussionStyles.containertwo}>

            <BackButtonHeader
                height={50}
                Header={"Saved Discussions"}
            />


            <View style={{ flex: 1, width: '100%' }}>




                <ScrollView
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={SavedDiscussionStyles.scrollView}>

                <View>
                    <Image 
                    style={{
                        height:70,
                        width:70,}}
                    source={require('../Assets/PNGs/savedIcon.png')}/>
                    <DiscussionCard />
                    <DiscussionCard />
                    <DiscussionCard />
                    <DiscussionCard />
                    <DiscussionCard />
                </View>


                </ScrollView>

            </View>



        </SafeAreaView>

    )
}


export default SavedDiscussions



















