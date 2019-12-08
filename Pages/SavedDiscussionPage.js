import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import SavedDiscussionStyles from '../styles/PageStyles/SavedDiscussionStyles';
import BackButtonHeader from '../comps/BackButtonHeader';
import DiscussionCard from '../comps/DiscussionCard';
import NavBar from '../comps/NavBar';
import axios from '../axios';




const SavedDiscussions = props => {
 
    const [saveddiscussion, setSavedDiscussion] = useState([]);

    const getRehab = async () => {
        var data = await axios('discussionsaved_read', {});
        console.log(data)
        // console.log(json);
        // setSavedRehab(json);
        setSavedDiscussion(data);
    }

    // Handle 
    useEffect(() => {
        setTimeout(function(){ getRehab(); }, 3000);
       
     
    }, []);



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
                    {
                    saveddiscussion.map((obj, i) => (
                    <DiscussionCard 
                       key={i}
                       discussiontitle={obj.discussiontitle}
                       upvotes={obj.upvotes}
                       answers={obj.answers}
                       timeposted={obj.timeposted}
                       useravatar={obj.useravatar}
                       discussionauthor={obj.discussionauthor}
                 
                    />
                    ))
                    }

                
                  
                </View>


                </ScrollView>

            </View>

            <NavBar />

        </SafeAreaView>

    )
}


export default SavedDiscussions



















