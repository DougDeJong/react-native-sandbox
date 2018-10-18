import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput, ScrollView } from 'react-native';
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
      <ScrollView>
        <PizzaTranslator />
        <View style={styles.theButton}>
        <Button
        backgroundColor='green'
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
        </View>

      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
    color: 'white',
  },
  theButton: {
    color: 'red',

  }
});
