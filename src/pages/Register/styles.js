
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    container: {
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    socialMediaContainer: {
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    row: {
        padding: 5,
        textAlign: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    button: {
        padding: 5,
        margin: 5,
        flex: 1,
        borderRadius: 12,
        backgroundColor: 'rgba(00,00,255,0.18)'
    },
    text: {
        padding: 5,
        margin: 5,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: 'sans-serif'
    },
    input: {
        padding: 10,
        margin: 5,
        fontSize: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 25,
        paddingLeft: 20,
        flex: 1,
        color: 'white',
        fontFamily: 'sans-serif'
    },
    icon: {
        width: 80,
        height: 80
    }
});