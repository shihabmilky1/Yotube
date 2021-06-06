import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    videoCard:{

    },
    thumbnail: {
        width:'100%',
        aspectRatio:  16/9,
    },
    timeContainer:{
        backgroundColor:'#00000099',
        height:25,
        width:50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:4,
        position:'absolute',
        right:0,
        bottom:5,
       
    },
    time:{
        color:'#fff',
        fontWeight:'bold'
    },
    titleRow:{
        flexDirection:'row',
        padding: 10,
    },
    avatar:{
        height:50,
        width:50,
        borderRadius:25,
    },
    middleContainer:{
        marginHorizontal:10,
        flex: 1
    },
    title:{
        color:'#fff',
        fontSize:18,
        fontWeight:'500',
        marginBottom:5,
    },
    subtitle:{
        color:'grey',
        fontSize:15,
        fontWeight:'500',
    },
})

export default styles;