import React from 'react'
import {create} from 'react-test-renderer'
import LandingPage from '../components/LandingPage'
import renderer from 'react-test-renderer'


  describe("<LandingPage/>", () => {
    it('renders correctly', () => {
      const tree = renderer.create(<LandingPage />).toJSON();
    expect(tree).toMatchSnapshot()
    })
  })
// it('renders correctly', () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
//
