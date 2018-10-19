import React, {Component} from 'react';
import {View} from 'react-native';

export default class MyLayout extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        width: 500,
        height: 500,
        alignItems: 'center',
        flexDirection: 'ltr',
        padding: 20,
      }}>
        <View style={{
          flex: 1,
          width: 100,
          height: 100,
        }} />
        <View style={{
          flex: 1,
          width: 100,
          height: 100,
          marginHorizontal: 20,
          flexGrow: 1,
        }} />
        <View style={{
          flex: 1,
          width: 100,
          height: 100,
        }} />
      </View>
    );
  }
};