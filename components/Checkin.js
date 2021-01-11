import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import normalize from 'react-native-normalize';

class Checkin extends React.Component {
  constructor(props) {
    super(props)
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

  //
  returnMinutes = (timePiece) => {
    var hours = new Date(timePiece).getHours();
    var minutes = new Date(timePiece).getMinutes();
    console.log("typeof hours", typeof hours)
    console.log("typeof minutes", typeof minutes)
    return hours*60+minutes*1;
  }

  // twentyFour = () => {
  //   if(typeof timePiece === 'string') {
  //     var time = timePiece.split(':');
  //     return time[0]*60+time[1]*1;
  //   }
  // }
  // function getMinutes(str) {
  //   var time = str.split(':');
  //   return time[0]*60+time[1]*1;
  // }

  getMinutesNow = () => {
    var timeNow = new Date();
    return timeNow.getHours()*60+timeNow.getMinutes();
  }

  checkinable = () => {
    var now = this.getMinutesNow();
    var start = this.returnMinutes(this.props.task.time);
    var end = this.returnMinutes(this.props.task.window);
    console.log("this.props.task", this.props.task)
    console.log("start", start)
    console.log("end", end)
    if (start > end) end += 1440;
  
    if ((now > start) && (now < end)) { 
      return styles2.mainBtn// your code here
    } else {
      return styles.mainBtn // your code here
    }
  }
  //


  render() {
    return (
      <TouchableOpacity style={this.checkinable()} onLongPress={() => this.checkinable()}>
        <View>
          <Text style={styles.buttonText}>Hold to complete task.</Text>
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
    height: normalize(225),
    width: normalize(225),
    marginBottom: normalize(40), 
    borderColor: "#69c986",
    borderWidth: normalize(10),
    borderRadius: 300 / 2
  },
  buttonText: {
    fontSize: normalize(25),
    textAlign: 'center'
  }
})

const styles2 = StyleSheet.create({
  mainBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5a3af',
    height: normalize(225),
    width: normalize(225),
    marginBottom: normalize(40), 
    borderColor: "#f5a3af",
    borderWidth: normalize(10),
    borderRadius: 300 / 2
  }
})

export default Checkin;