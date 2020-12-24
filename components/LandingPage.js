import React, {useState} from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { NativeRouter, Switch, Route } from 'react-router-native';
import ListItem from './ListItem';

const LandingPage = ({history}) => {
  const [titles, chooseTitle] = useState([
    {title: "Caretaker", path: '/caretaker'},
    {title: "Care Receiver", path: '/carereceiver'}
  ])
  return (
    <>
      <Text style={styles.text}>Welcome</Text>
        <FlatList
          data={titles}
          renderItem={({ item }) => <ListItem item={item} history={history}/>} 
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
