import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import SavedRehabStyles from '../styles/ComponentStyles/SavedRehabStyles';
import { withNavigation } from 'react-navigation';
import {KeyboardAvoidingView} from 'react-native';




const SavedRehabs = props => {
    
    const data = [
        {
            rehabName: 'Hello rehab',
            imageUrl: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            Description: 'red',
            Link:  "RehabPage" 
        },
        {
            rehabName: 'Hello rehab',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Polarlicht_2.jpg',
            Description: 'red',
            Link: 'RehabPage'
        },
        {
            rehabName: 'Hello rehab',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/06/30/09/31/background-image-3507320_960_720.jpg',
            Description: 'red',
            Link: 'RehabPage'
        },
    
    ]
    return (

   <View style={SavedRehabStyles.containertwo}> 
        
        {/* getting data from the array counting objects*/}
         {data.map(({ rehabName, imageUrl, Description, Link}, index) => (
       
         <TouchableOpacity  key={index} style={{padding:8, flex:1, marginBottom:20, marginTop:10}}
            onPress= {() => 
                props. navigation.navigate(Link)}>
            <View style={SavedRehabStyles.Results}>
                <Image style={SavedRehabStyles.ImageStyles} source={{uri: imageUrl}} />
                <Text style={SavedRehabStyles.RehabName}>{rehabName}</Text>
                <Text style={SavedRehabStyles.RehabDescription}>{Description}</Text>
            </View> 
         </TouchableOpacity>
         ))}
 
   </View>

    )
}

export default withNavigation(SavedRehabs);



        
      


      

   