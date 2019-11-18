import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import ProfilePageStyles from '../styles/PageStyles/ProfilePageStyles';
import BackButtonHeader from '../comps/BackButtonHeader'






const ProfilePage = props => {
  const [signup, setSignUp] = useState(false);





  return (

    <SafeAreaView style={ProfilePageStyles.containertwo}>


      <BackButtonHeader
         borderBottomColor={'rgba(52, 52, 52, 0.1)'}
         height={100}
         border={1}
        Header={"Edit Profile"}
      />


      <View style={ProfilePageStyles.LinkContanier}>

        <View style={ProfilePageStyles.AvatarAndUserName}>


          <Image
            source={require('../Assets/avatars/PNGs/Girl1-1.png')}
            style={ProfilePageStyles.UserIcon}></Image>
          <Text style={ProfilePageStyles.UserName}>Username</Text>

        </View>

        <Text
          onPress={() => {
            alert('Choose new avatar');
          }}
          style={ProfilePageStyles.LinkText}>Choose new avatar</Text>


        <Text
          onPress={() => {
            alert('Change Username');
          }}
          style={ProfilePageStyles.LinkText}>Change Username</Text>


        <Text
          onPress={() => {
            alert('Change Username');
          }}
          style={ProfilePageStyles.LinkText}>Change Password</Text>


        <Text
          style={ProfilePageStyles.LinkBox}
          onPress={() => {
            alert('Change Username');
          }}
          style={ProfilePageStyles.DeleteText}>Delete My Account</Text>


        {/* Cussion Below */}
        <View style={{ flex: 1 }}></View>

      </View>


    </SafeAreaView>

  )

}


export default ProfilePage;









