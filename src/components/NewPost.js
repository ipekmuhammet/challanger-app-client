import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    BackHandler,
    Keyboard,
    Alert
} from 'react-native'
import { saveShare } from '../helpers/parse';

export class NewPost extends Component {
    static propTypes = {

    }

    state = {
        text: ''
    }

    componentDidMount() {
        BackHandler.addEventListener('backPress', this.onCloseClick);
        Keyboard.addListener('keyboardDidHide', this.onCloseClick);
    }

    onCloseClick() {
        console.log("back press");
        //this.props.navigation.goBack();
    }

    onShareClick() {
        saveShare('mami123', '@mamiBaba', this.state.text);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.close}
                        onPress={this.onCloseClick.bind(this)}>
                        <Text style={styles.text}>Kapat</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.share}
                        onPress={this.onShareClick.bind(this)}>
                        <Text style={styles.text}>Share</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.body}>
                    <TextInput
                        autoCorrect
                        autoFocus
                        multiline
                        style={styles.shareDetail}
                        onChangeText={text => this.setState({ text })} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple'
    },
    header: {
        height: 50,
        borderBottomColor: '#D1D5DA',
        borderBottomWidth: 1,
        borderRadius: 10,
        padding: 5,
        margin: 5
    },
    body: {
        flex: 1,
        padding: 10,
        margin: 10,
    },
    shareDetail: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 22,
        color: 'white'
    },
    close: {
        padding: 5,
        margin: 5,
        left: 5,
        position: 'absolute'
    },
    share: {
        margin: 5,
        right: 5,
        position: 'absolute'
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
})



export default NewPost
