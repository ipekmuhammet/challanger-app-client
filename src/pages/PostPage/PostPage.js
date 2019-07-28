import React from 'react';
import { View, FlatList, ToastAndroid } from 'react-native';
import PostItem from '../../components/PostItem'
import { getCommentsByShareId } from '../../helpers/parse'
import styles from './styles'

import { profileSrc, randomGuySrc as randomGuy, postIcon } from '../../../assets/images'
import CommentItem from '../../components/CommentItem';


export class PostPage extends React.Component {
    static propTypes = {

    }

    state = {
        comments: []
    }

    UNSAFE_componentWillMount() {
        let details = this.props.navigation.state.params.details
        getCommentsByShareId(details.id).then(comments => {
            let arr = []
            for (let comment in comments) {
                arr.push({ comment: { ...comments[comment].attributes, ...{ id: comments[comment].id } } })
            }
            this.setState({ comments: arr })
        })
    }

    render() {
        let details = this.props.navigation.state.params.details
        return (
            <View>
                <PostItem logo={randomGuy} details={details} />
                <View style={{ width: '100%', height: 30, backgroundColor: 'black' }} />
                <FlatList
                    data={this.state.comments}
                    renderItem={object => <CommentItem logo={randomGuy} details={object.item.comment} /> }
                    keyExtractor={item => { "Share:" + details.id + "Detail:" + item.id }} />
            </View>
        )
    }
}

export default PostPage