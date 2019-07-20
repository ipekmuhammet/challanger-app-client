import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';

import styles from './styles.js'

import { background, icon } from '../../../assets/images.js'


export default class Welcome extends React.Component<{ navigation: any }> {

    onLoginClick() {

    }

    static navigationOptions = ({ navigation }: any) => {
        return {
            title: 'Base Screen',
            headerStyle: {
                backgroundColor: '#2980b9',
                height: 60,
            },
            headerTitleStyle: {
                color: 'white'
            },
        }

    }

    moveToSlideFromRight = () => {
        this.props.navigation.navigate('SlideFromRight');
    }

    moveToMain = () => {
        this.props.navigation.navigate('Main');
    }

    moveToExpand = () => {
        this.props.navigation.navigate('CollapseExpand', { transition: 'collapseExpand' });
    }



    render() {
        return (
            <ImageBackground source={background} style={styles.backgroundContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Giriş yap</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button} onPress={this.moveToSlideFromRight}>
                            <Image source={icon} style={styles.icon} />
                            <Text style={styles.text}>E-Posta ile giriş yap</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                    </View>
                    <View style={styles.row}>
                    </View>
                    <View style={styles.row}>
                        <View style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 1,
                            width: '100%'
                        }} />
                    </View>
                    <View style={styles.row}>
                    </View>
                    <View style={styles.row}>
                    </View>
                    <View style={styles.row}>
                    </View>
                    <View style={styles.row}>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button} onPress={() => console.log("sign In With Google")}>
                            <Image source={icon} style={styles.icon} />
                            <Text style={styles.text}>Google ile giriş yap</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button} onPress={() => console.log("register")}>
                            <Image source={icon} style={styles.icon} />
                            <Text style={styles.text}>Facebook ile giriş yap</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}></View>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Text style={styles.text}>Burada yeni misiniz? Bir Hesap oluşturun</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
