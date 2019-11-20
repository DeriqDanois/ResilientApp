import { StyleSheet } from 'react-native';



const SearchBarStyles = StyleSheet.create({

  
    SearchInputStyle: {
        alignSelf: "center",
        justifyContent: "center",
        flex:1,  
        borderRadius: 20,
        textAlign:'center',
        fontSize:16,
        shadowOffset:{  width: 3,  height:3,  },
        shadowColor: 'black',
        shadowOpacity: 0.2,
     
        
    },

    HeaderContainer: {
        margin:25,
        height:"7%",   
        backgroundColor:'white',
        borderRadius: 8,
        flexDirection:'row', 
        shadowOffset:{  width: 0,  height:0},
        shadowColor: 'black',
        shadowRadius:7,
        shadowOpacity: 0.2,
      
    },

    Logo: {
        position:'absolute',
        alignSelf:'center',
        top:'25%',
    },



    HamburgerIcon: {
        margin:"2%",
        flex:1,
        borderRadius:30,
        },

          

})

export default SearchBarStyles;

