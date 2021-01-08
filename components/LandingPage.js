import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Button, Header } from 'react-native-elements';
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
      <Header
          containerStyle={{ backgroundColor: 'black', justifyContent: 'space-around', paddingBottom: 10}}
          centerComponent={{ text: 'Never Alone', style: { color: '#fff', fontSize: 30, fontWeight: "bold" } }}
          leftComponent={{ icon: 'home', color: '#fff', size: 40, onPress:() => navigation.navigate('Home')} }
        />
      <Text style={styles.text}>Choose Your Role:</Text>


      <TouchableOpacity
        style={styles.careTakerButton}
        testID="caretaker-button"
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
   color: 'black',
   fontSize: 30,
   alignSelf: "stretch",
   textAlign: "center",
   margin: 45
    // backgroundColor: 'green'
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
   // borderStyle: "solid",
   // borderColor: "black",
   // borderWidth: 3
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
  // borderStyle: "solid",
  // borderColor: "black",
  // borderWidth: 3
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
