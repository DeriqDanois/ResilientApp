
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


    <View style={RehabPageStyles.containertwo}>
      

 
   

        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={RehabPageStyles.scrollView}>
        <ImageSlider
        Url={"https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'"}
        flex={1}
        borderRadiusBottomRight={50} />
        <Text style={RehabPageStyles.type}>{"Safe injection Site"}</Text>
          <DetailsCard />
        </ScrollView>
    

      < NavBar />
    </View>

  )
}


export default RehabPage;









