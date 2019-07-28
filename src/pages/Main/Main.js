import React from 'react';
import { ImageBackground, View, Image, Text, ScrollView } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Home from '../Home/Home';
import Settings from '../Settings/Settings';
import Inbox from '../Inbox/Inbox';

import { background, randomGuySrc } from '../../../assets/images';

import { initializeParse } from '../../helpers/parse'
import Profile from '../Profile/Profile';
import SideMenu from 'react-native-side-menu';
import { profileSrc } from '../../../assets/images'


export default class Main extends React.Component {

    componentWillMount() {
        let serverUrl = 'https://parseapi.back4app.com';
        let applicationId = 'wyzCt4kw2qUdiyAnzgCpqpcPP1RAn63f2wEkSdqq';
        let javascriptKey = '3oTxmWm37A1Epaw5cH9XLvGE0yun5zBPb20DATqM';
        let masterKey = '10h58svn1ryCF913ONIgRKB4kWpa2XMbCi7tfOhl';
        initializeParse(serverUrl, applicationId, javascriptKey, masterKey);
    }

    state = {
        activeTab: 0,
        isTabOpen: false
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
            case 0: return <Home navigation={this.props.navigation} />
            case 1: return <Inbox />
            case 2: return <Profile />
            case 3: return <Settings />
        }
    }

    renderLeftSidebar() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ borderWidth: 1, height: 100, margin: 5, padding: 5 }}>
                    <Image style={styles.avatar} source={profileSrc} />
                </View>
                <View style={{ borderWidth: 1, height: 100, margin: 5, padding: 5 }}>
                    <Text style={{ color: '#A5A5A5', margin: 2, padding: 2, fontSize: 20 }}>asdadas</Text>
                    <Text style={{ color: '#EEFEFE', margin: 2, padding: 2, fontSize: 17 }}>@MuhammetIpek</Text>
                    <Text style={{ color: '#C2C2C2', margin: 2, padding: 2, fontSize: 17 }}><Text style={{ fontSize: 20, color: '#EFEFEF' }}>7</Text>  Takip Edilen · <Text style={{ fontSize: 20, color: '#EFEFEF' }}>0</Text>  Takipçi</Text>
                </View>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginHorizontal: 12 }} />
                <View style={{ borderWidth: 1, padding: 5 }}>
                    <View style={{ borderWidth: 1, height: 60, margin: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ width: 55, height: 55, borderRadius: 27 }} source={randomGuySrc} />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ color: '#A5A5A5', margin: 2, padding: 2, fontSize: 22, alignSelf: 'flex-end' }}>Profil</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, height: 60, margin: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ width: 55, height: 55, borderRadius: 27 }} source={randomGuySrc} />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ color: '#A5A5A5', margin: 2, padding: 2, fontSize: 22, alignSelf: 'flex-end' }}>Lists</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, height: 60, margin: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ width: 55, height: 55, borderRadius: 27 }} source={randomGuySrc} />
                        </View>
                        <View style={{ flex: 3, height: 60 }}>
                            <Text style={{ color: '#A5A5A5', margin: 2, padding: 2, fontSize: 22, alignSelf: 'flex-end' }}>Place marks</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, height: 60, margin: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ width: 55, height: 55, borderRadius: 27 }} source={randomGuySrc} />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ color: '#A5A5A5', margin: 2, padding: 2, fontSize: 22, alignSelf: 'flex-end' }}>Moments</Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginHorizontal: 12 }} />

                <View style={{ borderWidth: 1, padding: 5 }}>
                    <View style={{ borderWidth: 1, height: 60, margin: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ width: 55, height: 55, borderRadius: 27 }} source={randomGuySrc} />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ color: '#A5A5A5', margin: 2, padding: 2, fontSize: 22, alignSelf: 'flex-end' }}>Ayarlar ve Gizlilik</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, height: 60, margin: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ width: 55, height: 55, borderRadius: 27 }} source={randomGuySrc} />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ color: '#A5A5A5', margin: 2, padding: 2, fontSize: 22, alignSelf: 'flex-end' }}>Yardım Merkezi</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

    render() {
        return (
            <SideMenu
                openMenuOffset={260}
                isOpen={this.state.isTabOpen}
                menu={this.renderLeftSidebar()}>
                <ImageBackground source={background} style={styles.backgroundContainer}>
                    {this.getActiveTab()}
                    <BottomNavigation
                        onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                        renderTab={this.renderTab}
                        tabs={this.tabs}
                    />
                </ImageBackground>
            </SideMenu>
        );
    }
}
