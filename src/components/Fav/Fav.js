import React from "react"
import { useGlobalState } from "state-pool"
import "./Fav.css"

export function Fav ({ id, name, icon, tags }) {
  const [voices, setVoices] = useGlobalState("voices")
  const [voicesFav, setVoicesFav] = useGlobalState("voicesFav")

  const handleClick = () => {
    if(voices.find( voice => voice.id === id) !== undefined){
      setVoicesFav(voicesFav.concat([{ id, name, icon, tags }]))
      setVoices(voices.filter(voice => voice.id !== id))
    } else {
      setVoices(voices.concat([{ id, name, icon, tags }]))
      setVoicesFav(voicesFav.filter(voice => voice.id !== id))
    }
  }

  const isFaved = voicesFav.find( voice => voice.id === id)

  const [ emoji] = isFaved
    ? ["../assets/voice-favourite.svg"]
    : ["../assets/voice-favourite-off.svg"]

  return (
    <button className='button-fav' onClick={handleClick}>
      <img loading='lazy' alt="Like icon" src={emoji}/>
    </button>
  )
}