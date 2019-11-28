import React, { useEffect, useState } from 'react';
import {View, Image, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

function InputResults({description, name, imgurl, address, stars, starNum, websitelink, phonenum, type, ...props}){

    return (
  
    
      <View style={{
              flex:1, 
              height:110,
              alignSelf:'center', 
              borderBottomWidth:1, 
              borderBottomColor:'#DADADA',  
              width:"90%",
              marginTop:10
              }}>
  
        <TouchableOpacity style={{flex:1, flexDirection:'row',  margin:"4%" }}
       onPress= {() => 
  
        // Pass data of indavidual rehabs to rehab page
        props.navigation.navigate("RehabPage", {
            name1:name, 
            image:imgurl, 
            address:address, 
            star:stars, 
            starNum1:starNum,
            description1:description,
            phonenum1:phonenum,
            websitelink1:websitelink,
            type1:type
          
            })}>
                
        <View style={{ flex:2, flexDirection:'column'}}>
          <Text style={{flex:1, fontSize:16, fontWeight:'bold'}}>{name}</Text>
          <Text style={{flex:1.5}}>{address}</Text>
        </View>
         <View style={{flex:0.5}}>
          <Text style={{flex:1}}>{"(" + starNum + ") Km"}</Text>
        </View>
        </TouchableOpacity>
      </View>
      
    )
  }
  export default withNavigation(InputResults);