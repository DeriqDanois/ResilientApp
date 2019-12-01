import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import RehabResultsComponenetStyle from '../styles/ComponentStyles/ResultsComponentStyle';
import { withNavigation } from 'react-navigation';
import RehabPageStyles from '../styles/ComponentStyles/ResultsComponentStyle';
import * as icon from './Svgs';
import { Rating, AirbnbRating } from 'react-native-ratings';
import RehabResultsStyle from '../styles/ComponentStyles/ResultsComponentStyle';



function RehabResultsComponent({ renderBookmark = true, renderRatings = true, distance, description, name, imgurl, address, stars, starNum, websitelink, phonenum, type, ...props }){

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

                // Pass data of indavidual rehabs to rehab page
                props.navigation.navigate("RehabPage", {
                    name1:name, 
                    image:imgurl, 
                    address:address, 
                    star:stars, 
                    starNum1:starNum,
                    description1:description,
                    phonenum1:phonenum,
                    websitelink1:websitelink,
                    type1:type
                  
                    })}>

                <Image style={{
                        flex: 1,
                        resizeMode: 'cover',
                        width:"100%",
                        borderTopLeftRadius:props.BorderRadiusLeft,
                        borderTopRightRadius:props.BorderRadiusRight,
                        height:props.imageHeight
                        }} 
                         source={{uri:imgurl}} />
                         {/* Passing Address from db  */}
                <Text style={RehabResultsComponenetStyle.RehabName}>{name}</Text>
                
          
        <View style={{marginTop:10, marginLeft:"4%", flex:1}}>  
                <View style={RehabPageStyles.AddressAndKm}>
                    {/* AdddressAnd Km */}
                    <Text style={RehabResultsComponenetStyle.rehabAddress}>{address}</Text>
                    <Text style={RehabResultsStyle.RehabDistance}>{distance}</Text>
                    <Text></Text>
                </View>
   

         {/* Render Reviews */}
        
        {
            renderRatings && (
                <View style={RehabPageStyles.RatingContainer}>
                       <Text style={RehabPageStyles.RatingNum}>{stars}</Text>
                       
                       <AirbnbRating
                        style={{flex:1}}
                       defaultRating={stars}
                       size={10}
                       selectedColor={'#002F43'}
                       showRating={false}
                       isDisabled={true}
                       /> 

                        <Text style={{flex:1, fontSize:12, marginLeft:'3%'}}>{"(" + starNum + ")"}</Text>
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



        
      


      

   