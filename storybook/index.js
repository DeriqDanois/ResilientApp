import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ResilientStories from '../comps/ResilientStories'

//import './rn-addons';

// import stories
 // require('./stories');
 require('../comps/ResilientStories');


// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
//AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);
const AppNavigator = createStackNavigator({ 
    Login: { screen: StorybookUIRoot },

    }
);
  
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;