import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from "react-native-elements";

class AddTask extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      time: new Date(),
      window: new Date(),
      placeholderName: "Name",
      placeholderTime: "Time",
      placeholderWindow: "Window",
      viewTime: false,
      viewWindow: false
    }
  }

  validateForm = () => {
    if (this.state.name && this.state.viewTime && this.state.viewWindow ) {
      this.props.addTask(this.state)
      this.resetBlankState()
      this.props.setIsVisible(false)
    } else {
      this.showError()
    }
  }

  resetBlankState = () => {
    this.setState({ 
      name: '',
      time: new Date(1598051730000),
      window: new Date(1598051730000),
      placeholderName: "Name",
      placeholderTime: "Time",
      placeholderWindow: "Window",
      viewTime: false,
      viewWindow: false
    })
  }

  showError = () => {
    if (!this.state.name) {
      this.setState({ placeholderName: "Give check-in a name"})
    }
    if (!this.state.viewTime) {
      this.setState({ placeholderTime: "Select a time"})
    }
    if (!this.state.viewWindow) {
      this.setState({ placeholderWindow: "Give a timeframe"})
    }
  }

  onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || new Date(1598051730000);
    this.setState({ time: currentTime })
  }

  onChangeWindow = (event, selectedTime) => {
    const currentTime = selectedTime || new Date(1598051730000);
    this.setState({ window: currentTime })
  }

  render() {
    return (
      <View>
        <TextInput placeholder={this.state.placeholderName} style={styles.input} onChangeText={text => { this.setState({ name: text }) }}/>
        <TextInput placeholder={this.state.placeholderTime} style={styles.input} onFocus={() => this.setState({ viewTime: true }) }>
          {this.state.viewTime && 
            <Text>{this.state.time.getHours().toString()}:{this.state.time.getMinutes().toString()}</Text>}
        </TextInput>
        <TextInput placeholder={this.state.placeholderWindow} style={styles.input} onFocus={() => this.setState({ viewWindow: true }) }>
          {this.state.viewWindow && 
            <Text>{this.state.window.getHours().toString()}:{this.state.window.getMinutes().toString()}</Text>}
        </TextInput>
        {this.state.viewTime && 
          <DateTimePicker value={this.state.time} display='spinner' onChange={this.onChangeTime} is24Hour={true} mode={'time'}/>}
        {this.state.viewWindow && 
          <DateTimePicker value={this.state.window} display='spinner' onChange={this.onChangeWindow} is24Hour={true} mode={'time'}/>}
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

export default AddTask;
