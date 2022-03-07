import 'react-native-gesture-handler'
import React, { useState } from 'react';
import MainComponent from './src/MainComponent';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login/Login';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

