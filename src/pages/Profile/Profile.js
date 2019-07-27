import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ImageBackground
} from 'react-native';
import { profileSrc, randomGuySrc, backgroundPhotoSrc, topBarBg } from '../../../assets/images'
import styles from './styles.js'

import { TabView, SceneMap } from 'react-native-tab-view';
import SubscriptionChannelItem from '../../components/SubscriptionChannelItem';
import PostItem from '../../components/PostItem';
import MediaItem from '../../components/MediaItem';
import { getSpecificShares } from '../../helpers/parse';
import { Shares } from '../Shares/Shares';

let aa = []

const SecondRoute = () => (
    <View style={[styles.scene]}>
        {    /*

            [1, 2, 3, 4, 5].map(el => {
                return <PostItem name={"Muhammet İpek @SuckItDown"} logo={randomGuySrc} message={"Suck it Down Babe!,Suck it Down Babe!,Suck it Down Babe!."} />
            })
                */
        }
    </View>
);

const ThirdRoute = () => (
    <View style={[styles.scene]} >
        {
            /*
            [1, 2, 3, 4, 5].map(el => {
                return <MediaItem name={"Muhammet İpek @SuckItDown"} logo={profileSrc} backgroundPhotoSrc={backgroundPhotoSrc} message={"Suck it Down Babe!,Suck it Down Babe!,Suck it Down Babe!."} />
            })
            */
        }
    </View>
);

const ForthRoute = () => (
    <View style={[styles.scene]}>
        {
            /*
[1, 2, 3, 4, 5].map(el => {
    return el % 2 == 0 ?
        <MediaItem name={"Muhammet İpek @SuckItDown"} logo={profileSrc} backgroundPhotoSrc={backgroundPhotoSrc} message={"Suck it Down Babe!,Suck it Down Babe!,Suck it Down Babe!."} /> :
        <PostItem name={"Muhammet İpek @SuckItDown"} logo={randomGuySrc} message={"Suck it Down Babe!,Suck it Down Babe!,Suck it Down Babe!."} />
})
*/
        }
    </View>
);

export default class Profile extends Component {

    state = {
        index: 0,
        shares: [],
        routes: [
            { key: 'first', title: 'Shares' },
            { key: 'second', title: 'Mention' },
            { key: 'third', title: 'Media' },
            { key: 'forth', title: 'Likes' }],
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.profile}>
                    <Image style={styles.backgroundPhoto} source={backgroundPhotoSrc} />
                    <View style={styles.information}>
                        <View style={styles.followers}>
                            <TouchableOpacity><Text style={styles.followerText}>4500 Takipçi</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.followerText}>100 Takip edilen</Text></TouchableOpacity>
                        </View>

                        <View style={styles.interact}>
                            <TouchableOpacity style={styles.button}><Text style={styles.followerText}>Takip Et</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.button}><Text style={styles.followerText}>Bildirim Al</Text></TouchableOpacity>
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
                        first: Shares,
                        second: SecondRoute,
                        third: ThirdRoute,
                        forth: ForthRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }} />
            </ScrollView>
        );
    }
}