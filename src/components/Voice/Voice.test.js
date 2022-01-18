import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '../../resources/GlobalState'

import { Voice } from './Voice'

test('renders content', () => {
  const voice = {
    id: "8bits",
    name: "8bits",
    icon: "VoicesVoiceIcon02.png",
    tags: [
      "devices"
    ]
  }

  const view = render(<Voice id={voice.id} name={voice.name} icon={voice.icon} tags={voice.tags} />)
  const voiceIcon = document.querySelector('.voice-icon')

  expect(view.container).toHaveTextContent(voice.name)
  expect(voiceIcon).toHaveAttribute('src', `../assets/${voice.icon}`)
})

test('clicking for select a voice', async () => {
  const voice = {
    id: "8bits",
    name: "8bits",
    icon: "VoicesVoiceIcon02.png",
    tags: [
      "devices"
    ]
  }

  const view = render(<Voice id={voice.id} name={voice.name} icon={voice.icon} tags={voice.tags} />)
  const button = document.querySelector('.select-button')

  fireEvent.click(button)

  await waitFor(() => expect(view.container.firstChild).toHaveClass('active'))
})



