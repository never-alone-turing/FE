import React from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";

class AddTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      time: '',
      window: '',
      placeholderName: "Name",
      placeholderTime: "Time",
      placeholderWindow: "Window",
      // placeholder: {
      //   name: "Name",
      //   time: "Time",
      //   window: "Window"
      // }
    }
  }

  onChange = (textKey, textValue) => {
    setText(currentState => {currentState[textKey] = textValue})
  }

  validateForm = () => {
    if (this.state.name && this.state.time && this.state.window) {
      this.props.addTimer(this.state);
      this.setState({ 
        placeholderName: "Name",
        placeholderTime: "Time",
        placeholderWindow: "Window"  
      })
    } else {
      this.showError()
    }
  }

  showError = () => {
    if (!this.state.name) {
      this.setState({ placeholderName: "Give check-in a name"})
    }
    if (!this.state.time) {
      this.setState({ placeholderTime: "Select a time"})
    }
    if (!this.state.window) {
      this.setState({ placeholderWindow: "Give a timeframe"})
    }
  }

  render() {
    return (
      <View>
        <TextInput placeholder={this.state.placeholderName} style={styles.input} onChangeText={text => { this.setState({ name: text }) }}/>
        <TextInput placeholder={this.state.placeholderTime} style={styles.input} onChangeText={text => { this.setState({ time: text }) }}/>
        <TextInput placeholder={this.state.placeholderWindow} style={styles.input} onChangeText={text => { this.setState({ window: text }) }}/>
        <Button buttonStyle={styles.buttonStyle} onPress={() => this.validateForm()} title='Add Item' titleStyle={styles.titleStyle}>
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
