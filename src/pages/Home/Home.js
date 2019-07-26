import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import VideoItem from '../../components/VideoItem'
import PostItem from '../../components/PostItem'
import data from './data.json';

import { signUp, getShares } from '../../helpers/parse';
import { Actions } from 'react-native-router-flux';

import styles from './styles'

import backgroundImage from '../../../assets/background.png'
import { profileSrc, randomGuySrc as randomGuy, postIcon } from '../../../assets/images'
import { FloatingAction } from "react-native-floating-action";

const actions = [
    {
        text: "Accessibility",
        icon: randomGuy,
        name: "bt_accessibility",
        position: 2
    }
];

export class Home extends React.Component {
    static propTypes = {

    }

    state = {
        shares: []
    }

    UNSAFE_componentWillMount() {
        getShares().then(shares => {
            let arr = []
            for (let share in shares) {
                arr.push({ share: shares[share].attributes })
            }
            this.setState({ shares: arr })
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 80, marginBottom: 10, borderBottomColor: '#E5E5E5', borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={profileSrc} style={{
                        width: 60,
                        height: 60,
                        margin: 5,
                        padding: 5,
                        borderRadius: 30,
                        position: 'absolute',
                        left: 5
                    }} />
                    <Text style={{ alignSelf: 'center', fontSize: 24, color: 'white' }}>ProjectBitch</Text>
                </View>
                <FlatList
                    data={this.state.shares}
                    renderItem={object => <PostItem name={object.item.share.owner} logo={randomGuy} message={object.item.share.detail} />}
                    keyExtractor={item => {"share"+item.share.ownerUserId}}
                //ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#E5E5E5' }} />}
                />

                <FloatingAction
                    floatingIcon={postIcon}
                    iconHeight={50}
                    color={'rgb(220,40,40)'}
                    iconWidth={50}
                    onPressMain={() => {
                        console.log("asdsa")
                    }}
                />
            </View>
        );
    }
}

export default Home