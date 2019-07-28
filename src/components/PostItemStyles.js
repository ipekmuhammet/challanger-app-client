
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    channel: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingBottom: 5,
        marginLeft: 5,
        marginBottom: 5,
        borderColor: '#CCCCCC',
        borderBottomWidth: 1,
    },
    shareItem: {
        flexDirection: 'column',
        padding: 5,
        margin: 5,
        borderColor: '#CCCCCC',
        borderBottomWidth: 1,
    },
    shareDescription: {
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