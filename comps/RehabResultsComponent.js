import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import RehabResultsComponenetStyle from '../styles/ComponentStyles/ResultsComponentStyle';
import { withNavigation } from 'react-navigation';
import RehabPageStyles from '../styles/ComponentStyles/ResultsComponentStyle';
import * as icon from './Svgs';
import { Rating, AirbnbRating } from 'react-native-ratings';
import RehabResultsStyle from '../styles/ComponentStyles/ResultsComponentStyle';



function RehabResultsComponent({ renderBookmark = true, renderRatings = true, ...props }){

    const iconDim = 20
  
    return (
        

   <View style={{
            flex:1,
            width:props.width,
            height:props.height,
            flexDirection:'row',
            backgroundColor: 'white',
            shadowOffset:{ width: 2, height: 2 },
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowRadius: 5,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
            borderBottomRightRadius: 14,
            borderBottomLeftRadius: 14,
            margin: 8,
         }}> 
      
         <TouchableOpacity style={{width:"100%", height:props.imageHeight}}
            onPress= {() => 
                props.navigation.navigate("RehabPage")}>

                <Image style={{
                        flex: 1,
                        resizeMode: 'cover',
                        width:"100%",
                        borderTopLeftRadius:props.BorderRadiusLeft,
                        borderTopRightRadius:props.BorderRadiusRight,
                        height:props.imageHeight
                        }} 
                         source={{uri:props.imageUrl}} />
                         
                <Text style={RehabResultsComponenetStyle.RehabName}>{props.rehabName}</Text>
                
          
        <View style={{marginTop:10, marginLeft:"4%", flex:1}}>  
                <View style={RehabPageStyles.AddressAndKm}>
                    {/* AdddressAnd Km */}
                    <Text style={RehabResultsComponenetStyle.rehabAddress}>{props.description}</Text>
                    <Text style={RehabResultsStyle.RehabDistance}>{props.Distance}</Text>
                </View>
   

         {/* Render Reviews */}
        
        {
            renderRatings && (
                <View style={RehabPageStyles.RatingContainer}>
                       <Text style={RehabPageStyles.RatingNum}>{"4.0"}</Text>
                       
                       <AirbnbRating
                        style={{flex:1}}
                       count={props.StarCount} 
                       defaultRating={props.Rating}
                       size={10}
                       selectedColor={'#002F43'}
                       showRating={false}
                       isDisabled={true}
                       /> 

                        <Text style={{flex:1, fontSize:12, marginLeft:'3%'}}>{"(50)"}</Text>
                   </View> 
            )
        }

        </View>

          
         </TouchableOpacity>

        {/* Render Bookmard */}

        {
            renderBookmark && (
                <TouchableOpacity style={RehabPageStyles.bookMarkIcon}
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



        
      


      

   