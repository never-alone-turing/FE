import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class AddTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      time: '',
      window: ''
    }
  }

  // const onChange = (textKey, textValue) => {
  //   console.log('textKey', textKey)
  //   console.log('textValue', textValue)
  // }
  onChange = (textKey, textValue) => {
    setText(currentState => {currentState[textKey] = textValue})
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Name" style={styles.input} onChangeText={text => { this.setState({ name: text }) }}/>
        <TextInput placeholder="Time" style={styles.input} onChangeText={text => { this.setState({ time: text }) }}/>
        <TextInput placeholder="Window" style={styles.input} onChangeText={text => { this.setState({ window: text }) }}/>
        <Button style={styles.btm} onPress={() => this.props.addTimer(this.state)} title='Add Item'>
        {/* <Text style={styles.btnText}>Add Item</Text> */}
        </Button>
      </View>
    );
  }
}
// const AddTimer = ({addTimer}) => {
//   const [text, setText] = useState({
//     name: '',
//     time: '',
//     window: ''
//   });

//   // const onChange = (textKey, textValue) => {
//   //   console.log('textKey', textKey)
//   //   console.log('textValue', textValue)
//   // }
//   const onChange = (textKey, textValue) => {
//     setText(currentState => {currentState[textKey] = textValue})
//   }

//   return (
//     <View>
//       <TextInput placeholder="Name" style={styles.input} onChangeText={e => onChange('name', e)}/>
//       <TextInput placeholder="Time" style={styles.input} onChangeText={e => onChange('time', e)}/>
//       <TextInput placeholder="Window" style={styles.input} onChangeText={e => onChange('window', e)}/>
//       <Button style={styles.btm} onPress={() => addTimer(text)} title='Add Item'>
//       {/* <Text style={styles.btnText}>Add Item</Text> */}
//       </Button>
//     </View>
//   );
// }


const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddTimer;
