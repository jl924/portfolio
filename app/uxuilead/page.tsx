"use client"

import { useState } from "react"
import Image from "next/image"
import UI from "./uiLead.gif"
import "./uxui.css"

const uiLead = () => {
  const [pitch, setPitch] = useState(true)
  const [planning, setPlanning] = useState(false)
  const [finish, setFinished] = useState(false)

  let pitchClick = () => {
    setPitch(true)
    setPlanning(false)
    setFinished(false)
  }
  let planClick = () => {
    setPitch(false)
    setPlanning(true)
    setFinished(false)
  }
  let finishClick = () => {
    setPitch(false)
    setPlanning(false)
    setFinished(true)
  }
  return (
    <div className="pageContainer">
      <div className="flex flex-col mr-10">
        <h2 className="plan" onClick={pitchClick}>
          Pitch Phase
        </h2>
        <h2 className="plan" onClick={planClick}>
          Planning Phase
        </h2>
        <h2 className="plan">Finished Phase</h2>
      </div>
      {pitch ? (
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRi2AuWrItALsMjmVZ2PZjnZG-zWwusRTUceKga0RFfdPmaep09W-Iigyu2j1cW3CLgNkoxjUUGWeVm/embed?start=false&loop=true&delayms=5000"
          width="1000"
          height="469"
        ></iframe>
      ) : null}
      {planning ? (
        <Image
          src={UI}
          width={1000}
          height={1000}
          alt="project1"
          className="project1"
        />
      ) : null}
    </div>
  )
}

export default uiLead
