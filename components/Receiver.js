import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Header } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import Checkin from './Checkin';
import ReceiverTimes from './ReceiverTimes';

const Receiver = ({history, navigation}) => {
  const [timers, editTimers] = useState([
    {id: 1, category: "Wake-up", time: '7:00', window: '0:15'},
    {id: 2, category: "Take meds", time: '12:00', window: '1:00'},
    {id: 3, category: "go to sleep", time: '22:00', window: '1:00'}
  ])
  return (
    <SafeAreaView>
    <View style={styles.careReceiver}>
        <Header
          containerStyle={{ backgroundColor: 'black', justifyContent: 'space-around', paddingBottom: 10}}
          centerComponent={{ text: 'Never Alone', style: { color: '#fff', fontSize: 30, fontWeight: "bold" } }}
          leftComponent={{ icon: 'home', color: '#fff', size: 40, onPress:() => navigation.navigate('Home')} }
        />
      {/* <Checkin style={styles.checkinButton} /> */}
      <ScrollView snapToAlignment="center" decelerationRate="fast" horizontal>
        {timers.map((task) => {
          return <View style={styles.task}>
            <Text style={styles.taskCategory}>{task.category}</Text>
            <Text style={styles.taskTime}>{task.time}</Text>
          </View>
        })}
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  careReceiver: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    margin: 20
  },
  taskCategory: {
    fontSize: 40,
  },
  taskTime: {
    fontSize: 30
  }
})

export default Receiver;
