import React from 'react'
import {  View, StyleSheet, FlatList} from 'react-native'
import VideoListItem from '../components/VideoListItem';
import videos from '../assets/data/videos.json'
const HomeScreen= () => {
    return (
        <View>
                {/* Video List Item*/}
            <FlatList
            data={videos}
            renderItem={({item}) => <VideoListItem video={item}/>}
            />
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
   
})