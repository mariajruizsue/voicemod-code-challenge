import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "../../resources/GlobalState"
import { Fav } from "./Fav"


describe("<Fav />" , () => {

  let voice = {
    id: "8bits",
    name: "8bits",
    icon: "VoicesVoiceIcon02.png",
    tags: [
      "devices"
    ]
  }

  beforeEach(() => {
    render(<Fav id={voice.id} name={voice.name} icon={voice.icon} tags={voice.tags} />)
  })

  test("initial fav icon when is not fav", () => {
    screen.getByRole("button")
    const image = screen.getByRole("img")

    expect(image).toHaveAttribute("src", "../assets/voice-favourite-off.svg")
  })


  test("clicking for fav voice", async () => {
    const buttonFav = screen.getByRole("button")
    const image = screen.getByRole("img")

    fireEvent.click(buttonFav)
    await waitFor(() => expect(image).toHaveAttribute("src", "../assets/voice-favourite.svg"))
  })
})



