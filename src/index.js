/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Main from './components/main';


import store from './store';

export default class App extends React.Component{

  render(){
    return(
      <Provider store={store}>
        <Main/>
      </Provider>
      
    )
  }
}

