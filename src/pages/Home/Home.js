import React from 'react';
import {View,FlatList } from 'react-native';
import VideoItem from '../../components/VideoItem'
import data from './data.json';

import { signUp } from '../../helpers/parse';
import { Actions } from 'react-native-router-flux';

import styles from './styles'

import backgroundImage from '../../../assets/background.png'
import icon from '../../../assets/icon.png'

export class Home extends React.Component {
    static propTypes = {

    }

    render() {
        return (
            <View style={{ backgroundColor: 'white',marginTop:10, flex: 1 }}>
                <FlatList
                    data={data.items}
                    renderItem={(video) => <VideoItem video={video.item} />}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#E5E5E5' }} />}

                />
            </View>
        );
    }
}

export default Home