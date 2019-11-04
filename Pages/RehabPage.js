
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import  RehabPageStyles from '../styles/RehabPageStyles';
import NavBar from '../comps/NavBar';
import {KeyboardAvoidingView} from 'react-native';
import DetailsCard from '../comps/DetailsCard';





const RehabPage = props => {
    const [login, checkLogin] = useState(false);

    const name = "Rehab";
    const title = "Rehab1";



    return (
  
     
        <SafeAreaView style={RehabPageStyles.containertwo}>

              <View style={{flex: 1, width:'100%'}}>
              <Image style={RehabPageStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>

              <DetailsCard />
              </View>
            
       < NavBar />
       
      </SafeAreaView>

    )
}


export default RehabPage;



        
      


      

   