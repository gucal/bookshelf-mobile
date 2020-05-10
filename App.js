import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Scene, Router, Stack} from 'react-native-router-flux';

import {Home, Detail} from './src/screens/';
import Header from './src/components/Header'
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Stack hideNavBar key="root">
            <Scene key="home" component={Home} />
            <Scene key="detail" component={Detail} />
          </Stack>
        </Router>
      </>
      
    );
  }
}

const styles = StyleSheet.create({});
