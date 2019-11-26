import { Platform, StyleSheet } from 'react-native';


const DiscussionCardStyles = StyleSheet.create({

    WhiteCard: {

    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowOffset:{  width: 2,  height:2,},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    backgroundColor:'white',
    width:"70%",
    margin:"auto"
    }


})




export default DiscussionCardStyles;