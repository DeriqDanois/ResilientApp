
import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import  SavedPlaces from '../styles/PageStyles/SavedPlacesStyle';
import NavBar from '../comps/NavBar';
import {KeyboardAvoidingView} from 'react-native';
import SavedRehabs from '../comps/SavedRehabs';
import SavedPlacesStyle from '../styles/PageStyles/SavedPlacesStyle'
import { DrawerActions } from 'react-navigation-drawer';
import SearchBar from '../comps/SearchBar'
import SearchBarStyles from '../styles/ComponentStyles/SearchBarStyles';



const SavedPage = props => {


    const [imageUrl, setImgUrl] = useState([]);

    const getRehab = async()=>{
        var resp = await fetch("https://api.thecatapi.com/v1/images/search?limit=5");
        var json =  await resp.json();
        // console.log(json);
        setImgUrl(json);
    }

    // Handle 
    useEffect(()=>{
        getRehab();
    },[]);

    
    return (
 <SafeAreaView style={{flex:1}}>

    <SearchBar />
        
            <View style={{flex: 1, flexDirection:'row'}}>

                <ScrollView 
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={SavedPlaces.scrollView}>

                {    
                imageUrl.map((obj, i) => (
                    <SavedRehabs
                        key={i}
                        description={obj.id}
                        rehabName={"hello"}
                        imageUrl={obj.url}
                    />
                ))
            }
                </ScrollView>

            </View>
            
        <NavBar />
       
 </SafeAreaView>

    )
}


export default SavedPage;



        
      


      

   