import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import AddTask from '../components/AddTask';
import DateTimePicker from '@react-native-community/datetimepicker';

jest.mock('@react-native-community/datetimepicker', () => jest.fn());
DateTimePicker.mockImplementation((props) => (
  <Input testID={props.testID} onFocus={() => props.onChange} />
));

describe('AddTask', () => {
  // it('should match the snapshot', () => {
  //   const addtask = renderer.create(<AddTask/>).toJSON();
  //   expect(addtask).toMatchSnapshot()
  // });
  test('Render LandingPage Properly', () => {
    const {debug} = render(<AddTask/>);
    debug();
  });
})
