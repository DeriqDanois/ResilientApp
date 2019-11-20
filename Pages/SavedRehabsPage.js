
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import SavedRehabsPageStyle from '../styles/PageStyles/SavedRehabPageStyle';
import NavBar from '../comps/NavBar';
import RehabResultsComponent from '../comps/RehabResultsComponent';
import BackButtonHeader from '../comps/BackButtonHeader'





const SavedRehabsPage = props => {


    const [imageUrl, setImgUrl] = useState([]);

    const getRehab = async () => {
        var resp = await fetch("https://api.thecatapi.com/v1/images/search?limit=5");
        var json = await resp.json();
        // console.log(json);
        setImgUrl(json);
    }

    // Handle 
    useEffect(() => {
        getRehab();
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
                    style={SavedRehabsPageStyle.scrollView}>

                    {
                        imageUrl.map((obj, i) => (
                            <RehabResultsComponent
                                key={i}
                                width={Dimensions.get("window").width/1.11}
                                height={Dimensions.get("window").height/4.5}
                                imageHeight={"120%"}
                                BorderRadiusLeft={14}
                                BorderRadiusRight={14}
                                description={obj.id}
                                rehabName={"hello"}
                                imageUrl={obj.url}
                                renderRatings={true}
                                Distance={"2.1km"}
                                RehabDistanceNumFlex={1}
                                addressAdnDistanceFlexDirectio={"row"}
                              
                                 />
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









