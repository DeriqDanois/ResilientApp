import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import RehabResultsComponenetStyle from '../styles/ComponentStyles/ResultsComponentStyle';
import { withNavigation } from 'react-navigation';



function RehabResultsComponent(props){
  
    return (
        

   <View style={RehabResultsComponenetStyle.containertwo}> 
      
         <TouchableOpacity style={{padding:8, flex:1, marginBottom:20, marginTop:10}}
            onPress= {() => 
                props. navigation.navigate("RehabPage")}
             >
                <Image style={RehabResultsComponenetStyle.ImageStyles} source={{uri:props.imageUrl}} />
                <Text style={RehabResultsComponenetStyle.RehabName}>{props.rehabName}</Text>
                <Text style={RehabResultsComponenetStyle.RehabDescription}>{props.description}</Text>
         </TouchableOpacity>
   </View>

    )
}

export default withNavigation(RehabResultsComponent);



        
      


      

   