import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import icon from '../../assets/icon.png'

export default class SubscriptionChannelItem extends Component {
    static propTypes = {//Gerekli datalar kontrol edilecek.

    }

    render() {
        let { channelName, channelLogo } = this.props
        return (
            <TouchableOpacity style={styles.channel}>
                <Image source={channelLogo} style={styles.channelLogo} />
                <View style={styles.channelDescription}>
                    <Text style={styles.channelName}>{channelName}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

let styles = StyleSheet.create({
    channel: {
        flexDirection: 'row',
        padding: 5,
        margin: 5
    },
    channelLogo: {
        width: 80,
        height: 80,
        margin: 5,
        padding: 5,
        borderRadius: 50
    },
    channelDescription: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    channelName: {
        fontSize: 20,
        paddingHorizontal: 25,
        color: '#3C3C3C'
    }
})