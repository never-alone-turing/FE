import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from "react-native-elements";

class AddTask extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      time: new Date(1598051730000),
      window: new Date(1598051730000),
      // time: new Date(1598051730000),
      // window: new Date(1598051730000),
      placeholderName: "Name",
      placeholderTime: "Time",
      placeholderWindow: "Window",
    }
  }

  // const [date, setDate] = useState(new)

  // onChange = (textKey, textValue) => {
  //   setText(currentState => {currentState[textKey] = textValue})
  // }

  validateForm = () => {
    if (this.state.name && this.state.time && this.state.window) {
      this.props.addTimer(this.state)
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
      placeholderWindow: "Window"  
    })
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

  onChangeTime = (event, selectedTime) => {
    console.log('before', this.state.time) 
    const currentTime = selectedTime || new Date(1598051730000);
    this.setState({ time: currentTime })
    console.log('after', this.state.time) 
  }

  onChangeWindow = (event, selectedTime) => {
    console.log("what does selectedTime look like", selectedTime.getHours().toString(), typeof selectedTime) 
    const currentTime = selectedTime || new Date(1598051730000);
    this.setState({ window: currentTime })
  }

  render() {
    return (
      <View>
        <TextInput placeholder={this.state.placeholderName} style={styles.input} onChangeText={text => { this.setState({ name: text }) }}/>
        <DateTimePicker value={this.state.time} display='spinner' onChange={this.onChangeTime} is24Hour={true} mode={'time'}/>
        <DateTimePicker value={this.state.window} display='spinner' onChange={this.onChangeWindow} is24Hour={true} mode={'time'}/>
        {/* <DateTimePicker value={this.state.time} name={'time'} display='clock' onChange={time => { this.setState({ time }) }} mode={'time'}/> */}
        {/* <DateTimePicker value={this.state.time} name={'window'} display='clock' onChange={time => { this.setState({ window: time }) }} mode={'time'}/> */}
        {/* <TextInput placeholder={this.state.placeholderTime} style={styles.input} onChangeText={text => { this.setState({ time: text }) }}/>
        <TextInput placeholder={this.state.placeholderWindow} style={styles.input} onChangeText={text => { this.setState({ window: text }) }}/> */}
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
