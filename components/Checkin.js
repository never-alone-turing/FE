import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Checkin extends React.Component {
  constructor() {
    super()
    this.state = {
      currentStyle: styles.mainBtn
    }
  }

  changeDecider = () => {
    if (this.state.currentStyle === styles.mainBtn) {
      this.state.currentStyle = styles2.mainBtn
    } else {
      this.state.currentStyle = styles.mainBtn
    }
    this.forceUpdate()
  }

  render() {
    return (
      <TouchableOpacity style={this.state.currentStyle} onLongPress={() => this.changeDecider()}>
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