import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent, waitFor } from "@testing-library/react"
import "../../resources/GlobalState"
import { VoiceSelector } from "./VoiceSelector"

describe("<VoiceSelector />" , () => {

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

  let voicesFav =
  [{
    id: "baby",
    name: "Baby",
    icon: "VoicesVoiceIcon01.png",
    tags: [
      "human"
    ]
  },
  {
    id: "birthday-beach",
    name: "Birthday beach",
    icon: "VoicesVoiceIcon02.png",
    tags: [
      "sing"
    ]
  },
  {
    id: "birthday-capella",
    name: "Birthday capella",
    icon: "VoicesVoiceIcon03.png",
    tags: [
      "sing"
    ]
  }]

  let voicesEmpty = []
  let voicesFavEmpty = []


  test("clicking open dropdown options", async () => {
    render(<VoiceSelector voices={voices} voicesFav={voicesFav} />)
    const dropdownEl = document.querySelector(".select")

    fireEvent.click(dropdownEl)
    await waitFor(() => expect(document.querySelector(".options")).not.toBeNull())

  })

  test("do not render voiceOfList if is empty", () => {
    render(<VoiceSelector voices={voicesEmpty} voicesFav={voicesFavEmpty} />)
    expect(document.querySelector(".voices-section")).toBeNull()
  })

  test("searching a existing voice filters by name", async () => {
    const searchText = voices[0].name
    render(<VoiceSelector voices={voices} voicesFav={voicesFav} />)
    const inputSearch = document.querySelector(".search-input")

    fireEvent.change(inputSearch, {target: {value: searchText}})

    const voiceNames = document.querySelectorAll(".voice-name")
    await waitFor(() => expect(voiceNames.length).not.toEqual(0))
    await waitFor(() => voiceNames.forEach(element => {
      expect(element.innerHTML).toContain(searchText)
    }))
  })

  test("searching a non existing voice should return empty list", async () => {
    const searchText = "jhvdsjhfgeir7tey975g4urhtib5hiuh"
    render(<VoiceSelector voices={voices} voicesFav={voicesFav} />)
    const inputSearch = document.querySelector(".search-input")

    fireEvent.change(inputSearch, {target: {value: searchText}})

    const voiceNames = document.querySelectorAll(".voice-name")
    await waitFor(() => expect(voiceNames.length).toEqual(0))
  })

})
