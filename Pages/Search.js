import React from 'react';
import { useState, useEffect } from 'react';
import { Dimensions, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Button} from 'react-native';
import SearchStyles from '../styles/PageStyles/SearchStyles';
import NavBar from '../comps/NavBar';
import {KeyboardAvoidingView} from 'react-native';
import RehabResultsComponent from '../comps/RehabResultsComponent';
import SearchBar from '../comps/SearchBar'




//Get User input


const Search = props => {

    
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
        
 <KeyboardAvoidingView style={{flex:1}}  enabled>

   <SafeAreaView style={SearchStyles.containertwo}>

     <SearchBar />
        {/* hAMBURGER end */}

        <ScrollView 
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={SearchStyles.scrollView}>
       
        {/* The image text and short description from google places api will go into these below */}
            
        {/* Header #1 */}
        <Text style={SearchStyles.HeaderText}>Safe Injection Sight</Text>  

        {/* Safe Injection site Results */}
        <View style={{flex:1, flexDirection:"row"}}>
            
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
            {/* Rehab results from api below*/}
            
            {    
                imageUrl.map((obj, i) => (
                    <RehabResultsComponent
                        key={i}
                        width={160}
                        height={115}
                        BorderRadiusLeft={14}
                        BorderRadiusRight={14}
                        description={obj.id}
                        rehabName={"hello"}
                        imageUrl={obj.url} />
                     ))
                 }

            </ScrollView>      
        </View>
        
        {/* Header #2 */}
        <Text style={SearchStyles.HeaderText}>Detox Center</Text>
        {/* Row Two Results */}
        <View style={{flex:1, flexDirection:"row"}}>   
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>

{    
                imageUrl.map((obj, i) => (
                    <RehabResultsComponent
                        key={i}
                        width={160}
                        height={115}
                        BorderRadiusLeft={14}
                        BorderRadiusRight={14}
                        description={obj.id}
                        rehabName={"hello"}
                        imageUrl={obj.url} />
                     ))
                 }
                
            </ScrollView>
        </View>

        {/* Header #3*/}
            <Text style={SearchStyles.HeaderText}> OutPatient Rehab</Text>
            {/* Row Three Results */}
        <View style={{flex:1, flexDirection:"row"}}>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>

                {    
                imageUrl.map((obj, i) => (
                    <RehabResultsComponent
                        key={i}
                        width={160}
                        height={115}
                        BorderRadiusLeft={14}
                        BorderRadiusRight={14}
                        description={obj.id}
                        rehabName={"hello"}
                        imageUrl={obj.url} />
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



        
      


      

   