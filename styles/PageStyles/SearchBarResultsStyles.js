import { StyleSheet, Dimensions } from 'react-native';


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
        fontSize: 22,
        margin: 5
    },
    description: {
        fontSize: 16,
        margin: 5
    },

    SearchIcon: {
        width: "8%",
        height: "44%",
        position:"absolute",
        alignSelf:'center',
        marginLeft:Dimensions.get("window").width/30,
             resizeMode:"contain"
    },


    SearchInputStyle: {
        flex:2,  
        borderRadius: 20,
        textAlign:'left',
        paddingLeft:60,
        fontSize:18,
        shadowOffset:{  width: 3,  height:3,  },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        
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




})

export default SearchBarResultsStyles;

