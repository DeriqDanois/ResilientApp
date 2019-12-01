
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import RehabPageStyles from '../styles/PageStyles/RehabPageStyles';
import NavBar from '../comps/NavBar';
import DetailsCard from '../comps/DetailsCard';
import ImageSlider from '../comps/imageSlider'





const RehabPage = props => {
  const [login, checkLogin] = useState(false);
// Recieve the data from indavidual rehab that was clicked
 var name = props.navigation.getParam("name1");
 var image = props.navigation.getParam("image");
 var type = props.navigation.getParam("type1");
 var stars = props.navigation.getParam("star");
 var starNum = props.navigation.getParam("starNum1");
 var description = props.navigation.getParam("description1");
 var address = props.navigation.getParam("address");
 var phonenum = props.navigation.getParam("phonenum1");
 var websitelink = props.navigation.getParam("websitelink1");
  


  return (

    <SafeAreaView style={{flex:1}}>


    <View style={RehabPageStyles.containertwo}>
  
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={RehabPageStyles.scrollView}>
           
        <ImageSlider
        Url={image}
        flex={1}
        borderRadiusBottomRight={50} />
        <Text style={RehabPageStyles.type}>{type}</Text>

          <DetailsCard
          name={name}
          description={description}
          address={address}
          phonenum={phonenum}
          websitelink={websitelink}  
          starNum={stars}
          stars={starNum} 
          image={image}
          type={type}
          
          />
        </ScrollView>
    

  
    </View>
      < NavBar />
    </SafeAreaView>
  )
}


export default RehabPage;









