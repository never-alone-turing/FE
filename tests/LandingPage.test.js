import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import LandingPage from '../components/LandingPage';

describe('LandingPage', () => {
  it('should match the snapshot', () => {
    const landingpage = renderer.create(<LandingPage/>).toJSON();
    expect(landingpage).toMatchSnapshot()
  });

  it('should be able to switch pages', () => {
    let mockProps= {
      navigation: {
        navigate: jest.fn()
      }
    };
    const { getByTestId } = render(<LandingPage navigation={mockProps.navigation}/>);
    const caretakerButton = getByTestId("lp-caretaker-button")
    const receiverButton = getByTestId("lp-receiver-button")
    fireEvent.press(caretakerButton)
    fireEvent.press(receiverButton)
    expect(mockProps.navigation.navigate).toHaveBeenCalledTimes(2)
  });

})

// test('Render LandingPage Properly', () => {
//   const {debug} = render(<LandingPage/>);
//   debug();
// });