import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import registerNNPushToken from 'native-notify';
import { Provider } from 'react-redux';

import Home from './src/screens/Home';
import ChosenTask from './src/screens/ChosenTask';
import { store } from './src/features/store';

type RootStackParamList = {
  Home: undefined;
  ChosenTask: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();


export default function App() {
  // push notifications
  registerNNPushToken(4733, 'mxSPIXEpud0NRbIBOk3Ube');
  // registerNNPushToken(your-app-id, 'your-app-token');
  // get App ID and App Token from NativeNotify.com


  // navigation
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />

          <Stack.Screen name="ChosenTask" component={ChosenTask} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
