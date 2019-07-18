import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { profileSrc, backgroundPhotoSrc, topBarBg } from '../../../assets/images'

import { TabView, SceneMap } from 'react-native-tab-view';
import Chat from '../Chat/Chat';
import Messages from '../Messages/Messages';

const FirstRoute = () => (
    <Messages />
);

const SecondRoute = () => (
    <View style={[styles.scene]}>
        <Text>2</Text>
    </View>
);

const ThirdRoute = () => (
    <View style={[styles.scene]}>
        <Text>3</Text>
    </View>
);

const ForthRoute = () => (
    <View style={[styles.scene]}>
        <Text>4</Text>
    </View>
);

export default class Inbox extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'All' },
            { key: 'second', title: 'Mention' }
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                    third: ThirdRoute,
                    forth: ForthRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        )
    }
}