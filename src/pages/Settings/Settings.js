import React from 'react';
import { View } from 'react-native';

import { signUp } from '../../helpers/parse';
import { Actions } from 'react-native-router-flux';
//import Profile from './Profile/Profile'

import styles from './styles'

import backgroundImage from '../../../assets/background.png'
import icon from '../../../assets/icon.png'

export class Settings extends React.Component {
    static propTypes = {

    }

    render() {
        return (
            <View style={{ backgroundColor: 'green', flex: 1 }}>
            </View>
        );
    }
}

export default Settings