
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import  SosPageStyles from '../styles/PageStyles/SosPageStyles';
import NavBar from '../comps/NavBar';
import {KeyboardAvoidingView} from 'react-native';
import DetailsCard from '../comps/DetailsCard';





const SosPage = props => {
    const [login, checkLogin] = useState(false);

    const contactName = "Joe";


    
    return (
  
     
        <SafeAreaView style={SosPageStyles.containertwo}>
        
            <View style={{flex: 1, width:'100%'}}>
                <View style={{width:'100%', height:100, backgroundColor:'#E9FAFE',shadowOffset:{ width: 5,  height: 5,},
                shadowColor: 'black',
                shadowOpacity: 0.5}}>
            
                    <TouchableOpacity
                        style={{width:'100%', height:100, flex:1, flexDirection:'row'}}
                        onPress={()=>{
                            props. navigation.navigate('Search')
                        
                    }}>
                        <View style={{padding: 25, flex:1,flexBasis:30,flexGrow: 0, flexShrink:0 ,justifyContent:'center',alignItems:'center'}}>
                            <Image 
                                source={{uri: "https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png"}}
                                style={{height:30, width:30}} />
                        </View>
                        
                        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                            <Text style={{ }}>Your emergency contacts</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <Text style={{flex:1}}>Your emergency contacts</Text> */}

                    

                </View>  

                   
                    
                <ScrollView 
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={SosPageStyles.scrollView}>


                        <View style={{margin:50, alignSelf:'center', justifyContent:'center', width:300, height:300, borderRadius:200, backgroundColor:"blue"}}>
                            <Text style={SosPageStyles.CircleInnerText}>{contactName}</Text>
                            </View>  

                        <View style={{margin:50, alignSelf:'center', justifyContent:'center', width:300, height:300, borderRadius:200, backgroundColor:"blue"}}>
                            <Text style={SosPageStyles.CircleInnerText}>{contactName}</Text>
                            </View>  

                
               
            
                </ScrollView>

            </View>
            
   
       
      </SafeAreaView>

    )
}


export default SosPage;



        
      


      

   