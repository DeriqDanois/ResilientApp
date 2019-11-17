import { StyleSheet } from 'react-native';


const DiscussionCardStyles = StyleSheet.create({

    WhiteCard: {

    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: "rgba(0,0,0)",
    shadowOpacity: 0.5,
    shadowRadius: 5
    }
})

    //   button: {

//     // cross-platform css

//     ...Platform.select({
//       ios: {
//         shadowColor: rgba(0,0,0),
//         shadowOpacity: 0.5,
//         shadowRadius: 5
//       },
//       android: {
//         elevation: 5
//       },
//     }),
//   }


export default DiscussionCardStyles;