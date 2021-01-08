import React from 'react'
import {create} from 'react-test-renderer'
import Times from '../components/Times'
import renderer from 'react-test-renderer'


  const mockItem = {
    name: 'User',
    time: '7:00',
    window: '15 minutes'
  }

  describe("<Times />", () => {

    it('renders correctly', () => {
      const tree = renderer.create(<Times
        item={"mockItem"}
        />).toJSON();
    expect(tree).toMatchSnapshot()
    })

  })
