import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import { signUp, logOut } from '../../helpers/parse';
import { Actions } from 'react-native-router-flux';

import styles from './styles'
import { background as backgroundImage, icon } from '../../../assets/images.js'

interface prop {
    navigation: any
}

export class Register extends React.Component<prop> {
    static propTypes = {

    }

    state = {
        email: 'test@test.com',
        username: 'Test',
        password: 'Test123'
    }

    moveToMain = () => {
        this.props.navigation.navigate('Main', { transition: 'collapseExpand' });
    }

    onSignUpClick() {
        logOut()//if logged already., check and logout

        signUp(this.state.username, this.state.email, this.state.password).then((result: any) => {
            console.log("Success")
            this.moveToMain()

        }).catch((resolve: any) => {
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
                        <TouchableOpacity style={styles.button} onPress={() => this.onSignUpClick()}>
                            <Text style={styles.text}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default Register