import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { profileSrc, icon } from '../../../assets/images'

let messages = [{
    name: "Mami Baba",
    time: "15:15",
    text: "I made you my bitch!"
},
{
    name: "Dogi Baba",
    time: "15:15",
    text: "Doglandın."
},
{
    name: "Amdin",
    time: "15:15",
    text: "Sa Adminin arkadaşıyım."
}]

let messageObj = (name: string, text: string, time: string): React.ReactNode => {
    return (
        <TouchableOpacity>
            <View style={styles.row}>
                <Image source={profileSrc} style={styles.pic} />
                <View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{name}</Text>
                        <Text style={styles.time}>{time}</Text>
                    </View>
                    <View style={styles.msgContainer}>
                        <Image
                            source={icon}
                            style={{ marginLeft: 15, marginRight: 5, width: 15, height: 15 }}
                        />
                        <Text style={styles.msgTxt}>{text}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default class Messages extends React.Component {
    render(): React.ReactNode {
        return (
            <View style={{ flex: 1 }}>
                {
                    messages.map(message => {
                        return messageObj(message.name, message.text, message.time)
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#f7f7f7',
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    pic: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 15,

    },
    time: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#666',
        fontSize: 12,
    },
});