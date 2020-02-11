/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import RNTextDetector from './RNTextDetector';
import camera from './ camera';
import gallery from './gallery';
import Edit from './Edit';
import MyForm from './MyForm';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    RNTextDetector: RNTextDetector,
    camera: camera,
    gallery: gallery,
    Edit:Edit,
    MyForm:MyForm
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);