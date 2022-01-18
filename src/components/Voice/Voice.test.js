import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '../../resources/GlobalState'
import { Voice } from './Voice'

describe('<Voices />' , () => {
  let component

  let voice = {
    id: "8bits",
    name: "8bits",
    icon: "VoicesVoiceIcon02.png",
    tags: [
      "devices"
    ]
  }

  beforeEach(() => {
     component = render(<Voice id={voice.id} name={voice.name} icon={voice.icon} tags={voice.tags} />)
  })

  test('component renders content', () => {
    const voiceIcon = document.querySelector('.voice-icon')

    expect(component.container).toHaveTextContent(voice.name)
    expect(voiceIcon).toHaveAttribute('src', `../assets/${voice.icon}`)
  })

  test('clicking for select a voice', async () => {
    const button = document.querySelector('.select-button')

    fireEvent.click(button)
    await waitFor(() => expect(component.container.firstChild).toHaveClass('active'))
  })

})



