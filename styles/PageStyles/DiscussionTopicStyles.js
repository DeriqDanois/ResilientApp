import { StyleSheet } from 'react-native';


const DiscussionTopicStyles = StyleSheet.create({
    
    TopicText: {
        flex:1,
        fontSize:16,
        padding: 5,
        fontWeight:"bold",
        lineHeight:20
},

    DescText: {
        flex: 1,
        fontSize: 16,
        padding: 5,
        fontWeight:"300",
        lineHeight:20
    },
    UsernameAndTimeBox: {
        flex:4, 
        flexDirection:"column"
    },
    Username: {
        marginTop:"3%"
    },
    TimePosted: {
        marginTop:"3%",
        fontSize:9,
    },
  
    Container: {
        marginLeft:'8%',
    },


        UpVote: {
            color:"#568C9E",
            flex:2.8, 
            flexDirection:"row", 
        },

        UpVoteText: {
            fontWeight:"bold",
            color:"#568C9E",
            fontSize:10,
            flex:1, 
            marginLeft:'3%'
            
        },

        Save: {
            color:"#568C9E",
            flex:1, 
            flexDirection:"row",
        },
    
        SaveText: {
            fontWeight:"bold",
            color:"#568C9E",
            fontSize:10,
            flex:2, 
            marginLeft:'3%'
        },

        Share: {
            color:"#568C9E",
            flex:1, 
            flexDirection:"row",
        },

        ShareText: {
            fontWeight:"bold",
            color:"#568C9E",
            fontSize:10,
            flex:1,   
            marginLeft:'3%'
        },

        Avatar: {
            flex:1,
            height: 45,
            width: 45,
            margin: 5,
            resizeMode:"contain"
            },
            ButtonBar: {
                flex:1, 
                flexDirection:"row", 
                marginTop:'5%', 
                marginBottom:'3%'
            },
        
})

export default DiscussionTopicStyles;