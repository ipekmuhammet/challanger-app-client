import React from 'react'
import { TouchableOpacity, Image, View, Text, ToastAndroid } from 'react-native'
import PropTypes from 'prop-types'
import ActionSheet from 'react-native-actionsheet';

import styles from './PostItemStyles'
import { randomGuySrc, profileSrc, settingsSrc, share, comment, reShare, like } from '../../assets/images';
import { saveMention } from '../helpers/parse';

import MyCommentActions from '../models/MyCommentActions'
import PostActions from '../models/PostActions'

export class PostItem extends React.Component {

    state = {
        shareByMe: false
    }

    onPostClick() {
        this.props.navigation.navigate('PostPage', { details: this.props.details })
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

    showActionSheet = () => {
        this.ActionSheet.show();
    };

    onActionClick(index) {

    }

    render() {
        let { shareByMe } = this.state
        let optionArray = this.state.shareByMe ?
            [
                'Delete',
                'Cancel',
            ] :
            [
                'Bağlantıyı kopyala',
                'Daha seyrek göster',
                'Takip Et / Takipi Bırak',
                'Sessize Al',
                'Engelle',
                'Gönderiyi Bildir',
                'Cancel'
            ]
        let { owner, detail } = this.props.details
        return (
            <TouchableOpacity style={styles.channel} onPress={this.onPostClick.bind(this)}>

                <Image source={this.props.logo} style={styles.channelLogo} />

                <TouchableOpacity
                    onPress={this.showActionSheet} style={{ position: 'absolute', top: 6, right: 6, zIndex: 5, borderWidth: 1, zIndex: 3 }}>
                    <Image resizeMode="contain" style={{ width: 24, height: 32 }} source={settingsSrc} />
                </TouchableOpacity>

                <View style={styles.channelDescription}>
                    <Text style={styles.channelName}>{owner}</Text>
                    <Text style={styles.message}>{detail}</Text>

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

                <ActionSheet
                    ref={o => (this.ActionSheet = o)}
                    options={optionArray}
                    cancelButtonIndex={shareByMe ? 1 : 6}
                    destructiveButtonIndex={shareByMe ? 1 : 6}
                    onPress={this.onActionClick.bind(this)}
                />

            </TouchableOpacity>
        )
    }
}

export default PostItem
