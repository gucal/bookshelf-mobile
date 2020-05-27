import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';

export default class HeaderComp extends Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{text: 'BookShelf Mobile', style: {color: '#fff'}}}
          backgroundColor="#1b2139"
        />
      </View>
    );
  }
}
