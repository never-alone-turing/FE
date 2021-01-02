import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Times from './Times';

const Caretaker = ({history}) => {
  const [timers, editTimers] = useState([
    {id: 1, name: "Wake-up", time: '7:00', window: '0:15'},
    {id: 2, name: "Take meds", time: '12:00', window: '1:00'},
    {id: 3, name: "go to sleep", time: '22:00', window: '1:00'}
  ])
  const deleteTimer = (id) => {
    editTimers(prevTimers => {
      return prevTimers.filter(timer => timer.id != id)
    })
  }
  return (
    <>
      <Text>Caretaker</Text>
      <TouchableOpacity style={styles.listItem} onPress={() => history.push('/')}>
        <View style={styles.listItemView}>
          <Text>Back</Text>
        </View>
      </TouchableOpacity>
      <FlatList
          data={timers}
          renderItem={({ item }) => <Times item={item} deleteTimer={deleteTimer}/>} 
        />
    </>
  );
}

const styles = StyleSheet.create({
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

export default Caretaker;