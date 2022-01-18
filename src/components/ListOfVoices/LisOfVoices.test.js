import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import '../../resources/GlobalState'
import { ListOfVoices } from './ListOfVoices'


describe('<ListOfVoices />' , () => {

  let voices =
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

  beforeEach(() => {
    render(<ListOfVoices voices={voices} />)
  })

  test('component renders content voice of list', () => {
    const voiceList = document.querySelectorAll('.voice')

    expect(voiceList.length).toBe(voices.length)
  })
})

