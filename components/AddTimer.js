import React from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";

class AddTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      time: '',
      window: ''
    }
  }

  onChange = (textKey, textValue) => {
    setText(currentState => {currentState[textKey] = textValue})
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Name" style={styles.input} onChangeText={text => { this.setState({ name: text }) }}/>
        <TextInput placeholder="Time" style={styles.input} onChangeText={text => { this.setState({ time: text }) }}/>
        <TextInput placeholder="Window" style={styles.input} onChangeText={text => { this.setState({ window: text }) }}/>
        <Button buttonStyle={styles.buttonStyle} onPress={() => this.props.addTimer(this.state)} title='Add Item' titleStyle={styles.titleStyle}>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 25
  },
  buttonStyle: {
    backgroundColor: "black", 
    width: 200, 
    alignSelf: "center"
  },
  titleStyle: {
    fontSize: 30
  }
})

export default AddTimer;
