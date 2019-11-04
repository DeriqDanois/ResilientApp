import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-stack';

import React from 'react'



// Importing the screens
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Search from './Pages/Search';
import AddEmergencyContact from './Pages/AddEmergencyContact';
import RehabPage from './Pages/RehabPage'
import Chat from './Pages/ChatPage'


const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    AddEmergencyContact: { screen: AddEmergencyContact },
    Search: { screen:Search },
    RehabPage: { screen:RehabPage },
    Chat: { screen:Chat },
    
  },
  {
    //Initial Screen
    headerMode: 'none',
    initialRouteName: 'Login'
  },
);





const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContainer />
  )
  }



export default App;