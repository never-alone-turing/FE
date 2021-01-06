import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingPage from './components/LandingPage';
import Caretaker from './components/Caretaker';
import Receiver from './components/Receiver';

const navigator = createStackNavigator(
  {
    Home: LandingPage, 
    Caretaker: Caretaker, 
    Receiver: Receiver,
  },
  {
    initialRouteName: 'Home',
   
  }
);

export default createAppContainer(navigator);
