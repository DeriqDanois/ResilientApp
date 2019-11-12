import { StyleSheet } from 'react-native';



const SearchBarStyles = StyleSheet.create({

  
    SearchInputStyle: {
        alignSelf: "center",
        justifyContent: "center",
        flex:1,  
        borderRadius: 20,
        textAlign:'center',
        fontSize:16,
    },

    HeaderContainer: {
        marginLeft:20,
        marginRight:20,
        marginTop: 30,
        marginBottom: 25,
        height:"7.5%",   
        borderWidth:4,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 8,
        flexDirection:'row', 
      
    },

    Logo: {
        position:'absolute',
        alignSelf:'center',
        top:'25%',
    },



    HamburgerIcon: {
        margin:3,
        flex:1,
        borderRadius:30,
        },

          

})

export default SearchBarStyles;

