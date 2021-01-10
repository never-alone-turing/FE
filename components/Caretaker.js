import React, {useState} from "react";
import { Button, Header } from 'react-native-elements';
import { View, StyleSheet, FlatList, Modal } from "react-native";
import Times from './Times';
import AddTask from './AddTask';
import normalize from 'react-native-normalize';
import { ScrollView } from "react-native-gesture-handler";

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

  const [modalVisible, setIsVisible] = useState(false);

  return (
    <View>
      <Header
        containerStyle={{ backgroundColor: 'black', justifyContent: 'space-between' }}
        centerComponent={{ text: 'Never Alone', style: { color: '#fff', fontSize: normalize(30), fontWeight: "bold" } }}
        leftComponent={{ icon: 'home', color: '#fff', size: normalize(40), onPress:() => navigation.navigate('Home')} }
        rightComponent={{ icon: 'add', color: '#fff', size: normalize(40), onPress:() => setIsVisible(true)} }
      />
      <View>
      <FlatList
          data={timers}
          renderItem={({ item }) => (
            <Times item={item} deleteTimer={deleteTimer}/>
          )}
          keyExtractor={(item) => item.id.toString()}
        />  
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <Button buttonStyle={styles.buttonStyle} title='Close Menu' titleStyle={styles.titleStyle} onPress={() => setIsVisible(!modalVisible)}></Button>
        <AddTask addTimer={addTimer} setIsVisible={setIsVisible}/>
      </Modal>

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
    marginTop: 50,
    marginRight: 30,
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold"
  }
})

export default Caretaker;
