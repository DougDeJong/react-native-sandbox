import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { white } from 'ansi-colors';
import { AppRegistry } from 'react-native';
import HelloWorld from './src/components/HelloWorld';
import Bananas from './src/components/Bananas';


import Draggable from 'react-native-draggable';
import PizzaTranslator from './src/components/PizzaTranslator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PizzaTranslator />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'limegreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
    color: 'white',
  }
});
