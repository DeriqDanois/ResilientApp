import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {DrawerComponent} from './comps/Hamburger'
import {View, Image} from 'react-native'


import React from 'react';

// Importing the screens
import Login from './Pages/Login';
import Search from './Pages/Search';
import AddEmergencyContact from './Pages/AddEmergencyContact';
import RehabPage from './Pages/RehabPage'
import DiscussionPage from './Pages/DiscussionPage'
import DiscussionTopic from './Pages/DiscussionTopic'
import SosPage from './Pages/SosPage';
import SavedRehabsPage from './Pages/SavedRehabsPage';
import SavedDiscussions from './Pages/SavedDiscussionPage';
import ProfilePage from './Pages/ProfilePage'
import EditEmergency from './Pages/EditEmergency'
import LeaveReview from './Pages/LeaveReviewPage'
import OverView from './comps/OverView'
import SearchBarResults from './Pages/SearchBarResults'


const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    AddEmergencyContact: { screen: AddEmergencyContact },
    Search: { screen:Search },
    RehabPage: { screen:RehabPage },
    SavedRehabsPage: { screen:SavedRehabsPage },
    DiscussionTopic: { screen:DiscussionTopic },
    DiscussionPage: { screen:DiscussionPage },
    SavedDiscussions: { screen:SavedDiscussions },
    SosPage: { screen:SosPage },
    ProfilePage: { screen:ProfilePage },
    EditEmergency: { screen:EditEmergency },
    LeaveReview: {screen:LeaveReview},
    OverView: {screen:OverView},
    SearchBarResults: {screen:SearchBarResults}
   
    
  },
  {   //DrawerNavigatorConfig
    initialRouteName: 'Login',
    headerMode: 'none',
    contentOptions: {
    },
    drawerWidth: 280,
    drawerPosition: 'left',
}
);

//hamburger menu
const AppDrawerNavigator = createDrawerNavigator(

  {
    'Search Page': {
      screen: AppNavigator,
      navigationOptions: {
      }
    },
    "Emergency Contacts": {
      screen: EditEmergency,
      navigationOptions: {
      }
    },
   
    'Saved Rehabs': {
      screen: SavedRehabsPage,
      navigationOptions: {
      }
    },
    "Saved Discussion": {
      screen: SavedDiscussions,
      navigationOptions: {
      }
    },

 
    // hamburger menu
  },
  {
    drawerPosition: 'right',
    statusBarAnimation: 'slide',
    contentComponent: DrawerComponent,
   
    contentOptions: {
      activeBackgroundColor: null,
      activeTintColor: '#568C9E',

      labelStyle: {
        fontSize: 19,
        fontWeight: "500",
      },
    }
  })


const AppContainer = createAppContainer(AppDrawerNavigator);

const App = () => {
  return (
    <View style={{flex:1}}>
     <AppContainer/> 
    </View>
  )
  }



export default App;
// export default from './storybook';
