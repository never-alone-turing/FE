import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import LandingPage from '../components/LandingPage';

describe('LandingPage', () => {
  it('should match the snapshot', () => {
    const landingpage = renderer.create(<LandingPage/>).toJSON();
    expect(landingpage).toMatchSnapshot()
  });

  // it('should be able to switch pages', () => {
  //   let mockNav;
  //   mockNav.navigate = jest.fn()
  //   const { getByTestId } = render(<LandingPage navigation={mockNav}/>);
  //   const caretakerButton = getByTestId("lp-caretaker-button")
  //   fireEvent.press(caretakerButton)
  //   expect(mockNav).toHaveBeenCalled()
  // });

})

// test('Render LandingPage Properly', () => {
//   const {debug} = render(<LandingPage/>);
//   debug();
// });