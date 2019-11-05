import { StyleSheet } from 'react-native';



const SearchStyles = StyleSheet.create({

    HeaderText: {
        color: "#568C9E",
        fontSize: 24,
        textAlign: 'left',
        width: '70%',
        marginTop: 18,
     
    },
    
    HeaderTextSmall: {
        fontSize:14,
        textAlign: 'left',
        left: 5,
        width: 310,
    },

    SearchInputStyle: {
        alignSelf: "center",
        justifyContent: "center",
        flex:1,
        height:"100%",    
    },


    Results: {
        alignSelf: "center",
        justifyContent: "center",
        width: 170,
        height:150,
        borderColor: "#568C9E",
        flex:1,
        margin: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    inputTextHeader: {
        color: "#568C9E",
        fontSize: 15,
        marginLeft:18.5,
        fontWeight:"bold",
        margin:5,
        
    },


    buttons: {
        borderWidth: 2.5,
        borderColor:"#568C9E",
        borderRadius: 40,
        fontSize: 10,
        alignItems:"center",
        justifyContent: "center",
        marginTop:30,
        marginBottom:20,
        height: 40,
        width:250,
        backgroundColor:"#568C9E",     
    },

    LoginImage: {
        flex:5.5
    },
    

    container: {
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: 10,
        width: '100%',
    
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
   

    RehabResults: {
        flex:1,
         borderWidth: 1,
         borderRadius: 10,
          borderColor: 'black'
        },

        containertwo: {
            flex: 1,
           
          },
          scrollView: {
            marginHorizontal: 15,
         
          },

          ImageStyles:{
              width: '100%',
              height: '80%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
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
            marginRight:5,
            width:55,
            height:30,
            flex:1,
         
        },

          

})

export default SearchStyles;

