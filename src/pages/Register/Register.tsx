import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import { signUp } from '../../helpers/parse';
import { Actions } from 'react-native-router-flux';

import styles from './styles'

import backgroundImage from '../../../assets/background.png'
import icon from '../../../assets/icon.png'

export class Register extends React.Component {
    static propTypes = {

    }

    state = {
        username: '',
        email: '',
        password: ''
    }

    onSignUpClick() {
        signUp(this.state.username, this.state.email, this.state.password).then((result) => {
            console.log("Success")
        }).catch((resolve) => {
            console.log(resolve)
        })
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundContainer}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <TextInput
                            style={styles.input}
                            value={this.state.email}
                            placeholder={"E-Mail"}
                            onChangeText={(email) => { this.setState({ email }) }} />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            style={styles.input}
                            value={this.state.username}
                            placeholder={"Username"}
                            onChangeText={(username) => { this.setState({ username }) }} />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            style={styles.input}
                            value={this.state.password}
                            placeholder={"Password"}
                            secureTextEntry
                            onChangeText={(password) => { this.setState({ password }) }} />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button} onPress={() => Actions.register()}>
                            <Text style={styles.text}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default Register