import { StyleSheet, ImageBackground } from 'react-native';



const ProfilePageStyles = StyleSheet.create({



        containertwo: {
          textAlign:'center',
          flex:1,
        },


          LinkText: {
            textAlign:'left',
            fontWeight:'bold',
            color: "teal",
            flex:0.7,
            fontSize:20,
            marginLeft:"20%"
    
         
          },
          LinkBox: {
            flex:1,
            alignSelf:'center',
            
         
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
            textAlign:'left',
            fontWeight:'bold',
            color: "red",
            flex:1,
            fontSize:20,
            marginLeft:"20%"
          },

          AvatarAndUserName: {
            flex:1.7,
            flexDirection:'row',
            width:"100%"
          }
          

})

export default ProfilePageStyles;

