import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';

//import { Actions } from 'react-native-router-flux';

import { initializeParse, logIn, logOut, signUp } from '../../helpers/parse'
import styles from './styles'

import ILoginState from './ILoginState'

import { background, icon, twitter, facebook, google } from '../../../assets/images.js'


export default class Login extends React.Component<{}, ILoginState> {

    state = {
        username: 'Mami',
        password: 'Mami123'
    }

    componentWillMount() {
        let serverUrl = 'https://parseapi.back4app.com';
        let applicationId = 'wyzCt4kw2qUdiyAnzgCpqpcPP1RAn63f2wEkSdqq';
        let javascriptKey = '3oTxmWm37A1Epaw5cH9XLvGE0yun5zBPb20DATqM';
        let masterKey = '10h58svn1ryCF913ONIgRKB4kWpa2XMbCi7tfOhl';
        initializeParse(serverUrl, applicationId, javascriptKey, masterKey);
    }

    onLoginClick() {
        console.log(this.state.username, this.state.password)
        /*
        logIn(this.state.username, this.state.password).then((result) => {
            console.log("logged In")
            Actions.home()
        }).catch((resolve) => {
            console.log(resolve)
        })
        */
    }



    render() {
        return (
            <ImageBackground source={background} style={styles.backgroundContainer}>
                <View style={styles.container}>
                    <Image source={icon} style={styles.icon} />
                </View>
                <View style={styles.container}>
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
                        <TouchableOpacity style={styles.button} onPress={this.onLoginClick}>
                            <Text style={styles.text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button} onPress={() =>
                            // Actions.register()
                            console.log("register")
                        }>
                            <Text style={styles.text}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}></View>
            </ImageBackground>
        );
    }
}
