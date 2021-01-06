import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Checkin from './Checkin';
import ReceiverTimes from './ReceiverTimes';

const Receiver = ({history, navigation}) => {
  const [timers, editTimers] = useState([
    {id: 1, category: "Wake-up", time: '7:00', window: '0:15'},
    {id: 2, category: "Take meds", time: '12:00', window: '1:00'},
    {id: 3, category: "go to sleep", time: '22:00', window: '1:00'}
  ])
  return (
    <View style={styles.careReceiver}>
      <Text>Care Receiver</Text>
      <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Home')}>
        <View style={styles.listItemView}>
          <Text>Back</Text>
        </View>
      </TouchableOpacity>
      <Checkin />
      <FlatList
        data={timers}
        renderItem={({ item }) => (
          <ReceiverTimes item={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
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
  }
})

export default Receiver;
