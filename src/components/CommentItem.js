import React from 'react'
import { TouchableOpacity, Image, View, Text, ToastAndroid, Drop } from 'react-native'
import PropTypes from 'prop-types'
import styles from './PostItemStyles'
import { randomGuySrc, profileSrc, share, comment as commentSrc, reShare, like, settingsSrc } from '../../assets/images';
import { saveMention, deleteComment } from '../helpers/parse';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export class CommentItem extends React.Component {

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu() {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    onDeleteClick() {
        deleteComment(this.props.details.id)
        this.hideMenu();
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

    componentWillUnmount() {
        this.hideMenu()
    }

    render() {
        let { commentBy, comment } = this.props.details
        return (
            <View style={styles.channel}>
                <Image source={this.props.logo} style={styles.channelLogo} />

                <TouchableOpacity
                    onPress={this.showMenu} style={{ position: 'absolute', top: 6, right: 6, zIndex: 5, borderWidth: 1, zIndex: 3 }}>
                    <Menu
                        ref={this.setMenuRef}
                        button={<Image resizeMode="contain" style={{ width: 24, height: 32 }} source={settingsSrc} />}>
                        <MenuItem onPress={() => this.onDeleteClick()}>Delete</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={() => this.hideMenu()}>Cancel</MenuItem>
                    </Menu>
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
            </View>
        )
    }
}

export default CommentItem
