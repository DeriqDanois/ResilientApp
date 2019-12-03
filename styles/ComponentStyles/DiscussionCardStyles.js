import { StyleSheet, Dimensions } from 'react-native';


const DiscussionCardStyles = StyleSheet.create({

    Bookmark: {
     width:Dimensions.get("window").width/7,
     height:Dimensions.get("window").height/14, 
    position:"absolute",
    left:"81%",
    top:"10%",
    zIndex:1
    },

    WhiteCard: {
    flex: 1,
    flexDirection:"column",
    backgroundColor:"white",
    marginTop: 40,
    marginBottom: -20,
    justifyContent: 'center',
    borderRadius: 10,
    shadowOffset:{  width: 2,  height:2,},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    width:"80%",
    margin:"auto",
    alignSelf:'center',
    padding:15
    },

    Avatar: {

    flex:1,
    height: 45,
    width: 45,
    margin: 5,
    resizeMode:"contain"
    },

    Text: {
        flex: 5,
        fontSize: 16,
        padding: 5,
        fontWeight:"bold",
        lineHeight:20
    },

    Upvote: {
        fontWeight:"bold",
        color:"#568C9E",
        marginLeft: 5,
        marginTop: 2,
  
    },

    PostStatus: {
        fontWeight:"300",
        color:"grey",
        marginRight:5,
        marginLeft:5,
        fontSize:10
    }


})




export default DiscussionCardStyles;