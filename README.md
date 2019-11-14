# To Install

Added android and ios folder here with the proper git ignore to avoid anymore mishaps.

All you need to do is first `$ npm install`

Then do `$ cd ios & pod install` if you're using ios simulator

Then do `$ npx react-native link` if you're using the android simulator

After all of the above, you should be ready to run the application.

# ResilientApp

Using Story book 

in App.js:
Comment out export default app and replace it with export default from './storybook';





Using Svgs 

to import all svgs from Svgs file link it to your page
import * as icon from '../comps/Svgs';


to use Svgs in page format them like so:
<icon.LogoAndHexagon fill={'white'} height={iconDim} width={iconDim} />

LogoAndHexagon represents the specific svg I'm importing refer to ../comps/Svgs for more insight 
