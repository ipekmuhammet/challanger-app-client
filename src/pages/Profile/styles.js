
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: '100%',
        height: 370,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    description: {
        width: '100%',
        height: 220,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    descriptionText: {
        color: 'white',
        justifyContent: 'center'
    },
    username: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginTop:8
    },
    userId: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        paddingBottom: 5,
        marginBottom: 5,
        borderColor: '#f7f7f7',
        borderBottomWidth: 1,
    },
    followers: {
        alignSelf: 'flex-start',
        position: 'absolute',
        top: 5,
        padding: 5,
        margin: 5
    },
    followerText: {
        color: 'white',
        fontSize: 15,
        margin: 4
    },
    interact: {
        alignSelf: 'flex-end',
        position: 'absolute',
        padding: 5,
        top: 5,
        margin: 5
    },
    description: {
        alignSelf: 'center',
        position: 'absolute',
        padding: 5,
        margin: 5
    },
    name: {
        fontSize: 22,
        color: 'white'
    },
    backgroundPhoto: {
        height: 150,
        width: '100%',
        resizeMode: 'cover',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    information: {
        height: 220,
        textAlign: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    scene: {
        flex: 1
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        margin: 5,
        marginBottom: 15,
        borderWidth: 4,
        borderColor: 'white',
        alignSelf: 'center',
        position: 'absolute'
    },
    ///////////////////
    channel: {
        flexDirection: 'row',
        padding: 5,
        margin: 5,
        borderColor: '#CCCCCC',
        borderBottomWidth: 1,
    },
    shareItem:{
        flexDirection: 'column',
        padding: 5,
        margin: 5,
        borderColor: '#CCCCCC',
        borderBottomWidth: 1,
    },
    shareDescription:{
        flexDirection: 'row',
        padding: 5,
        margin: 5
    },
    channelLogo: {
        width: 80,
        height: 80,
        margin: 5,
        padding: 5,
        borderRadius: 50
    },
    channelName: {
        fontSize: 18,
        paddingHorizontal: 15,
        color: 'rgba(69,90,100,.95)',
        margin: 5,
        padding: 5
    },
    message: {
        fontSize: 16,
        paddingHorizontal: 15,
        color: '#EDEDED',
        margin: 5,
        padding: 5
    },
    //
    button: {
        padding: 8,
        marginHorizontal: 8,
        marginBottom: 4,
        backgroundColor: '#61AFEF',
        borderRadius: 12
    }
});