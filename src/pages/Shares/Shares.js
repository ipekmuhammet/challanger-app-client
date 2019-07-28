import React from 'react';
import { View, FlatList } from 'react-native';
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
        return <FlatList
            data={this.state.shares}
            renderItem={object => <PostItem name={object.item.share.owner} logo={randomGuy} message={object.item.share.detail} />}
            keyExtractor={(item, index) => { "myShare" + index }} />
    }
}

export default Shares