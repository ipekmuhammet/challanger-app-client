import React from 'react';
import { View } from 'react-native';
import PostItem from '../../components/PostItem'
import { getSpecificShares } from '../../helpers/parse'
import styles from './styles'

import { profileSrc, randomGuySrc as randomGuy, postIcon } from '../../../assets/images'


export class Shares extends React.Component {
    static propTypes = {

    }

    state = {
        shares: []
    }

    UNSAFE_componentWillMount() {
        getSpecificShares('@mamiBaba').then(shares => {
            let arr = []
            for (let share in shares) {
                arr.push({ share: shares[share].attributes })
            }
            this.setState({ shares: arr })
        })
    }

    render() {
        return <View style={[styles.scene]} >
            {
                this.state.shares.map(el => {
                    let {owner,ownerUserId,detail} = el.share
                    return <PostItem name={owner+" "+ownerUserId} logo={profileSrc} message={detail} />
                })
            }
        </View>
    }
}

export default Shares