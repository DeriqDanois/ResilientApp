import React from 'react';
import { storiesOf } from '@storybook/react-native';

import RehabResultsComponent from './RehabResultsComponent'
import SavedRehabs from './SavedRehabs'
import NavBar from './NavBar'
import DetailsCard from './DetailsCard'
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import AddEmergencyContact from '../Pages/AddEmergencyContact';
import Search from '../Pages/Search';
import RehabPage from '../Pages/RehabPage'



storiesOf("Cards", module)
    .add("DetailsCard", ()=>{
        return <DetailsCard/>
    }),


storiesOf("Navigation Components", module)
    .add("NavBar", ()=>{
        return <NavBar/>
    })


storiesOf("Rehab results boxes", module)
    .add("Saved Rehabs", ()=>{
        return <SavedRehabs/>
    })
    .add("RehabResults", ()=>{
        return <RehabResultsComponent />
    }),



storiesOf("Pages", module)
    .add("Login", ()=>{
        return <Login/>
    })
    .add("SignUp", ()=>{
        return <SignUp/>
    })
    .add("SignUp", ()=>{
        return <AddEmergencyContact/>
    })
    .add("SignUp", ()=>{
        return <Search/>
    })
    .add("SignUp", ()=>{
        return <RehabPage/>
    })
   


