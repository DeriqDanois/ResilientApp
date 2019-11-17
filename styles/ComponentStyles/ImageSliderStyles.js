import { StyleSheet } from 'react-native'; 
import { BookMarkUnsavedIcon } from '../../comps/Svgs';

const NavBarStyles = StyleSheet.create({
    SliderContainer: {
        height:350,
        flex:1,
        borderBottomRightRadius: 50,
    },

    sliderDots: {
        width:70, 
        height:70,
        flex:1,
    },
    sliderDotsContainer: {
        flexDirection:'row',
        flex:1,
        height:100,
        alignItems:"flex-end",
    },
    bookMarkIcon: {
        width:60, 
        height:60, 
        borderRadius:60, 
        position:'absolute', 
        backgroundColor:'white',
        justifyContent:'center', 
        alignItems:'center',
        top:"90%",
        left:"75%",
        shadowOffset:{  width: 3,  height:3,  },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        
       

    }
})

export default NavBarStyles;