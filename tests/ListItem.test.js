import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import ListItem from '../components/ListItem';
// import DateTimePicker from '@react-native-community/datetimepicker';

// jest.mock('@react-native-community/datetimepicker', () => jest.fn());
// DateTimePicker.mockImplementation((props) => (
//   <Input testID={props.testID} onFocus={() => props.onChange} />
// ));


describe('ListItem', () => {
  it('should match the snapshot', () => {
    let mockedCheckin = {
      id: 1,
      response: "Answered",
      name: "test",
      time: new Date(0),
      window: new Date(0),
    }
    const listitem = renderer.create(<ListItem item={mockedCheckin}/>).toJSON();
    expect(listitem).toMatchSnapshot()
  });
});