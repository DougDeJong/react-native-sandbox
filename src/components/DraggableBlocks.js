import Draggable from 'react-native-draggable';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';


export default class DraggableBlocks extends Component {
  render() {
    return (
      <View >
          <Draggable renderSize={56} renderColor='black' offsetX={-100} offsetY={-200} renderText='A' pressDrag={()=>alert('touched!!')}/> 
          <Draggable reverse={false} renderColor='red' renderShape='square' offsetX={0} offsetY={0} renderText='B'/>
          <Draggable/>
      </View>
  );

  }
}

AppRegistry.registerComponent('AwesomeProject', () => DraggableBlocks);