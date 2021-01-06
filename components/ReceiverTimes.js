import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ReceiverTimes = ({item}) => {
  return (
        <View style={styles.listItemView}>
          <Text style={styles.listItemName}>Name: {item.category} </Text>
          <Text style={styles.listItemName}> Time: {item.time} </Text>
          <Text style={styles.listItemName}> Window: {item.window}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  listItemView: {
    flexDirection: 'row'
  },
  listItemName: {
    fontSize: 16
  }
})

export default ReceiverTimes;