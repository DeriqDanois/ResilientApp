import React from 'react';
import { TouchableOpacity, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { withNavigation } from 'react-navigation';
import NavBarStyles from '../styles/ComponentStyles/NavBarStyles';
import * as icon from '../comps/Svgs'




const NavBar = props => {

    const left = 0;
    const right = 0;
    const SosBottom = 35;
    const SosButtonDim = 97;
    const tabBarWidth = 396;
    const tabBarHieght = 79;
    const tabBarTop = -100;
    const exploreLeft = 50;
    const exploreTop = -167;
    const DiscussionLeft = 278;
    const DiscussionTop = -246;


    return (


        <View style={NavBarStyles.container}>



            {/* Sos Button  */}

             <icon.TabBarSosButton bottom={SosBottom} fill={'red'} height={SosButtonDim} width={SosButtonDim} 
                 onPress= {() => 
                    props.navigation.navigate('SosPage')}/>
          

           {/* Tab Bar */}
            <icon.TabBar left={left} top={tabBarTop} fill={'white'} height={tabBarHieght} width={tabBarWidth} />
          
           {/* * Explore Icon  */}        
            <icon.ExploreIconInActive left={exploreLeft} top={exploreTop} fill={'white'} height={tabBarHieght} width={tabBarWidth} 
                onPress={()=>{
                     props.navigation.navigate('Search')}}/>

         

           {/* Discussions Icon  */}
            <icon.DiscussionIconInActive left={DiscussionLeft} top={DiscussionTop} fill={'white'} height={tabBarHieght} width={tabBarWidth} 
                 onPress={()=>{
                    props.navigation.navigate('DiscussionPage')}} />
       




        </View>




    )

}

export default withNavigation(NavBar);