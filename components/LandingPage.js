import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Header } from 'react-native-elements';

const LandingPage = ({ navigation }) => {
  return (
    <View>
      <Header
          containerStyle={{ backgroundColor: 'black', justifyContent: 'space-around', paddingBottom: 10}}
          centerComponent={{ text: 'Never Alone', style: { color: '#fff', fontSize: 30, fontWeight: "bold" } }}
          leftComponent={{ icon: 'home', color: '#fff', size: 40, onPress:() => navigation.navigate('Home')} }
        />
      <Text style={styles.text}>Choose Your Role:</Text>
      <TouchableOpacity style={styles.careTakerButton} onPress={() => navigation.navigate('Caretaker')} >
        <Text style={styles.buttonText}>Caretaker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.receiverButton} onPress={() => navigation.navigate('Receiver')} >
        <Text style={styles.buttonText}>Receiver</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  text: {
   color: 'black',
   fontSize: 30,
   alignSelf: "stretch",
   textAlign: "center",
   margin: 45
  },

  careTakerButton: {
   color: 'black',
   backgroundColor: '#70cfff',
   borderColor: 'black',
   borderRadius: 10,
   margin: 30,
   padding: 10,
   fontSize: 30,
   elevation: 8
 },

 receiverButton: {
  color: 'black',
  backgroundColor: '#9192ca',
  borderColor: 'black',
  borderRadius: 10,
  margin: 30,
  padding: 10,
  fontSize: 30,
  elevation: 8
 },

 buttonText: {
   color: 'black',
   fontSize: 50,
   alignSelf: "stretch",
   textAlign: "center",
   margin: 20
 }
})

export default LandingPage;
