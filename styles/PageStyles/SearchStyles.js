import { StyleSheet } from 'react-native';



const SearchStyles = StyleSheet.create({

    HeaderText: {
        color: "#568C9E",
        fontSize: 24,
        textAlign: 'left',
        width: '70%',
        marginTop: 18,
    },
 
    SearchInputStyle: {
        alignSelf: "center",
        justifyContent: "center",
        flex:1,
        height:"100%",    
        height:50,
        borderRadius: 20,
    },


    HeaderContainer: {
        marginTop: 30,
        marginBottom: 25,
        borderColor: "#568C9E",
        height:60,
        borderWidth: 1,
        borderRadius: 20,
        flex:1,
        flexDirection:'row', 
    },
   
    containertwo: {
        flex: 1,
        },


    scrollView: {
         marginHorizontal: 15,
    
    },


    searchIcon: {
        marginLeft:5,
        width:55,
        height:55,
        flex:1,
        alignSelf:'center',
        justifyContent:'center'
    },

    HamburgerIcon: {
        margin:11,
        width:55,
        height:30,
        flex:1,
        },

          

})

export default SearchStyles;

