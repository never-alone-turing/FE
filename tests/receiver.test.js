import React from 'react'
import {create} from 'react-test-renderer'
import Receiver from '../components/Receiver'
import renderer from 'react-test-renderer'


  const mockState = {
      timers: [
        {id: 1, category: "Wake-up", time: '7:00', window: '0:15', completed: "false"},
        {id: 2, category: "Take meds", time: '12:00', window: '1:00'},
        {id: 3, category: "go to sleep", time: '22:00', window: '1:00'}
      ]
    }

  describe("<Receiver />", () => {

    it('renders correctly', () => {
      const tree = renderer.create(<Receiver
        state ={mockState}
        />).toJSON();
    expect(tree).toMatchSnapshot()
    })

  })
