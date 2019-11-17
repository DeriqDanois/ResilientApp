import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import {useState} from 'react'
import DetailsCardStyles from '../styles/ComponentStyles/DetailsCardStyles';
import { Rating, AirbnbRating } from 'react-native-ratings';


//  Overview tab below
function Reviews(props){


    return(
    <View style={{flex:1}}>





            <View starContainerStyle={DetailsCardStyles.StarBox}>

            <Text style={{textAlign:'center', marginTop:"5%", marginBottom:'5%'}}>Rate and Review</Text>
  
                    {/* Ratings */}
                    <AirbnbRating
                    count={5}
                    showRating={false}
                    defaultRating={props.Ratings}
                    size={25}
                    selectedColor={'#002F43'}
                    
                    /> 

            </View>   
                                
                   {/* Seperation Line */}
               <View style={{marginTop:'5%',  borderBottomColor:'grey', borderBottomWidth:0.7}}></View>
               {/* Long Description Below */}
               <Text style={{textAlign:'center', margin:20, letterSpacing:1, }}>(No Comments)</Text>
         </View>              
 


    )
   }



   export default Reviews;