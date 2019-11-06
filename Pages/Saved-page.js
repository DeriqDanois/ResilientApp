
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import  SavedPlaces from '../styles/SavedPlacesStyle';
import NavBar from '../comps/NavBar';
import {KeyboardAvoidingView} from 'react-native';
import DetailsCard from '../comps/DetailsCard';





const SavedPage = props => {
    const [login, checkLogin] = useState(false);

    const contactName = "Sved Page";


    
    return (
  
     
        <SafeAreaView style={SavedPlaces.containertwo}>
        
            <View style={{flex: 1, width:'100%'}}>

                <View>
                    
                </View>

       
                <View style={{width:'100%', height:100, backgroundColor:'green'}}>
            
                    <TouchableOpacity
                        style={{width:100, height:100}}
                        onPress={()=>{
                            props. navigation.navigate('Search')
                        
                    }}>
                    <Image 
                        source={{uri: "https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png"}}
                        style={{height:"50%", width:'50%', margin: 20}} />
                    </TouchableOpacity>

                    <Text style={{flex:1}}>Your emergency contacts</Text>

                    

                </View>  

                   
                    
                <ScrollView 
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={SavedPlaces.scrollView}>


                        <View style={{margin:50, alignSelf:'center', justifyContent:'center', width:300, height:300, borderRadius:200, backgroundColor:"red"}}>
                            <Text style={SavedPlaces.CircleInnerText}>{contactName}</Text>
                            </View>  

                        <View style={{margin:50, alignSelf:'center', justifyContent:'center', width:300, height:300, borderRadius:200, backgroundColor:"red"}}>
                            <Text style={SavedPlaces.CircleInnerText}>{contactName}</Text>
                            </View>  

                
               
            
                </ScrollView>

            </View>
            
   
       
      </SafeAreaView>

    )
}


export default SavedPage;



        
      


      

   