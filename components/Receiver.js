import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Header } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import Checkin from './Checkin';
import normalize from 'react-native-normalize';
import {fetcher} from '../API/API.js';


class Receiver extends Component {
  constructor() {
    super();
    this.state = {
      timers: []
    }
  }

  componentDidMount = async() => {
    await this.updateTimes()
  }

  updateTimes = async() => {
    try {
      const timers = await fetcher.allTimers()
      this.setState({ timers: timers.['allCheckins'] })
    } catch(error) {
      console.log("error", error)
    }
  }

  checkIn = async(id) => {
    await fetcher.checkIn(id)
    this.updateTimes()
  }

  render () {
    return (
      <SafeAreaView>
      <View style={styles.careReceiver}>
          <Header
            containerStyle={{ backgroundColor: '#483D8B', justifyContent: 'space-around', paddingBottom: normalize(10) }}
            centerComponent={{ text: 'Never Alone', style: { color: '#fff', fontSize: normalize(30), fontWeight: "bold" } }}
            leftComponent={{ icon: 'home', color: '#fff', size: normalize(40), onPress:() => this.props.navigation.navigate('Home')} }
          />
        <ScrollView snapToAlignment="center" decelerationRate="fast" horizontal >
          {this.state.timers.map((task) => {
            return <View style={styles.task} key={task.id}>
              <Checkin checkIn={this.checkIn} task={task}/>
              <View>
                <Text style={styles.taskCategory}>{task.name}</Text>
                <Text style={styles.taskTime}>Time: {new Date(task.time).getHours().toString()}:{new Date(task.time).getMinutes().toString()}</Text>
              </View>
            </View>
          })}
        </ScrollView>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  careReceiver: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  listItemView: {
    flexDirection: 'row'
  },
  listItemText: {
    fontSize: 18
  },
  task: {
    margin: normalize(30),
    padding: normalize(30),
    borderWidth: normalize(3),
    borderColor: "black",
    borderRadius: normalize(10),
    backgroundColor: '#E0E0E0',
  },
  taskCategory: {
    fontSize: normalize(40),
    alignSelf: 'center'
  },
  taskTime: {
    fontSize: normalize(30),
    alignSelf: 'center',
  }
})

export default Receiver;
