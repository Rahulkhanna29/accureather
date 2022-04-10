/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TextField from './Components/CustomTextInput';
import ListShown from './Components/ListShown';
import ProductScreen from './Components/ProductScren';
import ScreenSecond from './Components/ScreenSecond';
import Testing from './Components/Testing';

AppRegistry.registerComponent(appName, () => ProductScreen);
