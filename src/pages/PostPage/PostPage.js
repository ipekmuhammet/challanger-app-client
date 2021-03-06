import React from 'react';
import { View, FlatList, ToastAndroid, TextInput, TouchableOpacity, Text } from 'react-native';
import PostItem from '../../components/PostItem'
import { getCommentsByShareId, initializeParse, saveComment, deleteComment } from '../../helpers/parse'
import styles from './styles'

import { profileSrc, randomGuySrc as randomGuy, postIcon, settings } from '../../../assets/images'
import CommentItem from '../../components/CommentItem';
import { ScrollView } from 'react-native-gesture-handler';


export class PostPage extends React.Component {
    static propTypes = {

    }

    state = {
        comments: [],
        text: ''
    }

    UNSAFE_componentWillMount() {
        let details = this.props.navigation.state.params.details
        //getCommentsByShareId('PaWplXWNNk').then(comments => {
        getCommentsByShareId(details.id).then(comments => {
            let arr = []
            for (let comment in comments) {
                arr.push({ comment: { ...comments[comment].attributes, ...{ id: comments[comment].id } } })
            }
            this.setState({ comments: arr })
        })
    }

    manualCommentInsertion(newComment) {
        //let details = this.props.navigation.state.params.details
        this.setState({
            comments: [...this.state.comments, { comment: { ...newComment.attributes, ...{ id: newComment.id } } }]
        })
    }

    manualCommentExtraction = (deletedComment) => {
        this.state.comments.map(({ comment }, index) => {
            if (comment.id === deletedComment.id) {
                let refreshedComments = this.state.comments
                refreshedComments.splice(index, 1)
                this.setState({
                    comments: refreshedComments
                })
            }
        })
    }

    render() {
        let details = this.props.navigation.state.params.details
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ top: 0, left: 0, right: 0, position: 'absolute', bottom: 70 }}>
                    <PostItem logo={randomGuy} details={details} />
                    <View style={{ width: '100%', height: 30, borderBottomWidth: 1, borderTopWidth: 1 }} />
                    <FlatList
                        data={this.state.comments}
                        renderItem={object =>
                            <CommentItem logo={randomGuy} details={object.item.comment} extractComment={this.manualCommentExtraction} />}
                        keyExtractor={item => "Comment:" + details.id + "Detail:" + item.comment.id}
                    />
                </ScrollView>

                <TextInput
                    autoCorrect
                    multiline
                    onChangeText={text => this.setState({ text })}
                    style={{ textAlignVertical: 'top', backgroundColor: 'white', position: 'absolute', borderRadius: 8, bottom: 5, padding: 8, margin: 8, fontSize: 18, left: 5, right: 5, borderWidth: 1, borderColor: '#D1D5DA' }} />
                <TouchableOpacity onPress={() => {
                    saveComment(details.id, '@mamiBaba', this.state.text).then(result => {
                        result ? this.manualCommentInsertion(result) : ToastAndroid.show("Fail", 1)
                    })
                }}
                    style={{ position: 'absolute', right: 5, bottom: 55, borderWidth: 1, backgroundColor: 'white', borderColor: 'black', padding: 10, margin: 10 }}>
                    <Text>Share</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default PostPage