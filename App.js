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
      <View>
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
        title="Press Me"/>

        <Button
        onPress={() => {
          Alert.alert('Second Button -> Works Well')
        }}
        title="Checking to See how buttons are rendered in the DOM"/>


        
      </View>
      </ScrollView>
        <Draggable renderShape="circle" renderColor="green" offsetX={20} renderText="Regular Shape" reverse={false} pressDrag={() => {Alert.alert('We have decided that you are the user!')}} />
        <Draggable renderShape="square" renderColor="black" renderText="Boring Shape" reverse={false} pressDrag={()=> {Alert.alert('You are the user!')}}/>
        </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'limegreen',
  },
  text: {
    fontSize: 100,
    color: 'white',
  },

  theButton: {
    color: 'red',
    marginBottom: 100,

  },
  item: {
    marginTop: 50,
    paddingLeft: 12,
  },
  sectionHeader: {
    marginTop: 50,
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
  },
});
