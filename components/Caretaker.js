import React, {useState} from "react";
import { Button, Header, BottomSheet } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Times from './Times';
import AddTimer from './AddTimer';
import { CardStyleInterpolators } from "react-navigation-stack";

const Caretaker = ({history, navigation}) => {
  const [timers, editTimers] = useState([
    {id: 1, name: "Wake-up", time: '7:00', window: '0:15'},
    {id: 2, name: "Take meds", time: '12:00', window: '1:00'},
    {id: 3, name: "go to sleep", time: '22:00', window: '1:00'}
  ])
  const deleteTimer = (id) => {
    editTimers(prevTimers => {
      return prevTimers.filter(timer => timer.id != id)
    })
  }

  const addTimer = (timer) => {
    console.log('addTimer from Caretaker.js')
    editTimers(prevTimers => {
      return [
        {
          id: Date.now(),
          name: timer.name,
          time: timer.time,
          window: timer.window
        }, ...prevTimers]
    })
  }

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <Header
   
        containerStyle={{ backgroundColor: 'black', justifyContent: 'space-between' }}
        centerComponent={{ text: 'Never Alone', style: { color: '#fff', fontSize: 30, fontWeight: "bold" } }}
        leftComponent={{ icon: 'home', color: '#fff', size: 40, onPress:() => navigation.navigate('Home')} }
        rightComponent={{ icon: 'add', color: '#fff', size: 40, onPress:() => setIsVisible(true)} }
      />

      <FlatList
          data={timers}
          renderItem={({ item }) => (
            <Times item={item} deleteTimer={deleteTimer}/>
          )}
          keyExtractor={(item) => item.id.toString()}
        />  

      <BottomSheet isVisible={isVisible} containerStyle={{}}>
        <Button buttonStyle={styles.buttonStyle} title='x' titleStyle={styles.titleStyle} onPress={() => setIsVisible(false)}></Button>
        <AddTimer addTimer={addTimer} setIsVisible={setIsVisible}/>
      </BottomSheet>

    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  listItemView: {
    flexDirection: 'row'
  },
  listItemText: {
    fontSize: 18
  },
  buttonStyle: {
    backgroundColor: "black", 
    width: "auto", 
    alignSelf: "flex-end",
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
  titleStyle: {
    fontSize: 30
  }
})

export default Caretaker;
