import { StyleSheet, Dimensions } from 'react-native';



const SearchStyles = StyleSheet.create({

    HeaderText: {
        color: "black",
        fontSize: Dimensions.get('window').width/18,
        textAlign: 'left',
        width: '70%',
        marginTop: 18,
        fontWeight: "500",
        marginBottom: "2%",
        marginLeft:"3%",
        fontWeight:'700'
    },


    containertwo: {
        flex: 1,
        },


    scrollView: {
         marginHorizontal: 15,
         marginBottom:60
    
    },



})

export default SearchStyles;

