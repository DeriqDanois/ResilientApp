import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList, Button } from 'react-native';
import SearchBarResultsStyles from '../styles/PageStyles/SearchBarResultsStyles';
import { KeyboardAvoidingView } from 'react-native';
import SearchBar from '../comps/SearchBar'
import BackButtonHeader from '../comps/BackButtonHeader'

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };



const SearchBarResults = ({ }) => {


  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];


  return (


    <KeyboardAvoidingView style={{ flex: 1 }} enabled>
      <SafeAreaView style={SearchBarResultsStyles.containertwo}>

        <BackButtonHeader
          border={0}
          height={100}
          Header={""} 
         />

        <SearchBar />
        {/* Results */}

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id} />

      </SafeAreaView>
    </KeyboardAvoidingView>

  )
}

function Item({ title }) {

  return (
    <TouchableOpacity>
      <View style={SearchBarResultsStyles.item}>
        <Text style={SearchBarResultsStyles.title}>{title}</Text>
        <Text style={SearchBarResultsStyles.description}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}


export default SearchBarResults;








