/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React from 'react';

import App from './App';
import WelcomeScreen from './screen/welcome';
import Login from './screen/login';

AppRegistry.registerComponent(appName, () => App);
