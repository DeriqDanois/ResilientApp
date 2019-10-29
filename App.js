import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'



// Importing the screens
import Login from './comps/Login';
import SignUp from './comps/SignUp';
import Search from './comps/Search';
import AddEmergencyContact from './comps/AddEmergencyContact';
import RehabPage from './comps/RehabPage'


const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    AddEmergencyContact: { screen: AddEmergencyContact },
    Search: { screen:Search },
    RehabPage: { screen:RehabPage },
    
  },
  {
    //Initial Screen
    headerMode: 'none',
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContainer />
  )
  }



export default App;