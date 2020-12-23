import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const LandingPage = () => {
  const [careRecievers, setRecievers] = useState([
    {id: 1, name: 'KJ', checkins: [{id: 1.1, checkinName: 'feed the dogs', time: '9:00am', window: "1:00"}, {id: 1.2, checkinName: 'feed the dogs', time: '6:00pm', window: "1:00"}]},
    {id: 2, name: 'Ian', checkins: [{id: 2.1, checkinName: 'wakeup', time: '7:00am', window: "0:30"}, {id: 2.2, checkinName: 'excersize', time: '8:00am', window: "1:30"}]},
    {id: 3, name: 'Naomi', checkins: [{id: 3.1, checkinName: 'study', time: '12:00pm', window: "0:15"}, {id: 3.2, checkinName: 'meal prep', time: '6:00pm', window: "0:30"}]}
  ])
  return (
    <>
      <Text style={styles.text}>LandingPage</Text>
      <FlatList
        data={careRecievers}
        renderItem={({ item }) => <Text>{item.name}</Text>} 
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {color: 'darkslateblue',
   fontSize: 30,
    backgroundColor: 'green'
  }
})

export default LandingPage;
