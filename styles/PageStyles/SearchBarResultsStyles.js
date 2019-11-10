import { StyleSheet } from 'react-native';


const SearchBarResultsStyles = StyleSheet.create({

    HeaderText: {
        color: "#568C9E",
        fontSize: 24,
        textAlign: 'left',
        width: '70%',
        marginTop: 18,
    },
 
   
    containertwo: {
        flex: 1,
        },


    scrollView: {
         marginHorizontal: 15,
    },


  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 10,
  },

    title: {
        fontSize: 23,
    },
    description: {
        fontSize: 14,
    },


})

export default SearchBarResultsStyles;

