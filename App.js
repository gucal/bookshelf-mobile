import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Scene, Router, Stack} from 'react-native-router-flux';

import {Provider} from 'mobx-react';

import store from './src/store';

import {Home, Detail, SignUp, SignIn} from './src/screens/';
import Header from './src/components/Header';
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Provider {...store}>
          <Router>
            <Stack hideNavBar key="root">
              <Scene key="signIn" component={SignIn} />
              <Scene key="home" component={Home} />
              <Scene key="detail" component={Detail} />
              <Scene key="signUp" component={SignUp} />
            </Stack>
          </Router>
        </Provider>
      </>
    );
  }
}

const styles = StyleSheet.create({});
