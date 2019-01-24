import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class WalletDetailPage extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('walletName', '???'),
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Wallet Detail</Text>
      </View>
    );
  }
}