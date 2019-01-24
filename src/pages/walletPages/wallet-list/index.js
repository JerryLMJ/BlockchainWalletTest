import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default class WalletListPage extends Component {
  static navigationOptions = {
    title: `Wallets`,
  }

  _onPressItem = (item, index) => {
    this.props.navigation.push('WalletDetailPage', { walletName: item });
  };

  listRenderItem = ({item, index}) => (
    <TouchableOpacity 
      style={{ height: 44, flexDirection: 'row', borderBottomColor: '#eee', borderBottomWidth: 1 }} 
      onPress={()=>{this._onPressItem(item, index)}}>
      <Text style={{ marginLeft: 15, lineHeight: 44 }}>{item}</Text>
    </TouchableOpacity>
  );
  keyExtractor = (item, index) => {
    return `${item}+${index}`;
  };

  render() {
    const listData = ['wallet1', 'wallet2', 'wallet3', 'wallet4'];
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1, width: '100%' }} 
          data={listData}
          renderItem={this.listRenderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}