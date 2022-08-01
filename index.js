/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React from 'react';

import WelcomeScreen from './screen/login';

AppRegistry.registerComponent(appName, () => () => <WelcomeScreen x={1} y={2} />);
