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
        shadowOffset:{ width: 0, height: 0 },
        shadowRadius:4,
        shadowColor: 'black',
        shadowOpacity: 0.12,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
        margin: 8,
    },

    bookMarkIcon: {
        width:40, 
        height:40, 
        marginTop:25,
        borderRadius:60, 
        position:'absolute', 
        backgroundColor:'white',
        justifyContent:'center', 
        alignItems:'center', 
        left:"84%",
        shadowOffset:{  width: 2,  height:2,  },
        shadowColor: 'black',
        shadowOpacity: 0.4, 
    },
})
export default RehabResultsStyle;

