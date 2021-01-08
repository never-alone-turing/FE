import React from 'react'
import {create} from 'react-test-renderer'
import Caretaker from '../components/Caretaker'
import renderer from 'react-test-renderer'


  describe("<Caretaker />", () => {

    it('renders correctly', () => {
      const tree = renderer.create(<Caretaker />).toJSON();
    expect(tree).toMatchSnapshot()
    })

  })
