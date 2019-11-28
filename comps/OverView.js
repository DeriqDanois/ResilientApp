import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useState} from 'react'
import DetailsCardStyles from '../styles/ComponentStyles/DetailsCardStyles';
import { Rating, AirbnbRating } from 'react-native-ratings';
import * as icon from './Svgs'


//  Overview tab below
function OverView(props){


    return(

        <View style={{flex: 1, marginLeft:'3%', marginRight:'3%'}}>
                   <View style={{ marginLeft:"5%", flex: 1, flexDirection:'row', marginTop:30}}>

    <Text style={{flex:0.21, fontSize:16, justifyContent:'center'}}>{"(" + props.ratingNum + ")"}</Text>
                       
                       <AirbnbRating
                        style={{flex:1}}
                       count={5} 
                       defaultRating={props.starsCount}
                       size={18}
                       selectedColor={'#002F43'}
                       showRating={false}
                       isDisabled={true}
                       /> 

                        <Text style={{flex:1, fontSize:15, marginLeft:'3%'}}>{props.reviewNum}</Text>
                   </View>
                     
                           <Text style={DetailsCardStyles.DirectionText}>{props.Direction}</Text>
                      <View style={{ marginLeft:'3%', flex:1, flexDirection:'row', alignItems:'center', marginTop:'5%'}}>

                        <View style={{flex:1, flexDirection:'row'}}>

                           <Image
                           style={{height:25, width:25, margin:'3%'}}
                           source={{uri:"http://res.publicdomainfiles.com/pdf_view/134/13971223825469.png"}} />
                           
                            <Text style={DetailsCardStyles.rowText}>{props.PhoneNumber}</Text>

                        </View>
                       
                           <TouchableOpacity style={{ flex:0.65,  alignContent:'center', justifyContent:'center', height:"110%", borderRadius:5, backgroundColor:'#568C9E'}}
                           onPress={()=>{
                               alert(props.WebsiteLink)
                           }}>
                               <Text style={DetailsCardStyles.ButtonText}>Visit Website</Text>
                           </TouchableOpacity>

                   </View>
                   {/* Seperation Line */}
                <View style={{marginTop:'5%',  borderBottomColor:'grey', borderBottomWidth:0.7}}></View>
               {/* Long Description Below */}
               <Text style={{margin:20, letterSpacing:1, lineHeight:20 }}>{props.LongDescription}</Text>
         </View>         
      
    )
   }



   export default OverView;