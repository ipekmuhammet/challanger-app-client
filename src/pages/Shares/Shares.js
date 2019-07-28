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
                arr.push({ share: { ...shares[share].attributes, ...{ id: shares[share].id } } })
            }
            this.setState({ shares: arr })
        })
    }

    render() {
        return <FlatList
            data={this.state.shares}
            renderItem={object => <PostItem logo={randomGuy} details={object.item.share} />}
            keyExtractor={item => { "myShare" + item.id }} />
    }
}

export default Shares