import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import DiscussionStyles from '../styles/PageStyles/DiscussionStyles';
import NavBar from '../comps/NavBar';



const Chat = props => {
    const [discussion, setDiscussion] = useState(false);


    const name = "Name";
    const title = "Header";


    return (


    <SafeAreaView style={DiscussionStyles.containertwo}>
        <ScrollView 
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={DiscussionStyles.scrollView}>

    
         <View style={{flex:1, marginTop:10, marginBottom:10, alignContent:'center', justifyContent:'center', borderWidth:2, borderColor:'black', borderRadius: 10}}>
             <View style={{flex:1, flexDirection:'row'}}>
             <Image
             source={{uri: 'http://www.themes-lab.com/traqs/assets/global/images/avatars/avatar1_big.png'}}
             style={{flex:1, width:70, height:70, margin:10}}></Image>
             <Text style={{flex:4, fontSize:13, marginTop:10}}>Q: How Long does it take for someone to OD</Text>
             </View>
         </View>
      
            
        </ScrollView>
        < NavBar />
    </SafeAreaView>

    )
}

export default Chat;



        
      


      

   