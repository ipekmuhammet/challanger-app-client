import React from 'react'
import { TouchableOpacity, Image, View, Text, ToastAndroid, Drop, Modal, TouchableHighlight, Alert } from 'react-native'
import PropTypes from 'prop-types'
import ActionSheet from 'react-native-actionsheet';

import { randomGuySrc, profileSrc, share, comment as commentSrc, reShare, like, settingsSrc } from '../../assets/images';
import styles from './PostItemStyles'
import { saveMention, deleteComment } from '../helpers/parse';
import MyCommentActions from '../models/MyCommentActions'
import CommentActions from '../models/CommentActions'

export class CommentItem extends React.Component {

    state = {
        modalVisible: true,
        commentByMe: true
    }

    showActionSheet = () => {   
        this.ActionSheet.show();
    };

    onDeleteClick() {
        deleteComment(this.props.details.id).then(comment => {
            this.props.extractComment(comment)
        })
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

    onActionClick(index) {
        if (this.state.commentByMe) {
            switch (index) {
                case MyCommentActions.Delete:
                    this.onDeleteClick(); break;
                default: break;
            }
        }
        else {
            switch (index) {
                default: break;
            }
        }
    }

    UNSAFE_componentWillMount() {
        let { commentBy } = this.props.details
        commentBy === '@mamiBaba' ? this.setState({ commentByMe: true }) : this.setState({ commentByMe: false })
    }

    render() {
        let optionArray = this.state.commentByMe ?
            [
                'Delete',
                'Cancel',
            ] :
            [
                'Bağlantıyı kopyala',
                'Takip Et / Takipi Bırak',
                'Sessize Al',
                'Engelle',
                'Gönderiyi Bildir',
                'Cancel'
            ]

        let { commentBy, comment } = this.props.details
        let { commentByMe } = this.state
        return (
            <View style={styles.channel}>
                <Image source={this.props.logo} style={styles.channelLogo} />

                <TouchableOpacity
                    onPress={this.showActionSheet} style={{ position: 'absolute', top: 6, right: 6, zIndex: 5, borderWidth: 1, zIndex: 3 }}>
                    <Image resizeMode="contain" style={{ width: 24, height: 32 }} source={settingsSrc} />
                </TouchableOpacity>

                <View style={styles.channelDescription}>
                    <Text style={styles.channelName}>{commentBy}</Text>
                    <Text style={styles.message}>{comment}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.onReShareClick.bind(this)}>
                            <Image resizeMode="contain" style={{ width: 28, height: 28, paddingHorizontal: 15, marginTop: 10, marginHorizontal: 15 }} source={reShare} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onCommentClick.bind(this)}>
                            <Image resizeMode="contain" style={{ width: 28, height: 28, paddingHorizontal: 15, marginTop: 10, marginHorizontal: 15 }} source={commentSrc} />
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
                    cancelButtonIndex={commentByMe ? 1 : 5}
                    destructiveButtonIndex={commentByMe ? 1 : 5}
                    onPress={this.onActionClick.bind(this)}
                />
            </View>
        )
    }
}

export default CommentItem
