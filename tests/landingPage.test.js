import React from 'react'
import {create} from 'react-test-renderer'
import LandingPage from '../components/LandingPage'


const tree = create(<LandingPage />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
//
