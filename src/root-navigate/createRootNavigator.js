import CreateListPage from '../pages/createPages/create-list';
import CreateDetailPage from '../pages/createPages/create-detail';
import { createStackNavigator } from 'react-navigation';

const CreateStackNavigator = createStackNavigator({
  CreateListPage: CreateListPage,
  CreateDetailPage: CreateDetailPage,
});

export default CreateStackNavigator;