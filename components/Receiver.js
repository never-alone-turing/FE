import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Header } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import Checkin from './Checkin';
import normalize from 'react-native-normalize';

class Receiver extends Component {
  constructor() {
    super();
    this.state = {
      timers: [
        {id: 1, category: "Wake-up", time: '7:00', window: '0:15', completed: "false"},
        {id: 2, category: "Take meds", time: '12:00', window: '1:00'},
        {id: 3, category: "go to sleep", time: '22:00', window: '1:00'}
      ]
    }
  }
  
  render () {
    return (
      <SafeAreaView>
      <View style={styles.careReceiver}>
          <Header
            containerStyle={{ backgroundColor: 'black', justifyContent: 'space-around', paddingBottom: normalize(10) }}
            centerComponent={{ text: 'Never Alone', style: { color: '#fff', fontSize: normalize(30), fontWeight: "bold" } }}
            leftComponent={{ icon: 'home', color: '#fff', size: normalize(40), onPress:() => this.props.navigation.navigate('Home')} }
          />
        <ScrollView snapToAlignment="center" decelerationRate="fast" horizontal >
          {this.state.timers.map((task) => {
            return <View style={styles.task} key={task.id}>
              <Checkin />
              <View>
                <Text style={styles.taskCategory}>{task.category}</Text>
                <Text style={styles.taskTime}>{task.time}</Text>
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
    margin: 30,
    padding: 30,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10, 
    backgroundColor: '#E0E0E0',
  },
  taskCategory: {
    fontSize: 40,
    alignSelf: 'center'
  },
  taskTime: {
    fontSize: 30,
    alignSelf: 'center',
  }
})

export default Receiver;
