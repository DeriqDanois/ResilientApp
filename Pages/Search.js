import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import SearchStyles from '../styles/SearchStyles';
import NavBar from '../comps/NavBar';
import {KeyboardAvoidingView} from 'react-native';








const Search = props => {
    const [search, setSearch] = useState(false);


    const name = "Name";
    const title = "Header";


    return (


 <KeyboardAvoidingView style={{flex:1}}  enabled>
 

   <SafeAreaView style={SearchStyles.containertwo}>
    <ScrollView 
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={SearchStyles.scrollView}>
   
        <View style={SearchStyles.HeaderContainer}>
            <TextInput style={SearchStyles.inputStyle}>
                <Text style={SearchStyles.inputTextHeader}><Image 
             style={SearchStyles.searchIcon}
             source={{uri: "https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"}}>
             </Image>Search</Text>
            </TextInput>
         </View>

        {/* The image text and short description from google places api will go into these below */}
            
        {/* Header #1 */}
         <Text style={SearchStyles.HeaderText}>{title}</Text>  
         {/* Row One Results */}
         <View style={{flex:1, flexDirection:"row"}}>
            
             <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}>
          
         <TouchableOpacity 
          onPress= {() => 
            props. navigation.navigate('RehabPage')}>
            <View style={SearchStyles.Results}>
                <Image style={SearchStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>
                <Text style={SearchStyles.inputTextHeader}>{name}</Text>
            </View>
            </TouchableOpacity>

            <View style={SearchStyles.Results}>
                <Image style={SearchStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>
                <Text style={SearchStyles.inputTextHeader}>{name}</Text>
            </View>

            <View style={SearchStyles.Results}>
                <Image style={SearchStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>
                <Text style={SearchStyles.inputTextHeader}>{name}</Text>
            </View>
           
            </ScrollView>
         
         
         </View>
        
        {/* Header #2 */}
        <Text style={SearchStyles.HeaderText}>{title}</Text>
        {/* Row Two Results */}
        <View style={{flex:1, flexDirection:"row"}}>   
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
            
                <View style={SearchStyles.Results}>
                    <Image style={SearchStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>
                    <Text style={SearchStyles.inputTextHeader}>{name}</Text>
                </View>

                <View style={SearchStyles.Results}>
                    <Image style={SearchStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>
                    <Text style={SearchStyles.inputTextHeader}>{name}</Text>
                </View>

                <View style={SearchStyles.Results}>
                    <Image style={SearchStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>
                    <Text style={SearchStyles.inputTextHeader}>{name}</Text>
                </View>

            </ScrollView>
        </View>


        {/* Header #3*/}
        <Text style={SearchStyles.HeaderText}>{title}</Text>
        {/* Row Three Results */}
        <View style={{flex:1, flexDirection:"row"}}>

        <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}>
          
          <View style={SearchStyles.Results}>
                <Image style={SearchStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>
                <Text style={SearchStyles.inputTextHeader}>{name}</Text>
            </View>

          <View style={SearchStyles.Results}>
                <Image style={SearchStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>
                <Text style={SearchStyles.inputTextHeader}>{name}</Text>
            </View>

          <View style={SearchStyles.Results}>
                <Image style={SearchStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>
                <Text style={SearchStyles.inputTextHeader}>{name}</Text>
            </View>
          <View style={SearchStyles.Results}>
                <Image style={SearchStyles.ImageStyles} source={{uri: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200'}}></Image>
                <Text style={SearchStyles.inputTextHeader}>{name}</Text>
            </View>
          
            </ScrollView>
        </View>
 
   </ScrollView>
     < NavBar />
   </SafeAreaView>
   </KeyboardAvoidingView>
   
    )
}

export default Search;



        
      


      

   