"use client"

import { useState } from "react"
import Image from "next/image"
import UI from "./uiLead.gif"
import "./uxui.css"
import { VscGithub } from "react-icons/vsc"
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants"
import Werewolf from "./werewolf"

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
  const handleClickW = () => {
    window.open("https://github.com/Emerald-Team/We-reWolf", "_blank")
  }

  return (
    <div className="pageContainer">
      <div className="flex flex-col mr-10 items-center">
        <h2 className="plan" onClick={pitchClick}>
          Pitch Phase
        </h2>
        <h2 className="plan" onClick={planClick}>
          Planning Phase
        </h2>
        <h2 className="plan" onClick={finishClick}>
          Finished Phase
        </h2>
        <VscGithub size={30} className="ghIcon" onClick={handleClickW} />
      </div>
      <div className="flex flex-col text-center">
        {pitch ? (
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vRi2AuWrItALsMjmVZ2PZjnZG-zWwusRTUceKga0RFfdPmaep09W-Iigyu2j1cW3CLgNkoxjUUGWeVm/embed?start=false&loop=true&delayms=5000"
            className="ppt"
          ></iframe>
        ) : null}
        {planning ? (
          <Image
            src={UI}
            width={1000}
            height={1000}
            alt="project1"
            className="werewolfDraw"
          />
        ) : null}
        {finish ? <Werewolf /> : null}
        <p className="werewolfDis mt-5">
          I was the UX/UI Lead for this project and wanted to share the design
          process
        </p>
      </div>
    </div>
  )
}

export default uiLead
