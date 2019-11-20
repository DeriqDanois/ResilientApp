import { StyleSheet, Dimensions } from 'react-native';

const EditEmergencyPageStyles = StyleSheet.create({
    box1 : {
        flex:1   
    },
    scrollView: {
        marginHorizontal: 15,
      },
    TextStyle: {
        color: 'grey'
    },

    HeaderText: { 
        flex:1, 
        marginTop:'3%', 
        marginLeft:'3%', 
        fontSize:20 
    },

    BodyTopText: {
        color:'grey', 
        paddingRight:'12%', 
        fontSize:16,
        fontWeight:'bold'
    },
    BodyLowerText: {
        color:'#587a8b', 
        paddingTop:'10%', 
        paddingRight:'5%', 
        fontSize:16,
        marginBottom:"3%",
     
    },

    HeaderTextContainer: {
        borderBottomColor:'#DADADA',
        borderBottomWidth:1,
        width: Dimensions.get("window").width/1.2,
    },
    PhoneNumber: {
        fontSize:18, 
        marginTop:'2%', 
        paddingLeft:'8%'
    },
    ImageStyles: {
        width: 30, 
        height: 30, 
        marginTop:'20%'
    },
    EditButtonRow: {

    },

    AlertIconTop: {
        width: 30, 
        height: 30, 
        marginLeft:'3%', 
        marginTop:'5%'
    },
    BodyStyles: {

    }

})

export default EditEmergencyPageStyles;