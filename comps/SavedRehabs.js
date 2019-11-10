import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import SavedRehabStyles from '../styles/ComponentStyles/SavedRehabStyles';
import { withNavigation } from 'react-navigation';
import {KeyboardAvoidingView} from 'react-native';




const SavedRehabs = props => {
    
 
    return (

   <View style={SavedRehabStyles.containertwo}> 
        
        {/* getting data from the array counting objects*/}
       
         <TouchableOpacity  style={{padding:8, flex:1, marginBottom:20, marginTop:10}}
            onPress= {() => 
                props. navigation.navigate(Link)}>
            <View style={SavedRehabStyles.Results}>
                <Image style={SavedRehabStyles.ImageStyles} source={{uri:props.imageUrl}} />
                <Text style={SavedRehabStyles.RehabName}>{props.rehabName}</Text>
                <Text style={SavedRehabStyles.RehabDescription}>{props.Description}</Text>
            </View> 
         </TouchableOpacity>
 
   </View>

    )
}

export default withNavigation(SavedRehabs);



        
      


      

   