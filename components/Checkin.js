import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Checkin extends React.Component {
  constructor() {
    super()
    this.state = {
      currentStyle: styles.mainBtn,
      // dailyTimes will GET fetched, the below code is just filler data for now
      dailyTimes: [
        {id: 1, name: "Wake-up", time: '7:00', window: '0:15'},
        {id: 2, name: "Take meds", time: '12:00', window: '1:00'},
        {id: 3, name: "go to sleep", time: '22:00', window: '1:00'}
      ]
    }
  }

  changeDecider = () => {
    console.log(this.state.currentStyle)
    if (this.state.currentStyle === styles.mainBtn) {
      this.state.currentStyle = styles2.mainBtn
    } else {
      this.state.currentStyle = styles.mainBtn
    }
    this.forceUpdate()
  }

  render() {
    return (
      <TouchableOpacity style={this.state.currentStyle} onPress={() => this.changeDecider()}>
        <View>
          <Text>Touch me</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#69c986',
    height: 300,
    width: 300,
    borderRadius: 300 / 2
  }
})

const styles2 = StyleSheet.create({
  mainBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5a3af',
    height: 300,
    width: 300,
    borderRadius: 300 / 2
  }
})

export default Checkin;