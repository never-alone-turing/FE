import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const Times = ({item, deleteTimer}) => {
  return (
      <TouchableOpacity style={styles.listItem} >
        <View style={styles.listItemView}>
          <Button title='X' style={styles.closeButton} onPress={() => deleteTimer(item.id)}/>
          <Text style={styles.listItemName}>Name: {item.name}</Text>
          <Text style={styles.listItemName}>Time: {item.time}</Text>
          <Text style={styles.listItemName}>Window: {item.window}</Text>
        </View>
      </TouchableOpacity>
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
    flexDirection: 'column'
  },
  listItemName: {
    fontSize: 18
  },
  listItemTime: {
    fontSize: 18,
  },
  closeButton: {
    fontSize: 22,
    color: 'firebrick',
    backgroundColor: 'black'
  }
})

export default Times;