import React from 'react';
import Caretaker from '../components/Caretaker';
import renderer from 'react-test-renderer';
import DateTimePicker from '@react-native-community/datetimepicker';

jest.mock('@react-native-community/datetimepicker', () => jest.fn());
DateTimePicker.mockImplementation((props) => (
  <Input testID={props.testID} onFocus={() => props.onChange} />
));

import {fetcher} from '../API/API.js';

const mockReceiverAllTimers = jest.fn();
jest.mock('../API/API.js', async() => {
  return await jest.fn().mockImplementation(() => {
    return allCheckins = [{
      id: 1,
      response: "Answered",
      name: "test",
      time: new Date(0),
      window: new Date(0),
    }]
  })
})

// jest.mock('../API/API.js', () => jest.fn());
// fetcher.allTimers.mockImplementation( () => {
//   return allCheckins = [{
//     id: 1,
//     response: "Answered",
//     name: "test",
//     time: new Date(0),
//     window: new Date(0),
//   }]
// })
// jest.mock('../API/API.js', () => {
//   return fetcher.allTimers();
// })

// jest.mock("../node_modules/react-native/Libraries/LogBox/Data/LogBoxData.js", () => {
//     return {
//       handleException: (...args) => {
//         return;
//       },
//     };
//   })

describe('Caretaker', () => {
  it('should match the snapshot', async() => {
    const caretaker = await renderer.create(<Caretaker />).toJSON()
    expect(caretaker).toMatchSnapshot()
  })
})
// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import renderer from 'react-test-renderer';
// // import Caretaker from '../components/Caretaker';
// import Caretaker from '../components/Caretaker.js';
// import DateTimePicker from '@react-native-community/datetimepicker';

// jest.mock('@react-native-community/datetimepicker', () => jest.fn());
// DateTimePicker.mockImplementation((props) => (
//   <Input testID={props.testID} onFocus={() => props.onChange} />
// ));

// import {fetcher} from '../API/API.js';

// jest.mock('../API/API.js', () => jest.fn())

// // jest.mock('../API/API.js', () => jest.fn());
// // fetcher.mockImplementation((props) => (
// //   <Input testID={props.testID} onFocus={() => props.onChange} />
// // ));

// describe('Caretaker', () => {
//   let mockProps= {
//     navigation: {
//       navigate: jest.fn()
//     }
//   };
//   // it('should match the snapshot', () => {
//   //   const caretaker = renderer.create(<Caretaker/>).toJSON();
//   //   expect(caretaker).toMatchSnapshot()
//   // });
//   test('Render Caretaker Properly', () => {
//     const {debug} = render(<Caretaker navigation={mockProps.navigation}/>);
//     debug();
//   });
// })