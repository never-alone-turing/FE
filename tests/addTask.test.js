import React from 'react'
import {create} from 'react-test-renderer'
import AddTask from '../components/addTask'
import renderer from 'react-test-renderer'


  describe("<AddTask />", () => {

    it('renders correctly', () => {
      const tree = renderer.create(<AddTask />).toJSON();
    expect(tree).toMatchSnapshot()
    })

  })
