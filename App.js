import React, { useState } from 'react';
import MainComponent from './src/MainComponent';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return(
    <Provider store={store}>
    <MainComponent/>  
    </Provider>
  );
}

