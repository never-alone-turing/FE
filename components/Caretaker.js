import React from "react";
import { Button, Header } from 'react-native-elements';
import { View, StyleSheet, FlatList, Modal } from "react-native";
import Tasks from './Tasks';
import AddTask from './AddTask';
import normalize from 'react-native-normalize';
import {fetcher} from '../API/API.js';


class Caretaker extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      modalVisible: false
    }
  }

  componentDidMount = async() => {
    await this.updateTasks()
  }

  updateTasks = async() => {
    try {
      const tasks = await fetcher.allTasks()
      this.setState({ tasks: tasks.['allCheckins'] })
    } catch(error) {
      console.log("error", error)
    }
  }

  deleteTask = async(id) => {
    await fetcher.deleteTask(id)
    this.updateTasks()
  }

  addTask = async(task) => {
    await fetcher.addTask(task)
    this.updateTasks()
  }

  setIsVisible = (visVal) => {
    this.setState({ modalVisible: visVal })
  }

  render() {
    return (
      <View>
        <Header
          containerStyle={{ backgroundColor: 'black', justifyContent: 'space-between' }}
          centerComponent={{ text: 'Never Alone', style: { color: '#fff', fontSize: normalize(30), fontWeight: "bold" } }}
          leftComponent={{ icon: 'home', color: '#fff', size: normalize(40), onPress:() => this.props.navigation.navigate('Home')} }
          rightComponent={{ icon: 'add', color: '#fff', size: normalize(40), onPress:() => this.setIsVisible(true)} }
        />
        <View style={styles.viewArea}>
        <FlatList
            data={this.state.tasks}
            renderItem={({ item }) => (
              <Tasks item={item} deleteTask={this.deleteTask}/>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <Modal visible={this.state.modalVisible} animationType="slide">
          <Button buttonStyle={styles.buttonStyle} title='Close Menu' titleStyle={styles.titleStyle} onPress={() => this.setIsVisible(!this.state.modalVisible)}></Button>
          <AddTask addTask={this.addTask} setIsVisible={this.setIsVisible}/>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewArea: {
    marginHorizontal: normalize(5),
    marginBottom: normalize(225),
  },
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
