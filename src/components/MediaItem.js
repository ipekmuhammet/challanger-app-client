import React, { Component } from 'react'
import { TouchableOpacity,Image,View,Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './PostItemStyles'

export class MediaItem extends Component {
    render() {
        let {logo,name,message,backgroundPhotoSrc} = this.props
        return (
            <TouchableOpacity style={styles.shareItem}>
            <View style={styles.shareDescription}>
                <Image source={logo} style={styles.channelLogo} />
                <View style={styles.channelDescription}>
                    <Text style={styles.channelName}>{name}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
            </View>
            <View style={styles.channelDescription}>
                <Image source={backgroundPhotoSrc} style={{ height: 200, borderRadius: 8, padding: 4, margin: 4, width: '98%' }} />
            </View>
        </TouchableOpacity>
        )
    }
}

export default MediaItem
