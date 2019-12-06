import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import NavBar from '../comps/NavBar';
import BackButtonHeader from '../comps/BackButtonHeader';
import DiscussionCard from '../comps/DiscussionCard';
import SearchBarStyles from '../styles/ComponentStyles/SearchBarStyles';
import SearchBar from '../comps/SearchBar';
import * as icon from '../comps/Svgs'
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import axios from 'axios';
import myaxios from '../axios';


const DiscussionPage = props => {
    const [discussion, setDiscussion] = useState([]);
    const [input, setInput] = useState('');


    const name = "Name";
    const title = "Header";


    const getDiscussion = async () => {
        var data = await myaxios('discussion_read', {});
        console.log(data)
        // Injection site below
        var results = data.filter((o,i) => {
            if (!!~o.discussiontitle.indexOf(input) || !!~o.discussiontitle.indexOf(input)){
              return !!~o.discussiontitle.indexOf(input) || !!~o.discussiontitle.indexOf(input);    
            } else {
                return o
            }
          }); 
 
        setDiscussion(results);
    }

    // Handle 
    useEffect(() => {
            getDiscussion();
 
    }, []);



    return (


        <SafeAreaView style={{flex:1}}>

            <BackButtonHeader
                borderBottomColor={'rgba(52, 52, 52, 0.1)'}
                height={100}
                border={1}
                Header={"Discussions"}
                renderBookmark={true}
            />

            {/* Search Bar Begin */}
          <View style={SearchBarStyles.HeaderContainer}>

                <View
                style={{
                    flex:1, 
                    justifyContent:'center'}}
                onPress={()=>{
                    props.navigation.navigate("SearchBarResults")
                }}>

                <Image
                style={SearchBarStyles.SearchIcon}
                source={require('../Assets/PNGs/greySearchIcon.png')}
                />


                <TextInput
                    placeholder={"Click To Type"}
                    onChangeText={(text) => { 
                        if (text.length >= 0){
                        setInput(text)
                          getDiscussion();
                        }
                      
                        //  console.log(input)
                      }}
                    style={SearchBarStyles.SearchInputStyle}>
                </TextInput>

                </View>

                <TouchableOpacity style={{flex:0.30}}
                    onPress={() => {
                        props.navigation.dispatch(DrawerActions.openDrawer());
                    }}>
                    {/* Hamburger  */}
                    <icon.HamBurgerIcon  width={"100%"} height={"100%"} />

                </TouchableOpacity>

            </View>

            {/* Searchbar End */}
            
            
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={{
            
                    
                }}>

                <View style={{marginBottom:Dimensions.get('window').height/10}}>

                    {/* <DiscussionCard 
                    renderBookmark={false}
                    DiscussionTitle={"Taken off pain meds after 10 years because people are..."}
                    upVoteNum={"12"}
                    answerNum={"2"}
                    timePosted={"2 mins ago"}
                    avatarImg={require('../Assets/avatars/PNGs/Girl3-3.png')}
                    /> */}
                    {
                discussion.map((obj, i) => (
                    <DiscussionCard 
                    key={i}
                    renderBookmark={false}
                    useravatar={obj.useravatar}
                    {...obj}
                    />
                ))
                }
                   
                
                </View>


            </ScrollView>
            < NavBar />
        </SafeAreaView>

    )
}

export default DiscussionPage;









