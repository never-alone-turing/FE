import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import {Dropdown} from 'react-native-dropdown';

const Times = ({item}) => {
  const changeView = () => {
    console.log(styles.listItemTime.display)
    // if (styles.listItemTime.display === 'none') {
    //   styles.listItemTime = {'display': 'flex'}
    // } else {
    //   styles.listItemTime = {'display': 'none'}
    // }
    // this.forceUpdate()
  }
  return (
    <>
      <TouchableOpacity style={styles.listItem} onPress={() => changeView()}>
        <View style={styles.listItemView}>
          <Text style={styles.closeButton}>X</Text>
          <Text style={styles.listItemName}>Name: {item.name}</Text>
          <Text style={styles.listItemName}>Time: {item.time}</Text>
          <Text style={styles.listItemName}>Window: {item.window}</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.listItem} >
        <View style={styles.listItemView}>
          <Text style={styles.listItemName}>{item.name}</Text>
          <Text style={styles.listItemTime}>{item.time}</Text>
          <Text style={styles.listItemText}>{item.window}</Text>
        </View>
      </TouchableOpacity> */}
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
    flexDirection: 'column'
  },
  listItemName: {
    fontSize: 18
  },
  listItemTime: {
    fontSize: 18,
    // display: 'flex'
  },
  closeButton: {
    fontSize: 22,
    color: 'firebrick'
  }
})

export default Times;