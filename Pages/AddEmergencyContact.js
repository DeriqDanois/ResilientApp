import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import EmergencyContactStyles from '../styles/PageStyles/AddEmergencyStyles';








const AddEmergencyContact = props => {
    const [addContact, setContactAdded] = useState(false);


    return (





        
     <View style={EmergencyContactStyles.container}> 
           
        <View style={EmergencyContactStyles.HeaderContainer}>

            <Text style={EmergencyContactStyles.HeaderText}>Add a Emergency Contact</Text>
      
            <Text style={EmergencyContactStyles.HeaderTextSmall}>Resilient Helps send alerts to your friends
            or loved ones in case of an emergency
            All information is confidential
            You can always add or edit the contact information later
            </Text>

        </View>


  

            <View style={{flex:1}}>   
                <Text style={EmergencyContactStyles.inputTextHeader}>Name</Text>
                    <TextInput style={EmergencyContactStyles.inputStyle}></TextInput>
            </View>  
                
                
            <View style={{flex:1}}>   
                <Text style={EmergencyContactStyles.inputTextHeader}>Phone Number</Text>
                    <TextInput style={EmergencyContactStyles.inputStyle}></TextInput>
            </View>  
                
            <View style={{flex:1}}>   
                <Text style={EmergencyContactStyles.inputTextHeader}>Email (Optional)</Text>
                    <TextInput style={EmergencyContactStyles.inputStyle}></TextInput>
            </View>  

            <Text> And / or </Text>
                
            <View style={{flex:1}}>   
            
                    <TextInput style={EmergencyContactStyles.RecommendedInput}>
                        <Text style={EmergencyContactStyles.RecommendedInputText}>
                               Add 911 as Contact
                             (Recommended)</Text>
                    </TextInput>
            </View>  


       <View style={{flex:1}}>   
                  
                  <TouchableOpacity
                    style={EmergencyContactStyles.buttons}
                    onPress= {() => 
                    props. navigation.navigate('Search')}>
                    <Text style={EmergencyContactStyles.buttonsText}>Add Emergency Contact</Text>  
                  </TouchableOpacity>
                
              </View>
        </View>
     

   
   
   
    )
}


export default AddEmergencyContact;



        
      


      

   