import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import normalize from 'react-native-normalize';
import { Button } from 'react-native-elements';

const Times = ({item, deleteTimer}) => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity style={styles.listItem} >
        <View style={styles.listItemView}>
          <View style={styles.closeButtonContainer}>
            <Button type="outline" raised={true} title='X' buttonStyle={styles.closeButton} titleStyle={styles.closeButtonText} onPress={() => deleteTimer(item.id)}/>
          </View>
          <Text style={item.response === "Answered" ? styles.answered : styles.unanswered}><Text style={styles.listItemTitle}>Status: </Text>{item.response === "Answered" ? "Checked In" : "Not Checked In"}</Text>
          <Text style={styles.listItemName}><Text style={styles.listItemTitle}>Title: </Text> {item.name}</Text>
          <Text style={styles.listItemName}><Text style={styles.listItemTitle}>Time: </Text> {new Date(item.time).getHours().toString()}:{new Date(item.time).getMinutes().toString()}</Text>
          <Text style={styles.listItemName}><Text style={styles.listItemTitle}>Complete By: </Text> {new Date(item.window).getHours().toString()}:{new Date(item.window).getMinutes().toString()}</Text>
        </View>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: normalize(15),
    marginHorizontal: normalize(7),
    marginVertical: normalize(7),
    backgroundColor: '#f8f8f8',
    borderRadius: normalize(4),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 2.62,
    elevation: 7,
  },
  answered: {
    padding: normalize(5),
    backgroundColor: '#69c986',
    marginVertical: normalize(5),
    fontSize: normalize(25),
  },
  unanswered: {
    padding: normalize(10),
    backgroundColor: '#f5a3af',
    marginVertical: normalize(5),
    fontSize: normalize(25),
  },
  listItemTitle: {
    fontWeight: "bold",
    
  },
  listItemView: {
    flexDirection: 'column'
  },
  listItemName: {
    fontSize: normalize(25),
    marginVertical: normalize(3),
    marginLeft: normalize(5)
  },
  listItemTime: {
    fontSize: normalize(25),
  },
  closeButton: {
    fontSize: normalize(22),
    shadowColor: "#000",
    borderWidth: 1,
    borderRadius: 300 / 2,
    
  },
  closeButtonContainer: {
    width: normalize(40),
    alignSelf: "flex-end",
    marginBottom: normalize(5),
    paddingVertical: 2
  },
  closeButtonText: {
    color: "#CD5C5C",
    fontSize: normalize(20)
  }
})

export default Times;
