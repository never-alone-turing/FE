import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Times = ({item, history}) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => history.push(item.path)}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.title}</Text>
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
    flexDirection: 'row'
  },
  listItemText: {
    fontSize: 18
  }
})

export default Times;