import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import RehabResultsComponenetStyle from '../styles/ComponentStyles/ResultsComponentStyle';
import { withNavigation } from 'react-navigation';

import * as icon from './Svgs';



function RehabResultsComponent({ renderBookmark = true, ...props }){

    const iconDim = 25
  
    return (
        

   <View style={RehabResultsComponenetStyle.containertwo}> 
      
         <TouchableOpacity style={{padding:8, flex:1, marginBottom:20, marginTop:10}}
            onPress= {() => 
                props.navigation.navigate("RehabPage")}
             >

      

                <Image style={{
                        width:props.width, 
                        borderTopLeftRadius:props.BorderRadiusLeft,
                        borderTopRightRadius:props.BorderRadiusRight,
                        height:props.height
                        }} 
                         source={{uri:props.imageUrl}} />
                         
                <Text style={RehabResultsComponenetStyle.RehabName}>{props.rehabName}</Text>
                <Text style={RehabResultsComponenetStyle.RehabDescription}>{props.description}</Text>
         </TouchableOpacity>
        
        {
            renderBookmark && (
                <TouchableOpacity style={RehabResultsComponenetStyle.bookMarkIcon}
                          onPress={()=>{
                              alert("Added To Saved Rehabs")
                              }}>
                <icon.BookMarkIcon width={iconDim} height={iconDim} />
        </TouchableOpacity>
            )
        }

   </View>

    )
}

export default withNavigation(RehabResultsComponent);



        
      


      

   