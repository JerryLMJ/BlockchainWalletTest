import WalletListPage from '../pages/walletPages/wallet-list';
import WalletDetailPage from '../pages/walletPages/wallet-detail';
import { createStackNavigator } from 'react-navigation';

const WalletStackNavigator = createStackNavigator({
  WalletListPage: WalletListPage,
  WalletDetailPage: WalletDetailPage,
});

export default WalletStackNavigator;