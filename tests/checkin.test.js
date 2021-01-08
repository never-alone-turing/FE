import React from 'react'
import {create} from 'react-test-renderer'
import Checkin from '../components/Checkin'
import renderer from 'react-test-renderer'


  describe("<Checkin />", () => {

    it('renders correctly', () => {
      const tree = renderer.create(<Checkin />).toJSON();
    expect(tree).toMatchSnapshot()
    })

  })
