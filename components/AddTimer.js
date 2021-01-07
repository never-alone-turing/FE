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
      placeholder: {
        name: "Name",
        time: "Time",
        window: "Window"
      }
    }
  }

  onChange = (textKey, textValue) => {
    setText(currentState => {currentState[textKey] = textValue})
  }

  validateForm = () => {
    if (this.state.name && this.state.time && this.state.window) {
      this.props.addTimer(this.state);
      this.setState({ 
        placeholder: {
          name: "Name",
          time: "Time",
          window: "Window"
        }
      })
    } else {
      this.showError()
    }
  }

  showError = () => {
    if (!this.state.name) {
      this.setState({ placeholder.name: "Give check-in a name"})
    }
    if (!this.state.time) {
      this.setState({ placeholder.time: "Select a time"})
    }
    if (!this.state.name) {
      this.setState({ placeholder.window: "Give a timeframe"})
    }
  }

  render() {
    return (
      <View>
        <TextInput placeholder={this.state.placeholder.name} style={styles.input} onChangeText={text => { this.setState({ name: text }) }}/>
        <TextInput placeholder={this.state.placeholder.time} style={styles.input} onChangeText={text => { this.setState({ time: text }) }}/>
        <TextInput placeholder={this.state.placeholder.window} style={styles.input} onChangeText={text => { this.setState({ window: text }) }}/>
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
