import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingPage from './components/LandingPage';
import Caretaker from './components/Caretaker';
import Receiver from './components/Receiver';
// import { NativeRouter, Switch, Route } from 'react-router-native';

// import {v4 as uuidv4} from 'uuid';

// const App = () => {
//   // const [careRecievers, setRecievers] = useState([
//   //   {id: 1, name: 'KJ', checkins: [{id: 1.1, checkinName: 'feed the dogs', time: '9:00am', window: "1:00"}, {id: 1.2, checkinName: 'feed the dogs', time: '6:00pm', window: "1:00"}]},
//   //   {id: 2, name: 'Ian', checkins: [{id: 2.1, checkinName: 'wakeup', time: '7:00am', window: "0:30"}, {id: 2.2, checkinName: 'excersize', time: '8:00am', window: "1:30"}]},
//   //   {id: 3, name: 'Naomi', checkins: [{id: 3.1, checkinName: 'study', time: '12:00pm', window: "0:15"}, {id: 3.2, checkinName: 'meal prep', time: '6:00pm', window: "0:30"}]}
//   // ])
//   return (
//     <NativeRouter>
//       <View style={styles.container}>
//         <Switch>
//           <Route exact path="/" component={LandingPage} />
//           <Route exact path="/caretaker" component={Caretaker} />
//           <Route exact path="/carereceiver" component={Receiver} />
//         </Switch>
//       </View>
//     </NativeRouter>
//   );
// }

const navigator = createStackNavigator(
  {
    Home: LandingPage, 
    Caretaker: Caretaker, 
    Receiver: Receiver,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   }
// })

export default createAppContainer(navigator);
