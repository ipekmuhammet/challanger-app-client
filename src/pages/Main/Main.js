import React from 'react';
import { ImageBackground, View } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Home from '../Home/Home';
import Settings from '../Settings/Settings';
import Inbox from '../Inbox/Inbox';

import { background } from '../../../assets/images';

import { initializeParse } from '../../helpers/parse'
import Profile from '../Profile/Profile';
import Chat from '../Chat/Chat';
import Messages from '../Messages/Messages';

export default class Main extends React.Component {

    componentWillMount() {
        let serverUrl = 'https://parseapi.back4app.com';
        let applicationId = 'wyzCt4kw2qUdiyAnzgCpqpcPP1RAn63f2wEkSdqq';
        let javascriptKey = '3oTxmWm37A1Epaw5cH9XLvGE0yun5zBPb20DATqM';
        let masterKey = '10h58svn1ryCF913ONIgRKB4kWpa2XMbCi7tfOhl';
        initializeParse(serverUrl, applicationId, javascriptKey, masterKey);
    }

    state = {
        activeTab: 0
    }

    tabs = [
        {
            key: 0,
            icon: 'md-home',
            label: 'Home',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 1,
            icon: 'md-list',
            label: 'Inbox',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 2,
            icon: 'md-glasses',
            label: 'Profile',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 3,
            icon: 'md-settings',
            label: 'Settings',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    renderTab({ tab, isActive }) {
        return <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            labelStyle={{ color: '#181B18' }}
            renderIcon={() => <Icon size={24} color="#181B18" name={tab.icon} />}
        />
    }

    getActiveTab() {
        switch (this.state.activeTab) {
            case 0: return <Home />
            case 1: return <Inbox />
            case 2: return <Profile />
            case 3: return <Settings />
        }
    }

    render() {
        return (
            <ImageBackground source={background} style={styles.backgroundContainer}>

                {this.getActiveTab()}
                <BottomNavigation
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
            </ImageBackground>
        );
    }
}
