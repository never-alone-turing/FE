import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LandingPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {color: 'darkslateblue',
   fontSize: 30,
    backgroundColor: 'green'
  }
})
