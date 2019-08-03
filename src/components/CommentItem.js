import React from 'react'
import { TouchableOpacity, Image, View, Text, ToastAndroid, Drop, Modal, TouchableHighlight, Alert } from 'react-native'
import PropTypes from 'prop-types'
import styles from './PostItemStyles'
import { randomGuySrc, profileSrc, share, comment as commentSrc, reShare, like, settingsSrc } from '../../assets/images';
import { saveMention, deleteComment } from '../helpers/parse';
import ActionSheet from 'react-native-actionsheet';
import CommentActions from '../models/CommentActions'

export class CommentItem extends React.Component {

    state = {
        modalVisible: true
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
        switch (index) {
            case CommentActions.Delete:
                this.onDeleteClick(); break;
            default: break;
        }
    }

    render() {
        let optionArray = [
            'Delete',
            'Cancel',
        ];

        let { commentBy, comment } = this.props.details
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
                    cancelButtonIndex={1}
                    destructiveButtonIndex={1}
                    onPress={this.onActionClick.bind(this)}
                />
            </View>
        )
    }
}

export default CommentItem
