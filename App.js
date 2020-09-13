import {StatusBar} from 'expo-status-bar';
import React from 'react';
import Home from './Screens/Home';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default App;
