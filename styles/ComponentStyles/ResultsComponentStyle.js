import { StyleSheet } from 'react-native';

const RehabResultsStyle = StyleSheet.create({
    RehabDescription: {
        fontSize: 11,
    },
    RehabName: {
        fontSize: 19,
    },
    containertwo: {
        flex:1,
        flexDirection:'row',
        backgroundColor: 'white',
        shadowOffset:{ width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
        margin: 8,
    },
    ImageStyles:{
        height:115,
        width: 160,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
    },
    bookMarkIcon: {
        width:50, 
        height:50, 
        borderRadius:60, 
        position:'absolute', 
        backgroundColor:'white',
        justifyContent:'center', 
        alignItems:'center', 
        left:"83%",
        shadowOffset:{  width: 5,  height:5,  },
        shadowColor: 'black',
        shadowOpacity: 0.2, 
    },
})
export default RehabResultsStyle;

