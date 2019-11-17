import React from 'react';
import { storiesOf } from '@storybook/react-native';

import RehabResultsComponent from './RehabResultsComponent'
import NavBar from './NavBar'
import DetailsCard from './DetailsCard'
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import AddEmergencyContact from '../Pages/AddEmergencyContact';
import Search from '../Pages/Search';
import RehabPage from '../Pages/RehabPage'
import ProfilePage from '../Pages/ProfilePage';
import SearchBar from './SearchBar';
import SearchBarResults from '../Pages/SearchBarResults';
import SavedRehabsPage from '../Pages/SavedRehabsPage';
import SavedDiscussionPage from '../Pages/SavedDiscussionPage';
import DiscussinPage from '../Pages/DiscussionPage';
import BackButtonHeader from '../comps/BackButtonHeader';
import SosPage from '../Pages/SosPage';





storiesOf("Cards", module)
    .add("DetailsCard", ()=>{
        return <DetailsCard/>
    }),


storiesOf("Navigation Components", module)
    .add("NavBar", ()=>{
        return <NavBar/>
    })
    .add("SearchBar", ()=>{
        return <SearchBar/>
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
    .add("SignUp", ()=>{
        return <SignUp/>
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
  
    .add("Disucussion Page", ()=>{
        return <DiscussinPage/>
    })
  
    .add("Saved Discussion Page", ()=>{
        return <SavedDiscussionPage/>
    })
    .add("Sos Page", ()=>{
        return<SosPage/>
    })
  
 

