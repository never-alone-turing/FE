import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import normalize from 'react-native-normalize';

class Checkin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: true
    }
  }

  returnMinutes = (timePiece) => {
    var hours = new Date(timePiece).getHours();
    var minutes = new Date(timePiece).getMinutes();
    return hours*60+minutes*1;
  }

  getMinutesNow = () => {
    var timeNow = new Date();
    return timeNow.getHours()*60+timeNow.getMinutes();
  }

  checkinable = () => {
    console.log("this.props.task.response", this.props.task.id, this.props.task.response)
    var now = this.getMinutesNow();
    var start = this.returnMinutes(this.props.task.time);
    var end = this.returnMinutes(this.props.task.window);
    if (start > end) end += 1440;
  
    if ((now > start) && (now < end)) { 
      return this.checkStatus()
    } else {
      return notAvailable.mainBtn 
      this.setState({ isDisabled: true })
    }
  }
  
  checkStatus = () => {
    if(this.props.task.response === 'Answered') {
      return checkedIn.mainBtn;
      this.setState({ isDisabled: true })
    } else {
      return notCheckedIn.mainBtn;
      this.setState({ isDisabled: false })
    }
  }

  workAround = () => {
    if (this.checkinable() === checkedIn.mainBtn) {
      return {
        disabled: true,
        checkedStatus: "Completed!"
      }
    } else if (this.checkinable() === notCheckedIn.mainBtn) {
      return {
        disabled: false,
        checkedStatus: 'Hold to check in'
      }
    } else {
        return {
          disabled: true,
          checkedStatus: 'Not available to check in yet'
        }
    }
  }

  render() {
    return (
      <TouchableOpacity dissabled={this.workAround().disabled} style={this.checkinable()} onLongPress={() => this.props.checkIn(this.props.task.id)}>
        <View>
          <Text style={checkedIn.buttonText}>{this.workAround().checkedStatus}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const checkedIn = StyleSheet.create({
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

const notCheckedIn = StyleSheet.create({
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

const notAvailable = StyleSheet.create({
  mainBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#70cfff',
    height: normalize(225),
    width: normalize(225),
    marginBottom: normalize(40), 
    borderColor: "#70cfff",
    borderWidth: normalize(10),
    borderRadius: 300 / 2
  }
})

export default Checkin;