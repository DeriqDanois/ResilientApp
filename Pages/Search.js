import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import SearchStyles from '../styles/PageStyles/SearchStyles';
import NavBar from '../comps/NavBar';
import {KeyboardAvoidingView} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import RehabResultsComponent from '../comps/RehabResultsComponent'



const Search = props => {

    return (
        
 <KeyboardAvoidingView style={{flex:1}}  enabled>

   <SafeAreaView style={SearchStyles.containertwo}>

    <ScrollView 
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={SearchStyles.scrollView}>
        
   
     <View style={SearchStyles.HeaderContainer}>
        
            <TextInput style={SearchStyles.SearchInputStyle}> </TextInput>

        {/* Hamburger */}
            <TouchableOpacity
            onPress={()=>{
                props.navigation.dispatch(DrawerActions.openDrawer());
            }}>
                <Image 
                    style={SearchStyles.HamburgerIcon}
                    source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"}}>
                </Image>
            </TouchableOpacity>
         </View>
        {/* hAMBURGER end */}
       


        {/* The image text and short description from google places api will go into these below */}
            
        {/* Header #1 */}
         <Text style={SearchStyles.HeaderText}>Safe Injection Sight</Text>  
         {/* Row One Results */}
         <View style={{flex:1, flexDirection:"row"}}>
            
             <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}>

            <RehabResultsComponent />
        
            </ScrollView>
         </View>
        
        {/* Header #2 */}
        <Text style={SearchStyles.HeaderText}>Detox Center</Text>
        {/* Row Two Results */}
        <View style={{flex:1, flexDirection:"row"}}>   
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>

                <RehabResultsComponent />
                
            </ScrollView>
        </View>

        {/* Header #3*/}
            <Text style={SearchStyles.HeaderText}> OutPatient Rehab</Text>
            {/* Row Three Results */}
        <View style={{flex:1, flexDirection:"row"}}>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>

                <RehabResultsComponent />
          
            </ScrollView>
        </View>

    
   </ScrollView>
     < NavBar />
   </SafeAreaView>
   </KeyboardAvoidingView>
   
    )
}

export default Search;



        
      


      

   