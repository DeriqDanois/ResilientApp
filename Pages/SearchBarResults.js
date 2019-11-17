import React, { useEffect, useState } from 'react';
import {View, Image, Text, SafeAreaView } from 'react-native';
import BackButtonHeader from '../comps/BackButtonHeader';
import axios from 'axios'
import { TextInput } from 'react-native-gesture-handler';
import RehabResultsComponent from '../comps/RehabResultsComponent';
import SearchBarResultsStyle from "../styles/PageStyles/SearchBarResultsStyles"





const GooglePlacesInput = () => {
//AIzaSyAqvr-0U5nQvhSS4PkWIT5Yz_KfnIbJo6o

  
  const [input, setInput] = useState('');
  const [placesdata, setPlacesData] = useState([]);
// Google Places below
  const GetPlaces =async()=>{
    var r = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAqvr-0U5nQvhSS4PkWIT5Yz_KfnIbJo6o&input=${input}`);
    //console.log(r);
    var data = r.data.predictions.map((o)=>{
      return o.description;
    });
    setPlacesData(data)
    console.log(data);
  }


  return (

    <SafeAreaView>

         <BackButtonHeader
         Header={"Search for places"} />

      <View style={{flex:1}}>

        <TextInput 
          style={SearchBarResultsStyle.InputStyle}
          placeholder="search for rehabs"
          onChangeText={(text)=>{
        if ( text.length >= 3){
            GetPlaces();
            setInput(text)
            console.log(input)
        }
        }} />



            {/* Loading Results into  */}
    {
        placesdata.map((obj, i) => (
           
            <View
              key={i} 
              style={SearchBarResultsStyle.ResultsBox}>
                <Text style={SearchBarResultsStyle.ResultsDescriptionText}>{obj}</Text>
            </View>
        ))
    }


      {/* {
          placesdata.map((obj, i) => (
              <RehabResultsComponent
                  key={i}
                  width={160}
                  height={115}
                  renderBookmark={false}
                  BorderRadiusLeft={14}
                  BorderRadiusRight={14}
                  description={obj.id}
                  rehabName={"hello"}
                   />
          ))
      } */}

   

        


     




    </View>
    </SafeAreaView>
  );
}
export default GooglePlacesInput;


        
      


      

   