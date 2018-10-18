import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput, ScrollView, SectionList } from 'react-native';
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
        <SectionList sections={[ {title: 'D', data: ['Doug','Derek','Dangerous','Dogs']}, {title: 'E', data: ['Erick','Elephant','Everywhere']}, {title: 'Artists', data: ['Salvador Dali','Rembrandt','im sure some other dudes too']},
        ]}  renderItem= {({item}) => <Text style={styles.item}>{item}</Text>} 
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>} 
        keyExtractor={(item, index) => index} />
        <PizzaTranslator />
        <View style={styles.theButton}>
        <Button
        backgroundColor='green'
  onPress={() => {
    Alert.alert('You tapped the button AGAIN!!!!!!!!!!');
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

  },
  item: {
    marginTop: 50,
  },
  sectionHeader: {
    marginTop: 50,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
  },
});
