import React, {useState} from "react";
import { Button, Header } from 'react-native-elements';
import { View, StyleSheet, FlatList, Modal } from "react-native";
import Times from './Times';
import AddTask from './AddTask';
import normalize from 'react-native-normalize';
import { ScrollView } from "react-native-gesture-handler";
import {fetcher} from '../API/API.js';


class Caretaker extends React.Component {
  constructor() {
    super();
    this.state = {
      timers: [],
      modalVisible: false
    }
  }
  // const [timers, editTimers] = useState([
  //   {id: 1, name: "Wake-up", time: new Date(), window: new Date()},
  //   {id: 2, name: "Take meds", time: new Date(), window: new Date()},
  //   {id: 3, name: "go to sleep", time: new Date(), window: new Date()}
  // ])

  // async componentDidMount() {
  //   let timers = await apiCall()
  //   console.log("timers 27 caretaker", timers)
  //   // this.setState({ timers: timers.allCheckins })
  // }

  componentDidMount = () => {
    this.updateTimes()
  }
  
  updateTimes = async() => {
    try {
      const timers = await fetcher.allTimers()
      console.log("timers 33 caretaker", timers['allCheckins'])
      this.setState({ timers: timers.['allCheckins'] })
  
    } catch(error) {
      console.log("FUCK", error)
    }
  }

// const Caretaker = ({history, navigation}) => {
//   const [timers, editTimers] = useState([
//     {id: 1, name: "Wake-up", time: new Date(), window: new Date()},
//     {id: 2, name: "Take meds", time: new Date(), window: new Date()},
//     {id: 3, name: "go to sleep", time: new Date(), window: new Date()}
//   ])

  deleteTimer = async(id) => {
    console.log("Delete id", id, typeof id)
    await fetcher.deleteTimer(id)
    this.updateTimes()
    this.forceUpdate()
  }

  // deleteTimer = (id) => {
  //   editTimers(prevTimers => {
  //     return prevTimers.filter(timer => timer.id != id)
  //   })
  // }

  addTimer = async(timer) => {
    await fetcher.addTimer(timer)
    this.updateTimes()
    // console.log('addTimer from Caretaker.js')
    // editTimers(prevTimers => {
    //   return [
    //     {
    //       id: Date.now(),
    //       name: timer.name,
    //       time: timer.time,
    //       window: timer.window
    //     }, ...prevTimers]
    // })
  }

  setIsVisible = (visVal) => {
    this.setState({ modalVisible: visVal })
  }

  // const [modalVisible, setIsVisible] = useState(false);

  render() {
    return (
      <View>
        <Header
          containerStyle={{ backgroundColor: 'black', justifyContent: 'space-between' }}
          centerComponent={{ text: 'Never Alone', style: { color: '#fff', fontSize: normalize(30), fontWeight: "bold" } }}
          leftComponent={{ icon: 'home', color: '#fff', size: normalize(40), onPress:() => this.props.navigation.navigate('Home')} }
          rightComponent={{ icon: 'add', color: '#fff', size: normalize(40), onPress:() => this.setIsVisible(true)} }
        />
        <View>
        <FlatList
            data={this.state.timers}
            renderItem={({ item }) => (
              <Times item={item} deleteTimer={this.deleteTimer}/>
            )}
            keyExtractor={(item) => item.id.toString()}
          />  
        </View>
        <Modal visible={this.state.modalVisible} animationType="slide">
          <Button buttonStyle={styles.buttonStyle} title='Close Menu' titleStyle={styles.titleStyle} onPress={() => this.setIsVisible(!this.state.modalVisible)}></Button>
          <AddTask addTimer={this.addTimer} setIsVisible={this.setIsVisible}/>
        </Modal>
  
      </View>
    );
  }
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
