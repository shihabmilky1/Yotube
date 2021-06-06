import React from 'react'
import { Text, View, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles'
const VideoListItem = ({video}) => {

    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration % 60;

    let viewsString = video.views;
    
    if(video.views > 1000000){
        viewsString = (video.views / 1000000).toFixed(1) + 'M'
    }
    else if(video.views > 1000){
        viewsString = (video.views / 1000).toFixed(1) + 'K'
    }




    return (
            <View style={styles.videoCard}>
                {/* Thumbnail */}
                <View>
                <Image style={styles.thumbnail} source={{uri: video.thumbnail}}/>
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</Text>
                </View>
                </View>
                {/* Title Row */}
                <View style={styles.titleRow}>
                    {/* Avatar */}
                    <Image style={styles.avatar} source={{uri: video.user.image}}/>
                    {/* Middle Container : Title, Subtitle, , etc */}
                        <View style={styles.middleContainer}> 
                            <Text style={styles.title}>{video.title}</Text>
                            <Text style={styles.subtitle}>{video.user.name} {video.views} {video.createdAt}</Text>
                        </View>
                    {/* Icon */}
                    <Feather name="more-vertical" size={16} color="white" />
                </View>
        </View>
    )
}
export default VideoListItem;

