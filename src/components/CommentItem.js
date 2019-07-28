import React from 'react'
import { TouchableOpacity, Image, View, Text, ToastAndroid } from 'react-native'
import PropTypes from 'prop-types'
import styles from './PostItemStyles'
import { randomGuySrc, profileSrc, share, comment, reShare, like } from '../../assets/images';
import { saveMention } from '../helpers/parse';

export class CommentItem extends React.Component {
    onPostClick() {
        //this.props.navigation.navigate('PostPage', { details: this.props.details })
    }

    onReShareClick() {
        saveMention(this.props.details.id, '@mamiBaba').then(isItShared => {
            isItShared ? ToastAndroid.show("Success", ToastAndroid.SHORT) : ToastAndroid.show("Fail", ToastAndroid.SHORT)
        })
    }

    onShareClick() {

    }

    onLikeClick() {

    }

    onCommentClick() {

    }

    render() {
        let { commentBy, comment } = this.props.details
        return (
            <TouchableOpacity style={styles.channel} onPress={this.onPostClick.bind(this)}>

                <Image source={this.props.logo} style={styles.channelLogo} />

                <View style={styles.channelDescription}>
                    <Text style={styles.channelName}>{commentBy}</Text>
                    <Text style={styles.message}>{comment}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.onReShareClick.bind(this)}>
                            <Image resizeMode="contain" style={{ width: 28, height: 28, paddingHorizontal: 15, marginTop: 10, marginHorizontal: 15 }} source={reShare} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onCommentClick.bind(this)}>
                            <Image resizeMode="contain" style={{ width: 28, height: 28, paddingHorizontal: 15, marginTop: 10, marginHorizontal: 15 }} source={comment} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onLikeClick.bind(this)}>
                            <Image resizeMode="contain" style={{ width: 28, height: 28, paddingHorizontal: 15, marginTop: 10, marginHorizontal: 15 }} source={like} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onShareClick.bind(this)}>
                            <Image resizeMode="contain" style={{ width: 28, height: 28, paddingHorizontal: 15, marginTop: 10, marginHorizontal: 15, aspectRatio: 1 }} source={share} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default CommentItem
