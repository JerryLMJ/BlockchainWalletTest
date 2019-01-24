import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CreateDetailPage extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Create ${navigation.getParam('walletName', 'Custom')} Wallet`,
    tabBarVisible: false
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{`Create ${this.props.navigation.getParam('walletName', 'Custom')} Wallet`}</Text>
      </View>
    );
  }
}