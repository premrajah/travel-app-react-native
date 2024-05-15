/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen />;
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'red',
  },
  view: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default App;
