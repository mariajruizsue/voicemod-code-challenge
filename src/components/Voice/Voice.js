import React from "react"
import { useGlobalState } from "state-pool"
import { Fav } from "../Fav/Fav"

import "./Voice.css"


export function Voice ({ id, name, icon, tags }) {
  const [voiceSelected, setVoiceSelected] = useGlobalState("voiceSelected")

  const handlerClick = () => {
    setVoiceSelected({ id, name, icon, tags })
  }

  return (
    <div className={`voice
    ${voiceSelected.id === id ? "active" : "inactive"}`}>
      <div className='voice-fav-button'>
        <Fav id={id} name={name} icon={icon} tags={tags}></Fav>
      </div>
      <button aria-label="Select voice" className='select-button' onClick={handlerClick}>
        <img className='voice-icon' loading='lazy' alt={`Icon ${name}`} src={`../assets/${icon}`} />
        <h4 className="voice-name">{name}</h4>
      </button>
    </div>
  )
}