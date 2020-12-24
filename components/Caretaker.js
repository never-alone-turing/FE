import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Caretaker = ({history}) => {
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