import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Checkin from '../components/Checkin';
// import DateTimePicker from '@react-native-community/datetimepicker';

// jest.mock('@react-native-community/datetimepicker', () => jest.fn());
// DateTimePicker.mockImplementation((props) => (
//   <Input testID={props.testID} onFocus={() => props.onChange} />
// ));


describe('Checkin', () => {
  it('should match the snapshot', () => {
    let mockedCheckin = {
      id: 1,
      response: "Answered",
      name: "test",
      time: new Date(0),
      window: new Date(0),
    }
    const checkin = renderer.create(<Checkin task={mockedCheckin}/>).toJSON();
    expect(checkin).toMatchSnapshot()
  });
  // it('should be able to check in', () => {
  //   // Date.prototype.addHours = function(h) {
  //   //   this.setTime(this.getTime() + (h*60*60*1000));
  //   //   return this;
  //   // }
  //   let mockedCheckin = {
  //     id: 1,
  //     response: "Pending",
  //     name: "test",
  //     time: new Date(new Date().setHours(0,0,0,0)),
  //     window: new Date(new Date().setHours(24,60,60,0)),
  //   }
  //   console.log("mockedCheckin.time", mockedCheckin.time)
  //   console.log("mockedCheckin.window", mockedCheckin.window)
  //   let mockedCheckinFunction = jest.fn()
  //   const { getByTestId } = render(<Checkin checkIn={mockedCheckinFunction} task={mockedCheckin}/>);
  //   const checkinButton = queryByTestId("checkin-1")
  //   fireEvent.press(checkinButton)
  //   expect(mockedCheckinFunction).not.toHaveBeenCalled()
  // });
})