import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Checkin from './Checkin';

const Receiver = ({history, navigation}) => {
  return (
    <View style={styles.careReceiver}>
      <Text>Care Receiver</Text>
      <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Home')}>
        <View style={styles.listItemView}>
          <Text>Back</Text>
        </View>
      </TouchableOpacity>
      <Checkin />
    </View>
  );
}

const styles = StyleSheet.create({
  careReceiver: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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

export default Receiver;
