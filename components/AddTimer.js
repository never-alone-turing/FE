import React from 'react';
import { View, StyleSheet, TextInput, Button } from "react-native";

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
        <Button style={styles.btm} onPress={() => this.props.addTimer(this.state)} title='Add Item'>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddTimer;