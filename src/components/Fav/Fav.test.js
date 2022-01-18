import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '../../resources/GlobalState'
import { Fav } from './Fav'

test('initial fav icon', () => {
  const voice = {
    id: "8bits",
    name: "8bits",
    icon: "VoicesVoiceIcon02.png",
    tags: [
      "devices"
    ]
  }

  render(<Fav id={voice.id} name={voice.name} icon={voice.icon} tags={voice.tags} />)
  const buttonFav = screen.getByRole('button')
  const image = screen.getByRole('img');

  expect(image).toHaveAttribute('src', '../assets/voice-favourite-off.svg')
})


test('clicking for fav voice', async () => {
  const voice = {
    id: "8bits",
    name: "8bits",
    icon: "VoicesVoiceIcon02.png",
    tags: [
      "devices"
    ]
  }

  render(<Fav id={voice.id} name={voice.name} icon={voice.icon} tags={voice.tags} />)
  const buttonFav = screen.getByRole('button')
  const image = screen.getByRole('img');

  fireEvent.click(buttonFav)

  await waitFor(() => expect(image).toHaveAttribute('src', '../assets/voice-favourite.svg'))
})



