import { Platform, StyleSheet } from 'react-native';


const DiscussionCardStyles = StyleSheet.create({

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
    shadowOpacity: 0.3,
    shadowRadius: 20,
    width:"80%",
    margin:"auto",
    alignSelf:'center',
    padding:15
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
        marginTop: 2
    },

    PostStatus: {
        fontWeight:"300",
        color:"grey",
        marginRight:10,
        marginLeft:10
    }


})




export default DiscussionCardStyles;