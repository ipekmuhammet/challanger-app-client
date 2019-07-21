import React, { Component } from 'react'
import { TouchableOpacity,Image,View,Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './PostItemStyles'

export class PostItem extends Component {
    static propTypes = {

    }

    render() {
        return (
            <TouchableOpacity style={styles.channel}>
                <Image source={this.props.logo} style={styles.channelLogo} />
                <View style={styles.channelDescription}>
                    <Text style={styles.channelName}>{this.props.name}</Text>
                    <Text style={styles.message}>{this.props.message}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default PostItem
