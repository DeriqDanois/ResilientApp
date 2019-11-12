import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import  SavedDiscussionStyles from '../styles/PageStyles/SavedDiscussionStyles';
import NavBar from '../comps/NavBar';
import {KeyboardAvoidingView} from 'react-native';
import BackButtonHeader from '../comps/BackButtonHeader'





const SavedDiscussions = props => {
    const [login, checkLogin] = useState(false);

    const contactName = "Saved Discussion";


    
    return (
  
     
        <SafeAreaView style={SavedDiscussionStyles.containertwo}>

            <BackButtonHeader 
            border={1}
            height={100}
            Header={"Saved Discussions"}
            />

        
            <View style={{flex: 1, width:'100%'}}>

       
                   
                    
                <ScrollView 
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={SavedDiscussionStyles.scrollView}>


                        <View style={{margin:50, alignSelf:'center', justifyContent:'center', width:300, height:300, borderRadius:200, backgroundColor:"green"}}>
                            <Text style={SavedDiscussionStyles.CircleInnerText}>{contactName}</Text>
                            </View>  

                        <View style={{margin:50, alignSelf:'center', justifyContent:'center', width:300, height:300, borderRadius:200, backgroundColor:"green"}}>
                            <Text style={SavedDiscussionStyles.CircleInnerText}>{contactName}</Text>
                            </View>  

                
               
            
                </ScrollView>

            </View>
            
   
       
      </SafeAreaView>

    )
}


export default SavedDiscussions



        
      


      

   



        
      


      

   