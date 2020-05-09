import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements'

export default class HeaderComp extends Component {
  render() {
    return (
      <View>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'BookShelf', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>
    );
  }
}


