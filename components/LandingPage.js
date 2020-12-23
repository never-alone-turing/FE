import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from './ListItem';

const LandingPage = () => {
  const [titles, chooseTitle] = useState([
    {title: "Caretaker"},
    {title: "Care Reciever"}
  ])
  return (
    <>
      <Text style={styles.text}>Welcome</Text>
      <FlatList
        data={titles}
        renderItem={({ item }) => <ListItem item={item}/>} 
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {color: 'darkslateblue',
   fontSize: 30,
   alignSelf: "stretch",
   textAlign: "center",
   margin: 45
    // backgroundColor: 'green'
  }
})

export default LandingPage;
