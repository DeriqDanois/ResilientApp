import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {useState} from 'react'
import DetailsCardStyles from '../styles/DetailsCardStyles';
import { Rating, AirbnbRating } from 'react-native-ratings';




function DetailsCard(){

    const [overview, SetOverView] = useState(true)
    const [Facilities, SetFacilities] = useState(true)
    const [reviews, SetReviews] = useState(true)


    return(


    
        <View style={DetailsCardStyles.SlidableCard}>
            <View style={{flex:1}}>
                <View style={{flex: 0.75}}></View>
                    <View style={{flex: 0.25}}>
                        
                        <View style={{flex:1, flexDirection:"row",  alignItems:'center', justifyContent:'center'}}>
                       
                        <Text style={{flex:1, textAlign:'center'}}
                        onPress={()=>{
                            alert("OverView")
                        }}>OverView</Text>
                        
                        <Text style={{flex:1, textAlign:'center'}}
                         onPress={()=>{
                            alert("Facility")
                        }}>Facility</Text>

                        <Text style={{flex:1, textAlign:'center'}}
                         onPress={()=>{
                            alert("Reviews")
                        }}>Reviews</Text>

                        </View>
                    </View>

             <View style={{flex: 3}}>
                <View style={DetailsCardStyles.BodyTextContainer}> 
                    <View starContainerStyle={DetailsCardStyles.StarBox}>

                    
                        <Text style={{flex:1, flexDirection:'row'}}>4.0</Text>

                        <AirbnbRating
                        count={5}
                        reviews={["", "", "", "", ""]}
                        defaultRating={4}
                        size={18}
                        selectedColor={'#002F43'}
                        />


                    </View>
                                
                        <Text style={DetailsCardStyles.BodyText}>1472 KingGeorge </Text>
                        <Text style={DetailsCardStyles.BodyText}>Phone: 254-5560-909 </Text>

                </View>
              </View>
            </View>
          </View>

 
    )
    
}

export default DetailsCard