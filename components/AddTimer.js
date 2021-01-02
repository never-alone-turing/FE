import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const AddTimer = ({item, deleteTimer}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput placeholder="Name" style={StyleSheet.input}/>
      <TextInput placeholder="Time" style={StyleSheet.input}/>
      <TextInput placeholder="Window" style={StyleSheet.input}/>
      <TouchableOpacity style={styles.btm}>
      <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddTimer;
