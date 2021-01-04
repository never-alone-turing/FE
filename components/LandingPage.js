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
      <Button 
        title="Caretaker"
        onPress={() => navigation.navigate('Caretaker')}
      />
        <Button 
        title="Receiver"
        onPress={() => navigation.navigate('Receiver')}
      />
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
  accountButton: {
   color: 'black',
   borderColor: 'black',
   margin: 30,
   padding: 10,
   fontSize: 30
  }

})

export default LandingPage;
