import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '../../resources/GlobalState'

import { ListOfVoices } from './ListOfVoices'

test('renders content voice of list', () => {
  const voices =
  [{
    id: "8bits",
    name: "8bits",
    icon: "VoicesVoiceIcon02.png",
    tags: [
      "devices"
    ]
  },
  {
    id: "adult-to-children",
    name: "Adult to children",
    icon: "VoicesVoiceIcon03.png",
    tags: [
      "human"
    ]
  },
  {
    id: "alien",
    name: "Alien",
    icon: "VoicesVoiceIcon01.png",
    tags: [
      "robotic"
    ]
  }]

  const view = render(<ListOfVoices voices={voices} />)
  const VoiceList = document.querySelectorAll('.voice')


  expect(VoiceList.length).toBe(voices.length)
})
