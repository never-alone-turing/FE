import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const Times = ({item}) => {
  return (
        <View style={styles.listItemView}>
          <Text style={styles.listItemName}>Name: {item.category}</Text>
          <Text style={styles.listItemName}>Time: {item.time}</Text>
          <Text style={styles.listItemName}>Window: {item.window}</Text>
        </View>
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