import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Universal React with butts Expo</Text>
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
