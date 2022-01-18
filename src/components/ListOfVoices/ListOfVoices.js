import React from "react"
import { Voice } from "../Voice/Voice"
import "./ListOfVoices.css"

export function ListOfVoices ({voices}) {
  return (
    <>
      <div className='list-voices'>
        {
          voices.map(({id, name, icon, tags}) =>
            <Voice
              id={id}
              key={id}
              name={name}
              icon={icon}
              tags={tags}
            />
          )
        }
      </div>
    </>
  )
}