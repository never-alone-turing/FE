import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Caretaker = ({history}) => {
  const [timers, editTitles] = useState([
    {name: "Wake-up", time: '7:00', window: '0:15'},
    {name: "Take meds", time: '12:00', window: '1:00'},
    {name: "go to sleep", time: '22:00', window: '1:00'}
  ])
  return (
    <>
      <Text>Caretaker</Text>
      <TouchableOpacity style={styles.listItem} onPress={() => history.push('/')}>
        <View style={styles.listItemView}>
          <Text>Back</Text>
        </View>
      </TouchableOpacity>
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