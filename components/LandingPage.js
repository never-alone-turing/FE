import React, {useState} from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
// import { NativeRouter, Switch, Route } from 'react-router-native';
import ListItem from './ListItem';


// const LandingPage = ({ history }) => {
//   const [titles, chooseTitle] = useState([
//     {title: "Caretaker", path: '/caretaker'},
//     {title: "Care Receiver", path: '/carereceiver'}
//   ])
//   return (
//     <>
//       <Text style={styles.text}>Never Alone</Text>
//         <FlatList
//           style={styles.accountButton}
//           data={titles}
//           keyExtractor={(item) => item.title}
//           renderItem={({ item }) =>
//             <ListItem
//               item={item} history={history} />}
//         />
//     </>
//   );
// }

const LandingPage = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Never Alone</Text>
      <TouchableOpacity
        style={styles.careTakerButton}
        onPress={() => navigation.navigate('Caretaker')}
      >
        <Text style={styles.buttonText}>Caretaker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.receiverButton}
        onPress={() => navigation.navigate('Receiver')}
      >
        <Text style={styles.buttonText}>Receiver</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  text: {
   color: 'darkslateblue',
   fontSize: 30,
   alignSelf: "stretch",
   textAlign: "center",
   margin: 45
    // backgroundColor: 'green'
  },

  careTakerButton: {
   color: 'black',
   backgroundColor: 'darkslateblue',
   borderColor: 'black',
   borderRadius: 50,
   margin: 30,
   padding: 10,
   fontSize: 30
 },

 receiverButton: {
  color: 'black',
  backgroundColor: 'darkslateblue',
  borderColor: 'black',
  borderRadius: 50,
  margin: 30,
  padding: 10,
  fontSize: 30
 },

 buttonText: {
   color: 'darkgrey',
   fontSize: 30,
   alignSelf: "stretch",
   textAlign: "center",
   margin: 45
 }
})

export default LandingPage;
