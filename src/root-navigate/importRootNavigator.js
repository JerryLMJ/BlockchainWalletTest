import ImportListPage from '../pages/importPages/import-list';
import ImportDetailPage from '../pages/importPages/import-detail';
import { createStackNavigator } from 'react-navigation';

const ImportStackNavigator = createStackNavigator({
  ImportListPage: ImportListPage,
  ImportDetailPage: ImportDetailPage,
});

export default ImportStackNavigator;