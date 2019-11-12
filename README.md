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
