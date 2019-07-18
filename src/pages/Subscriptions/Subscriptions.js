import React from 'react';
import { View, FlatList, Text } from 'react-native';
import users from './users.json'

import SubscriptionChannelItem from '../../components/SubscriptionChannelItem'

export class Subscriptions extends React.Component {
    static propTypes = {

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    data={users}
                    renderItem={({ item }) => <SubscriptionChannelItem
                        channelName={item.name}
                        channelLogo={require('../../../assets/icon.png')} />}
                    keyExtractor={(user) => user.id.toString()}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#E3E3E3' }} />}
                />
            </View>
        );
    }
}
export default Subscriptions