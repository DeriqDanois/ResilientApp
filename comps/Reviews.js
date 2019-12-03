import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {useState, useEffect} from 'react'
import DetailsCardStyles from '../styles/ComponentStyles/DetailsCardStyles';
import { withNavigation } from 'react-navigation';
import { Rating, AirbnbRating } from 'react-native-ratings';
import myaxios from '../axios';
import { object } from 'prop-types';




//  Overview tab below


function Reviews({name, ...props}){
var reviewheight = Dimensions.get('window').height/4.2;
const [reviews, setReviews] = useState([]);

    const getReviews = async () => {
        var data = await myaxios('review_read', {});
        var filt = data.filter((o,i) => {
                return (o.facility === name);
            })
       setReviews(filt)
  
    }

    // Handle    
    useEffect(() => {
    getReviews();
   
   
    [5000]});
    


    return(
    <View style={{flex:1}}>





            <View starContainerStyle={DetailsCardStyles.StarBox}>
                    <Text style={{display:'none'}}>{props.name}</Text>

            <Text style={{textAlign:'center', marginTop:"5%", marginBottom:'5%', fontWeight:'bold', color:'#568c9e'}}>Rate and Review</Text>
  
                    {/* Ratings */}
                 
                        <AirbnbRating
                        count={5}
                        showRating={false}
                        defaultRating={props.Ratings}
                        size={25}
                        selectedColor={'#568c9e'}
                        onFinishRating={(t) =>{
                                props. navigation.navigate("LeaveReview", {
                                        name:name,
                                });
                              
                         
                                
                        }}/>
                        
              
         

                    

            </View>   
        
                             
                   {/* Seperation Line */}
               <View style={{marginTop:'5%',  borderBottomColor:'grey', borderBottomWidth:0.7}}></View>
               {/* Long Description Below */}


            {
            reviews.map((obj, i) => (
                <View key={i} style={{
                        flex:1,
                        marginBottom:40,
                        flexDirection:'column',
                        justifyContent:'center', 
                        marginTop:reviewheight/20
                        }}>

                        <View style={{ flex:1, margin:40, height:reviewheight, }}>

                        <View style={{flexDirection:'row', flex:1}}>

                                <Image 
                                style={{flex:1, resizeMode:'contain',marginRight:30, height:60, width:60}}
                                source={obj.avatar}
                                >
                                </Image>

                <Text style={{flex:3,}}>{obj.name}</Text>
                        </View>

                        <View style={{justifyContent:'center', flex:1, flexDirection:'row'}}>

                                <AirbnbRating
                                count={5}
                                showRating={false}
                                defaultRating={obj.stars}
                                size={15}
                                selectedColor={'#568c9e'}
                                />

                                <View style={{ flex:1,  height:"100%", justifyContent:'center'}}>
                                   <Text style={{ fontSize:10, justifyContent:'center', marginLeft:20}}>{obj.time}}</Text>
                                </View>       
                        </View>

                        <View style={{ flex:1, flexDirection:'column'}}>
                                <Text style={{flex:1, letterSpacing:0.5, fontSize:15, fontWeight:'bold'}}>{obj.title}</Text>
                                <Text style={{flex:1, letterSpacing:0.6}}>{obj.message}</Text>
                         </View>
                        </View>
                            <View style={{   marginBottom:reviewheight/20, borderBottomWidth:1, borderBottomColor:'#DADADA', flex:1,}}>
                        </View>
                </View>
            ))
            }

       
         </View>              
 


    )
   }



   export default withNavigation(Reviews);