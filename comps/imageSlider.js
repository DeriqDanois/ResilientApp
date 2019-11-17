
import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import RehabPageStyles from '../styles/PageStyles/RehabPageStyles';
import ImageSliderStyles from '../styles/ComponentStyles/ImageSliderStyles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
import * as icon from './Svgs';






const ImageSlider = props => {
  const [login, checkLogin] = useState(false);
  const [currentslide, setCurrentSlide] = useState(0);
 
    const iconDim = 30;

  return (


    <SafeAreaView style={{flex:1}}>

      <View style={ImageSliderStyles.SliderContainer}>

     

      <TouchableOpacity 
          style={{width:100, height:100, position:'absolute', zIndex:1, margin:'5%'}}
          onPress={()=>{
            props. navigation.navigate('Search')}}>
        
          <icon.BackArrow width={iconDim} height={iconDim} />
          </TouchableOpacity>

      <Carousel
      //Pass in the length of image array
              data={[1,2,3,4]}
              //Render to map out my image array into src of image component
              renderItem={() => (
                <Image 
                style={{ flex: props.flex, borderBottomRightRadius:props.borderRadiusBottomRight}}
                source={{ uri: props.Url }}>
              </Image>
              )}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width}
              loop={true}
              onSnapToItem={setCurrentSlide}
            />

                <View style={{position:"absolute", alignSelf:"center", top:'85%'}}>
                    
                    <Pagination
                        dotsLength={6}
                        activeDotIndex={currentslide}
                        dotStyle={{
                            width: 6,
                            height: 6,
                            backgroundColor: 'rgba(255, 255, 255, 0.92)'
                        }}
                    />
            </View>

            <TouchableOpacity style={ImageSliderStyles.bookMarkIcon}
            onPress={()=>{
                alert("Added To Saved Rehabs")
            }}>
                <icon.BookMarkUnsavedIcon width={iconDim} height={iconDim} />
            </TouchableOpacity>

            
           
     

        </View>
    
    </SafeAreaView>

  )
}


export default withNavigation(ImageSlider);









