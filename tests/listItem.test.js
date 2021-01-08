import React from 'react'
import {create} from 'react-test-renderer'
import ListItem from '../components/ListItem'
import renderer from 'react-test-renderer'

const mockItem = {
  name: 'User',
  time: '7:00',
  window: '15 minutes'
}

  describe("<ListItem />", () => {

    it('renders correctly', () => {
      const tree = renderer.create(<ListItem
        item={mockItem}
        />).toJSON();
    expect(tree).toMatchSnapshot()
    })

  })
