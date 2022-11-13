import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Home from './src/screens/Home';
import QRCode from './src/screens/QRCode';
import { store } from './src/features/store';
import Scanner from './src/screens/Scanner';

type RootStackParamList = {
  Home: undefined;
  QRCode: undefined;
  Scanner:undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  // navigation
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="Scanner" component={Scanner} />

          <Stack.Screen name="QRCode" component={QRCode} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
