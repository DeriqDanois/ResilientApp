
import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import ImageSliderStyles from '../styles/ComponentStyles/ImageSliderStyles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';


const OnBoarding = ({renderButton = false, ...props}) => {
  const [currentslide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0)

  if (count === 2){
      renderButton = true
  }
 
  return (
    <SafeAreaView style={{flex:1}}>

      <View style={ImageSliderStyles.SliderContainer}>

      <Carousel
      //Pass in the length of image array
              data={[1,2,3]}
              //Render to map out my image array into src of image component
              renderItem={() => (
                  
                  <Pages/>
               
              )}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width}
              loop={true}
              onSnapToItem={setCurrentSlide}
              onBeforeSnapToItem={(t) => {setCount(t)}}
         
            />


                    <View style={{ alignSelf:"center", flex:0.2}}>
                    
                    <Pagination
                        dotsLength={3}
                        activeDotIndex={currentslide}
                        dotStyle={{
                            width: 9,
                            height: 9,
                            backgroundColor: 'rgba(0, 25, 25, 0.92)'
                        }}
                    />

            </View>
        
            {
        renderButton && (
            <TouchableOpacity
                style={{
                flex:0.08,
              borderWidth: 2.5,
              borderColor:"white",
              borderRadius: 40,
              justifyContent: "center",
              width:190,
              backgroundColor:'#002F43',  
              alignSelf:'center'
            }}
            onPress={() => {
                props. navigation.navigate('Login');
             
            }}>
            <Text style={{fontSize:20, textAlign:'center', color:'white'}}>Start</Text>
        
          </TouchableOpacity>  
         
        )
}  
        <View style={{margin:20}}></View>
        </View>
    
    </SafeAreaView>
  )


function Pages({renderOne = false, renderTwo = false, renderThree = false, ...props}){
    if (count === 0){
        renderOne = true
        renderTwo = false
        renderThree = false
    }
    if (count === 1){
        renderThree = false
        renderTwo = true
        renderOne = false
    }
    if (count === 2){
        renderThree = true
        renderTwo = false
        renderOne = false
    }
    return (
    
    <View style={{flex:1}}>

    {
        renderOne && (
   <View style={{flex:1}}>
        <Image 
        style={{ resizeMode: 'contain', width:'95%', height:'95%', alignSelf:'center', flex:0.8 }}
        // source={require('../Assets/Imgs/home1.jpg')}>
         source={require('../Assets/PNGs/onBoarding1.png') }> 
      </Image>

    <View style={{flex:0.2}}>
                <Text style={{textAlign:'center', fontSize:20, color:'black', marginBottom:'5%'}}>SOS Emergency Call</Text>
                <Text style={{textAlign:'center', fontSize:18, width:'80%', alignSelf:'center'}}>
                Press SOS button to call and text your trusted person your current location
                </Text>
         
            </View>
      </View>
    )
}
    {
        renderTwo && (
   <View style={{flex:1}}>
        <Image 
        style={{ resizeMode: 'contain', width:'95%', height:'95%', alignSelf:'center', flex:0.8 }}
        // source={require('../Assets/Imgs/home1.jpg')}>
         source={require('../Assets/PNGs/onBoarding2.png') }> 
      </Image>

    <View style={{flex:0.2}}>
                <Text style={{textAlign:'center', fontSize:20, color:'black', marginBottom:'5%'}}> Find the Right Recovery </Text>
                <Text style={{textAlign:'center', fontSize:18, width:'80%', alignSelf:'center'}}>
                Explore different options of recovery and find the ones that work for you
                </Text>
         
            </View>
      </View>
    )
}
    {
        renderThree && (
   <View style={{flex:1}}>
        <Image 
        style={{ resizeMode: 'contain', width:'95%', height:'95%', alignSelf:'center', flex:4 }}
        // source={require('../Assets/Imgs/home1.jpg')}>
         source={require('../Assets/PNGs/onBoarding3.png') }> 
      </Image>

    <View style={{flex:1}}>
                <Text style={{textAlign:'center', fontSize:20, color:'black', marginBottom:'5%'}}>Community Support</Text>
                <Text style={{textAlign:'center', fontSize:18, width:'80%', alignSelf:'center', marginBottom:20}}>
                Anonymously discuss and connect with others on the same boat
                </Text>   

      
            </View>
        
      </View>
      
    )
}
</View>
    )
    }   
}



export default withNavigation(OnBoarding);









