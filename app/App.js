/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Stack from './src/Stack';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
