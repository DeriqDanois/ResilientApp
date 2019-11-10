import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import {useState} from 'react'
import DetailsCardStyles from '../styles/ComponentStyles/DetailsCardStyles';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {KeyboardAvoidingView} from 'react-native';




function DetailsCard(){

    const [overview, SetOverView] = useState(true)
    const [Facilities, SetFacilities] = useState(true)
    const [reviews, SetReviews] = useState(true)
    
    const [underline1, SetUnderline1] = useState(!true)
    const [underline2, SetUnderline2] = useState(!true)
    const [underline3, SetUnderline3] = useState(!true)
 

    var impatient = "impatient";

    var ReviewNum = 40;
    var Direction = "1472 KingGeorge, Vancouver BC";
    var PhoneNumber = "Phone: 254-5560-909";
    var Title = "Together We Can - Addiction Recovery And Education Society";
    var LongDescription = "TLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in";
    var underlineCount = "0";

  

    return(
   
        <View style={{flex:1}}>
            <View style={{flex: 0.75}}>
                            
                <Text style={DetailsCardStyles.TypeofCenter}>{impatient}</Text>
                <Text style={DetailsCardStyles.HeaderText}>{Title}</Text>

            </View>
                
                        <View style={{  marginTop:10, flex:1, flexDirection:"row",  alignItems:'center', justifyContent:'center'}}>
                       
                        <View style={{ flex:1, borderBottomColor:'#568C9E', borderBottomWidth:underline1}}>
                            <Text style={{textAlign:'center'}}
                            onPress={()=>{
                                alert("OverView")
                                SetUnderline1(2)
                                SetUnderline2(!true)
                                SetUnderline3(!true)
                            
                            }}>OverView</Text>
                        </View>
                        
                        <View style={{ flex:1, borderBottomColor:'#568C9E', borderBottomWidth:underline2}}>
                            <Text style={{textAlign:'center'}}
                            onPress={()=>{
                                alert("OverView")
                                SetUnderline1(!true)
                                SetUnderline2(2)
                                SetUnderline3(!true)
                             
                            }}>Facility</Text>
                        </View>
                        
                        <View style={{ flex:1, borderBottomColor:'#568C9E', borderBottomWidth:underline3 ? 2 : 0}}>
                            <Text style={{textAlign:'center'}}
                            onPress={()=>{
                                alert("OverView")
                                SetUnderline3(2)
                                SetUnderline2(!true)
                                SetUnderline1(!true)
                            }}>Review</Text>
                        </View>
                      
                    </View>

             <View style={{flex: 3}}>
                <View style={DetailsCardStyles.BodyTextContainer}> 
                    <View starContainerStyle={DetailsCardStyles.StarBox}>

                        <View style={{ flex: 1, flexDirection:'row'}}>
                            <AirbnbRating
                            count={5}
                            reviews={["", "", "", "", ""]}
                            defaultRating={4}
                            size={18}
                            selectedColor={'#002F43'}
                            /> 
                        </View>
                    </View>   
             
                            <Text style={DetailsCardStyles.BodyText}>{Direction}</Text>
                        <View style={{ flex:1, flexDirection:'row', width:330}}>
                              <Text style={DetailsCardStyles.rowText}>{PhoneNumber}</Text>

                            <TouchableOpacity style={{ flex:0.4,  alignContent:'center', justifyContent:'center', height:30, borderRadius:5, backgroundColor:'#568C9E'}}>
                                <Text style={DetailsCardStyles.ButtonText}>Visit Website</Text>
                            </TouchableOpacity>

                         </View>
                        {/* Seperation Line */}
                    <View style={{marginTop:'5%',  borderBottomColor:'grey', borderBottomWidth:0.7}}></View>
                    {/* Long Description Below */}
                    <Text style={{marginTop:20, letterSpacing:1, }}>{LongDescription}</Text>
              </View>              
            </View>  
        </View>  
   

 
    )
    
}

export default DetailsCard