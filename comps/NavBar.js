import React, {useState} from 'react';
import { TouchableOpacity, View, Text, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import NavBarStyles from '../styles/ComponentStyles/NavBarStyles';
import * as icon from '../comps/Svgs'




const NavBar = props => {

    const left = 0.25;
    const SosBottom = Dimensions.get("window").height/-3.15;
    const SosButtonDim = Dimensions.get("window").width/4.81;
    const tabBarWidth = Dimensions.get("window").width/0.97;
    const tabBarHieght = Dimensions.get("window").height/9.1;
    const tabBarTop = Dimensions.get("window").height/4.2;
    const exploreLeft = Dimensions.get("window").width/7.5;
    const exploreTop = Dimensions.get("window").height/6.78;
    const DiscussionLeft = Dimensions.get("window").width/1.35; 
    const DiscussionTop = Dimensions.get("window").height/27;

    const [searchicon, setSearchIcon] = useState(require('../Assets/PNGs/ExploreTabBarIcon_Active.png'))
    const [searchdiscussion, setDiscussion] = useState(require('../Assets/PNGs/DisTabBarIcon_Active.png'))


    return (


        <View style={NavBarStyles.container}>


            {/* Sos Button  */}

            {/* <Image source={searchdiscussion}></Image>
            <Image source={searchicon}></Image> */}

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
            <icon.DiscussionIconInActive  left={DiscussionLeft} top={DiscussionTop} fill={'white'} height={tabBarHieght} width={tabBarWidth} 
                 onPress={()=>{
                    props.navigation.navigate('DiscussionPage')}} />
       


<View style={{width:'100%', height:10, zIndex:-1, backgroundColor:'white'}}>

</View>

        </View>




    )

}

export default withNavigation(NavBar);