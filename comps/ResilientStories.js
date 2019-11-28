import React from 'react';
import { storiesOf } from '@storybook/react-native';

import RehabResultsComponent from './RehabResultsComponent';
import NavBar from './NavBar';
import DetailsCard from './DetailsCard';
import DiscussionCard from './DiscussionCard';
import Login from '../Pages/Login';
import AddEmergencyContact from '../Pages/AddEmergencyContact';
import Search from '../Pages/Search';
import RehabPage from '../Pages/RehabPage'
import ProfilePage from '../Pages/ProfilePage';
import SearchBar from './SearchBar';
import SearchBarResults from '../Pages/SearchBarResults';
import SavedRehabsPage from '../Pages/SavedRehabsPage';
import SavedDiscussionPage from '../Pages/SavedDiscussionPage';
import DiscussionPage from '../Pages/DiscussionPage';
import DiscussionTopic from '../Pages/DiscussionTopic';
import BackButtonHeader from '../comps/BackButtonHeader';
import ImageSlider from '../comps/imageSlider';
import SosPage from '../Pages/SosPage';
import EditEmergency from '../Pages/EditEmergency';
import OverView from '../comps/OverView'



storiesOf("Cards", module)
    .add("DetailsCard", ()=>{
        return <DetailsCard/>
    })

    .add("ImageSlider", ()=>{
        return <ImageSlider/>
    })
  

    .add("DiscussionCard", ()=>{
        return <DiscussionCard/>
    })

storiesOf("Navigation Components", module)
    .add("NavBar", ()=>{
        return <NavBar/>
    })
    .add("SearchBar", ()=>{
        return <SearchBar/>
    })
    .add("OverView", ()=>{
        return <OverView/>
    })


// Results boxes show as empty becuase they are empty waiting to be populated by data

    .add("RehabResults", ()=>{
        return <RehabResultsComponent />
    })

    .add("Back Button header component", ()=>{
        return <BackButtonHeader/>
    })

storiesOf("Pages", module)
    .add("Login", ()=>{
        return <Login/>  
    })
    .add("AddEmergencyContact", ()=>{
        return <AddEmergencyContact/>
    })
    .add("Search", ()=>{
        return <Search/>
    })
    .add("RehabPage", ()=>{
        return <RehabPage/>
    })
    .add("ProfilePage", ()=>{
        return <ProfilePage/>
    })
    
    .add("SearchBarResults", ()=>{
        return <SearchBarResults/>
    })
    
    .add("Saved Rehabs Page", ()=>{
        return <SavedRehabsPage/>
    })
  
    .add("Discussion Page", ()=>{
        return <DiscussionPage/>
    })

    .add("Discussion Topic", ()=>{
        return <DiscussionTopic/>
    })
  
    .add("Saved Discussion Page", ()=>{
        return <SavedDiscussionPage/>
    }) 
 
    .add("Sos Page", ()=>{
        return<SosPage/>
    })
    .add("Edit Emergency contact", ()=>{
        return<EditEmergency/>
    })


