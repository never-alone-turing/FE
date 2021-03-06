import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Header } from 'react-native-elements';
import normalize from 'react-native-normalize';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container} testID="lp-view">
      <Header
        containerStyle={{ backgroundColor: '#483D8B', justifyContent: 'space-around', paddingBottom: 10}}
        centerComponent={{ text: 'Never Alone', style: { color: '#fff', fontSize: normalize(30), fontWeight: "bold" } }}
      />
      <View style={styles.box}>
        <Text style={styles.text}>Choose Your Role:</Text>
        <TouchableOpacity style={styles.careTakerButton} testID="lp-caretaker-button" onPress={() => navigation.navigate('Caretaker')} >
          <ImageBackground source={require('../images/caretaker.jpg')} style={styles.backgroundImage} >
            <Text style={styles.buttonText}>Caretaker</Text>
          < /ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.receiverButton} testID="lp-receiver-button" onPress={() => navigation.navigate('Receiver')} >
          <ImageBackground source={require('../images/receiver.jpg')} style={styles.backgroundImage} >
            <Text style={styles.buttonText}>Receiver</Text>
          < /ImageBackground>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    // width: normalize(300),
    // height: normalize(300),
    // ** I DON'T THINK WE ACTUALLY NEED THIS DIV **
  },
  text: {
   color: 'black',
   fontSize: normalize(30),
   alignSelf: "stretch",
   textAlign: "center",
   margin: normalize(45)
  },

  careTakerButton: {
   color: 'black',
   backgroundColor: '#70cfff',
   borderColor: 'black',
   borderRadius: normalize(10),
   margin: normalize(20),
   padding: normalize(10),
   fontSize: normalize(25),
   elevation: 8
 },

 receiverButton: {
  color: 'black',
  backgroundColor: '#9192ca',
  borderColor: 'black',
  borderRadius: normalize(10),
  margin: normalize(20),
  padding: normalize(10),
  fontSize: normalize(25),
  elevation: 8
 },

 buttonText: {
   color: 'black',
   fontSize: normalize(50),
   alignSelf: "stretch",
   textAlign: "center",
   margin: normalize(20)
 },

 backgroundImage: {
   borderColor: "black"
 }
})

export default LandingPage;
