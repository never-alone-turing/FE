import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Times from '../components/Times';
// import DateTimePicker from '@react-native-community/datetimepicker';

// jest.mock('@react-native-community/datetimepicker', () => jest.fn());
// DateTimePicker.mockImplementation((props) => (
//   <Input testID={props.testID} onFocus={() => props.onChange} />
// ));


describe('Times', () => {
  it('should match the snapshot', () => {
    let mockedCheckin = {
      id: 1,
      response: "Answered",
      category: "test",
      time: new Date(0),
      window: new Date(0),
    }
    const times = renderer.create(<Times item={mockedCheckin} deleteTimer={jest.fn()}/>).toJSON();
    expect(times).toMatchSnapshot()
  });
});