
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import RehabPageStyles from '../styles/PageStyles/RehabPageStyles';
import NavBar from '../comps/NavBar';
import DetailsCard from '../comps/DetailsCard';
import ImageSlider from '../comps/imageSlider'





const RehabPage = props => {
  const [login, checkLogin] = useState(false);

  const name = "Rehab";
  const title = "Rehab1";


  return (

    <SafeAreaView style={{flex:1}}>


    <View style={RehabPageStyles.containertwo}>
      

 
  
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={RehabPageStyles.scrollView}>
        <ImageSlider
        Url={['../Assets/avatars/PNGs/Girl1-1.png',]}
        flex={1}
        borderRadiusBottomRight={50} />
        <Text style={RehabPageStyles.type}>{"Safe injection Site"}</Text>
          <DetailsCard />
        </ScrollView>
    

  
    </View>
      < NavBar />
    </SafeAreaView>
  )
}


export default RehabPage;









