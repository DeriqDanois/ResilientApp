import { StyleSheet, Dimensions } from 'react-native';



const SearchBarStyles = StyleSheet.create({

  
    SearchInputStyle: {
        flex:1,  
        borderRadius: 20,
        textAlign:'left',
        paddingLeft:60,
        fontSize:18,
        shadowOffset:{  width: 3,  height:3,  },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent:'center'
        
    },

    HeaderContainer: {
        margin:Dimensions.get("window").width/10,
        height:Dimensions.get("window").height/14,
        backgroundColor:'white',
        borderRadius: 8,
        flexDirection:'row', 
        shadowOffset:{  width: 0,  height:0},
        shadowColor: 'black',
        shadowRadius:7,
        shadowOpacity: 0.1,
      
    },

    SearchIcon: {
        width: "9%",
        height: "45%",
        position:"absolute",
        justifyContent:'center',
        marginLeft:Dimensions.get("window").width/20,
        resizeMode:"contain"
    },



    HamburgerIcon: {
        margin:Dimensions.get('window').width/70,
        resizeMode:'contain'
        
        },
          

})

export default SearchBarStyles;

