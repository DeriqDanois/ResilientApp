import React, { useState, useEffect } from 'react';
import { Dimensions, KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import SearchStyles from '../styles/PageStyles/SearchStyles';
import NavBar from '../comps/NavBar';
import RehabResultsComponent from '../comps/RehabResultsComponent';
import SearchBar from '../comps/SearchBar'
import axios from '../axios'






//Get User input


const Search = props => {


    const [rehabs, setRehabs] = useState([]);
    const [inject, setInject] = useState([]);
    const [detox, setDetox] = useState([]);
    const [outpatient, setOutPatient] = useState([]);

    const getRehab = async () => {
        var data = await axios('rehab_read', {});
        console.log(data)
        // Injection site below
        var ins = data.filter((o,i) => {
            return (o.type === "Safe Injection Site");
        })
        // Detox site below
        var det = data.filter((o,i) => {
            return (o.type === "Detox Centre");
        })
        var pat = data.filter((o,i) => {
            return (o.type === "Outpatient Rehab");
        })
        setOutPatient(pat);
        setDetox(det);
        setInject(ins);
        setRehabs(data);
    }

    // Handle 
    useEffect(() => {
        getRehab();
    }, []);


    return (

        <KeyboardAvoidingView style={{ flex: 1 }} enabled>

            <SafeAreaView style={SearchStyles.containertwo}>

                <SearchBar />
                {/* HAMBURGER end */}

                <ScrollView
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={SearchStyles.scrollView}>

                    {/* The image text and short description from google places api will go into these below */}

                    {/* Header #1 */}
                    <Text style={SearchStyles.HeaderText}>Safe Injection Sites</Text>

                    {/* Safe Injection site Results */}
                    <View style={{ flex: 1, flexDirection: "row" }}>

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {/* Rehab results from api below*/}

                            {
                               inject.map((obj, i) => (
                                    <RehabResultsComponent
                                        key={i}
                                        width={Dimensions.get("window").width/2.58}
                                        height={Dimensions.get("window").height/4.6}
                                        imageHeight={"120%"}
                                        renderBookmark={false}
                                        renderRatings={false}
                                        BorderRadiusLeft={14}
                                        BorderRadiusRight={14}
                                        RehabDistanceNumFlex={0.6}
                                        stars={obj.ratings/10}
                                        starNum={ "(" + obj.ratings + ")"}
                                        {...obj}/>
                                ))
                            }

                        </ScrollView>
                    </View>

                    {/* Header #2 */}
                    <Text style={SearchStyles.HeaderText}>Detox Center</Text>
                    {/* Row Two Results */}
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>

                            {
                               detox.map((obj, i) => (
                                    <RehabResultsComponent
                                    key={i}
                                    width={Dimensions.get("window").width/2.58}
                                    height={Dimensions.get("window").height/4.6}
                                    imageHeight={"120%"}
                                    renderBookmark={false}
                                    renderRatings={false}
                                    BorderRadiusLeft={14}
                                    BorderRadiusRight={14}
                                    RehabDistanceNumFlex={0.6}
                                    stars={obj.ratings/10}
                                    starNum={ "(" + obj.ratings + ")"}
                                    {...obj}/>
                                ))
                            }

                        </ScrollView>
                    </View>

                    {/* Header #3*/}
                    <Text style={SearchStyles.HeaderText}>Outpatient Rehab</Text>
                    {/* Row Three Results */}
                    <View style={{ flex: 1, flexDirection: "row" }}>

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>

                            {
                               outpatient.map((obj, i) => (
                                    <RehabResultsComponent
                                    key={i}
                                    width={Dimensions.get("window").width/2.58}
                                    height={Dimensions.get("window").height/4.6}
                                    imageHeight={"120%"}
                                    renderBookmark={false}
                                    renderRatings={false}
                                    BorderRadiusLeft={14}
                                    BorderRadiusRight={14}
                                    RehabDistanceNumFlex={0.6}
                                    stars={obj.ratings/10}
                                    starNum={ "(" + obj.ratings + ")"}
                                    {...obj}/>
                                ))
                            }

                        </ScrollView>
                    </View>


                </ScrollView>
                < NavBar />
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default Search;









