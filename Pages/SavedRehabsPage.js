
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
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
                border={1}
                height={100}
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
                                width={"101%"}
                                height={110}
                                BorderRadiusLeft={14}
                                BorderRadiusRight={14}
                                description={obj.id}
                                rehabName={"hello"}
                                imageUrl={obj.url} />
                        ))
                    }
                </ScrollView>

            </View>

            <NavBar />

        </SafeAreaView>

    )
}


export default SavedRehabsPage;









