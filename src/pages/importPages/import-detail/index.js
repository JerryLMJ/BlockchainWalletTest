import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ImportDetailPage extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: `Import ${navigation.getParam('walletName', 'Custom')} Wallet`,
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{`Import ${this.props.navigation.getParam('walletName', 'Custom')} Wallet`}</Text>
      </View>
    );
  }
}