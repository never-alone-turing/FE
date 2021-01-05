import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Checkin = () => {

  return (
      <TouchableOpacity style={styles.mainBtn} onPress={console.log('yay')}>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainBtn: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2
  }
})

export default Checkin;