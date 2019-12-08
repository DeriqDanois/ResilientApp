
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import SavedRehabsPageStyle from '../styles/PageStyles/SavedRehabPageStyle';
import NavBar from '../comps/NavBar';
import RehabResultsComponent from '../comps/RehabResultsComponent';
import BackButtonHeader from '../comps/BackButtonHeader'
import axios from '../axios'





const SavedRehabsPage = props => {


    const [savedrehabs, setSavedRehab] = useState([]);


    const getRehab = async () => {
        var data = await axios('savedrehab_read', {});
        console.log(data)
        // console.log(json);
        // setSavedRehab(json);
        setSavedRehab(data);
    }

    // Handle 
    useEffect(() => {
        setTimeout(function(){ getRehab(); }, 3000);
       
    }, []);



    return (


        <SafeAreaView style={{ flex: 1 }}>

            <BackButtonHeader
                borderBottomColor={'rgba(52, 52, 52, 0.1)'}
                height={100}
                border={1}
                Header={"Saved Rehabs"}
            />

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <ScrollView
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={{marginBottom:Dimensions.get('window').height/13, marginHorizontal:Dimensions.get('window').width/30}}>

                    {
                        savedrehabs.map((obj, i) => (
                            <RehabResultsComponent
                                key={i}
                                width={Dimensions.get("window").width/1.11}
                                height={Dimensions.get("window").height/4.5}
                                imageHeight={"120%"}
                                BorderRadiusLeft={14}
                                BorderRadiusRight={14}
                                renderRatings={true}
                                stars={obj.ratings/10}
                                starNum={obj.ratings}
                                Distance={"2.1km"}
                                RehabDistanceNumFlex={1}
                                addressAdnDistanceFlexDirectio={"row"}
                                {...obj}/>
                              
                       
                        ))
                    }
                </ScrollView>

            </View>
            <View>
                <NavBar />
            </View>
           

        </SafeAreaView>
    )
}


export default SavedRehabsPage;









