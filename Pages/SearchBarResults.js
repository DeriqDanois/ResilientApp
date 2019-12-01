import React, { useEffect, useState } from 'react';
import {View, Image, Text, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';
import * as icon from '../comps/Svgs'
import axios from '../axios'
import SearchBarResultsStyles from '../styles/PageStyles/SearchBarResultsStyles';
import { ScrollView } from 'react-native-gesture-handler';
import BackButtonHeader from '../comps/BackButtonHeader';
import { withNavigation } from 'react-navigation';
import InputResults from '../comps/InputResult';




const GooglePlacesInput = () => {

  const [input, setInput] = useState('');
  const [rehabs, setRehabs] = useState([]);


  const GetPlaces =async()=>{
    var data = await axios('rehab_read', {});
    console.log(input)
    // Injection site below filterd by type name or address client side filter
    var results = data.filter((o,i) => {
      if (!!~o.address.indexOf(input) || !!~o.name.indexOf(input) || !!~o.type.indexOf(input)){
        return !!~o.address.indexOf(input) || !!~o.name.indexOf(input) || !!~o.type.indexOf(input);    
      }
    }); 
    
    setRehabs(results)
}

  return (

    <SafeAreaView style={{flex:1}}>


          <BackButtonHeader
            borderBottomColor={'rgba(52, 52, 52, 0.1)'}
            height={50}
          />
      
        <View style={SearchBarResultsStyles.HeaderContainer}>

            <TextInput 
              placeholder = "Try 'injection' site"
                onChangeText={(text) => { 
                  if (text.length > 1){
                  setInput(text)
                    GetPlaces();
                  }
                
                  //  console.log(input)
                }}
                style={SearchBarResultsStyles.SearchInputStyle}>
            </TextInput>

            <Image
            style={SearchBarResultsStyles.SearchIcon}
            source={require('../Assets/PNGs/greySearchIcon.png')}
        />

            <TouchableOpacity style={{flex:0.25}}
                onPress={() => {
                 
                }}>
               {/* Hamburger  */}
  
            
            </TouchableOpacity>
        </View>

        <Text style={{marginLeft:25, marginBottom:15, color:'grey'}}>Search Results</Text>

        <ScrollView style={{flex:1}}> 
         {/*  */}
            {
            rehabs.map((obj, i) => (
              <InputResults
              key={i}
              name={obj.name}
              address={obj.address} 
              starNum={obj.ratings}
              stars={obj.ratings/10}
              {...obj} />
            ))
            }
          </ScrollView>

        </SafeAreaView>
  );
}


export default withNavigation(GooglePlacesInput);


        
      


      

   