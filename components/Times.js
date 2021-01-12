import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import normalize from 'react-native-normalize'

const Times = ({item, deleteTimer}) => {
  return (
      <TouchableOpacity style={styles.listItem} >
        <View style={styles.listItemView}>
          <TouchableOpacity title='X' style={styles.closeButton} onPress={() => deleteTimer(item.id)}>
            <Text style={styles.closeButton}>X</Text>
          </ TouchableOpacity>
          <Text style={styles.listItemName}>Name: {item.name}</Text>
          <Text style={styles.listItemName}>Time: {new Date(item.time).getHours().toString()}:{new Date(item.time).getMinutes().toString()}</Text>
          <Text style={styles.listItemName}>Window: {new Date(item.window).getHours().toString()}:{new Date(item.window).getMinutes().toString()}</Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 2,
    borderColor: "darkgrey"
  },
  listItemView: {
    flexDirection: 'column',
  },
  listItemName: {
    fontSize: 18
  },
  listItemTime: {
    fontSize: 18,
  },
  closeButton: {
    fontSize: normalize(30),
    textAlign: "center",
    color: 'indianred',
    backgroundColor: 'darkslateblue'
  }
})

export default Times;
