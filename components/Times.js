import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import normalize from 'react-native-normalize';

const Times = ({item, deleteTimer}) => {
  return (
      <TouchableOpacity style={styles.listItem} >
        <View style={styles.listItemView}>
          <Button title='X' buttonStyle={styles.closeButton} titleStyle={styles.closeButtonText} onPress={() => deleteTimer(item.id)}/>
          <Text style={item.response === "Answered" ? styles.answered : styles.unanswered}>Status: {item.response === "Answered" ? "Checked In" : "Not Checked In"}</Text>
          <Text style={styles.listItemName}>Name: {item.name}</Text>
          <Text style={styles.listItemName}>Time: {new Date(item.time).getHours().toString()}:{new Date(item.time).getMinutes().toString()}</Text>
          <Text style={styles.listItemName}>Window: {new Date(item.window).getHours().toString()}:{new Date(item.window).getMinutes().toString()}</Text>
          
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: normalize(15),
    marginHorizontal: normalize(5),
    marginVertical: normalize(2),
    backgroundColor: '#f8f8f8',
    borderWidth: normalize(3),   
    borderColor: "#eee"
  },
  answered: {
    padding: normalize(15),
    backgroundColor: '#69c986',
    borderBottomWidth: normalize(1),   
    borderColor: "#eee",
    marginVertical: normalize(5),
    fontSize: normalize(20)
  },
  unanswered: {
    padding: normalize(7),
    backgroundColor: '#f5a3af',
    borderBottomWidth: normalize(1),   
    borderColor: "#eee",
    marginVertical: normalize(5),
    fontSize: normalize(20)
  },
  listItemView: {
    flexDirection: 'column'
  },
  listItemName: {
    fontSize: normalize(25)
  },
  listItemTime: {
    fontSize: normalize(25),
  },
  closeButton: {
    fontSize: normalize(22),
  },
  closeButtonText: {
    fontSize: normalize(30)
  }
})

export default Times;