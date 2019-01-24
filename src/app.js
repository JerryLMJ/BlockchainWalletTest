import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CreateRootNavigator from './root-navigate/createRootNavigator';
import ImportRootNavigator from './root-navigate/importRootNavigator';
import WalletRootNavigator from './root-navigate/walletRootNavigator';


const TabNavigator = createBottomTabNavigator({
  CreateNavigator: CreateRootNavigator,
  ImportNavigator: ImportRootNavigator,
  WalletNavigator: WalletRootNavigator,
},
{
  
});

export default createAppContainer(TabNavigator);