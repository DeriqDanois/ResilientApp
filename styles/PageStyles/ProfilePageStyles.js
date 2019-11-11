import { StyleSheet, ImageBackground } from 'react-native';



const ProfilePageStyles = StyleSheet.create({



        containertwo: {
          textAlign:'center',
          flex:1,
        },


          LinkText: {
            textAlign:'center',
            fontWeight:'bold',
            color: "teal",
            flex:1,
    
         
          },
          LinkBox: {
            flex:1,
            alignSelf:'center'
            
         
          },

          LinkContanier: {
            flex:1,
            alignSelf:'center',
    
       
          },

          UserName: {
            flex:1,
            fontSize:25,
            alignSelf:'center',
            marginBottom:'7%',
          },

          UserIcon: {
            margin:'13%',
            width:80, 
            height:80,
          },
          
          DeleteText: {
            textAlign:'center',
            fontWeight:'bold',
            color: "red",
            flex:1,
          },

          AvatarAndUserName: {
            flex:2,
            flexDirection:'row',
            width:"100%"
          }
          

})

export default ProfilePageStyles;

