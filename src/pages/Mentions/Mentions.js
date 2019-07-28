import React from 'react';
import { FlatList } from 'react-native';
import PostItem from '../../components/PostItem'
import { getMentionsOwners, getSpecificSharesByOwnerIds } from '../../helpers/parse'
import styles from './styles'

import { randomGuySrc as randomGuy } from '../../../assets/images'


export class Mentions extends React.Component {
    static propTypes = {

    }

    state = {
        mentions: []
    }

    UNSAFE_componentWillMount() {
        getMentionsOwners('@mamiBaba').then(ownerIds => {
            getSpecificSharesByOwnerIds(ownerIds).then(mentions => {
                let arr = []
                for (let mention in mentions) {
                    arr.push({ mention: mentions[mention].attributes })
                }
                this.setState({ mentions: arr })
            })
        })
    }

    render() {
        return <FlatList
            data={this.state.mentions}
            renderItem={object => <PostItem name={object.item.mention.owner} logo={randomGuy} message={object.item.mention.detail} />}
            keyExtractor={(item, index) => { "myMention" + index }} />
    }
}

export default Mentions