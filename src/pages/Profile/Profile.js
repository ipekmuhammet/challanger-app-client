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

const FirstRoute = () => (
    <View style={[styles.scene]} >
        <Text>1</Text>
    </View>
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


export default class Profile extends Component {

    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Shares' },
            { key: 'second', title: 'Mention' },
            { key: 'third', title: 'Videos' },
            { key: 'forth', title: 'Likes' },
        ],
    };
    /* 
    
                            <Text style={styles.name}>Muhammet İpek</Text>
                            <Text style={styles.name}>@SuckItDown</Text>
                            <Text style={styles.name}>John Romero sizi Kaltağı yapacak.</Text>
    */
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Image style={styles.backgroundPhoto} source={backgroundPhotoSrc} />
                    <View style={styles.information}>
                        <View style={styles.followers}>
                            <TouchableOpacity><Text style={styles.followerText}>4500 Takipçi</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.followerText}>100 Takip edilen</Text></TouchableOpacity>
                        </View>

                        <View style={styles.interact}>
                            <Text style={styles.followerText}>Takip Et</Text>
                            <Text style={styles.followerText}>Bildirim Al</Text>
                        </View>

                        <View style={styles.description}>
                            <Text style={styles.username}>Muhammet ipek</Text>
                            <Text style={styles.userId}>@SuckItDown</Text>
                            <Text style={styles.descriptionText}>John Romero sizi kaltağı yapacak.
                            John Romero sizi kaltağı yapacak.
                            John Romero sizi kaltağı yapacak.
                            John Romero sizi kaltağı yapacak.
                            John Romero sizi kaltağı yapacak.
                            </Text>
                        </View>
                    </View>
                    <Image style={styles.avatar} source={profileSrc} />
                </View>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'visible'
    },
    profile: {
        width: '100%',
        height: 330,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    description: {
        width: '100%',
        height: 220,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    descriptionText: {
        color: 'white',
        justifyContent: 'center'
    },
    username: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
    },
    userId: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        paddingBottom: 5,
        marginBottom: 5,
        borderColor: '#f7f7f7',
        borderBottomWidth: 1,
    },
    followers: {
        alignSelf: 'flex-start',
        position: 'absolute',
        top: 5,
        padding: 5,
        margin: 5
    },
    followerText: {
        color: 'white',
        fontSize: 15
    },
    interact: {
        alignSelf: 'flex-end',
        position: 'absolute',
        padding: 5,
        top: 5,
        margin: 5
    },
    description: {
        alignSelf: 'center',
        position: 'absolute',
        padding: 5,
        margin: 5
    },
    name: {
        fontSize: 22,
        color: 'white'
    },
    backgroundPhoto: {
        height: 150,
        width: '100%',
        resizeMode: 'cover',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    information: {
        height: 180,
        textAlign: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    scene: {
        flex: 1,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        margin: 5,
        marginBottom: 15,
        borderWidth: 4,
        borderColor: 'white',
        alignSelf: 'center',
        position: 'absolute'
    },
});
