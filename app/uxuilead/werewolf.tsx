"use client"

import { useState } from "react"
import UI from "./uiLead.gif"
import "./uxui.css"
import Image from "next/image"
import sign from "./lobby.gif"
import lobby from "./lobby2.gif"
import game1 from "./gamePlay1.gif"
import game2 from "./game2.png"

const Werewolf = () => {
  const [gameShow, setGameShow] = useState(sign)

  return (
    <div className="flex flex-col items-center">
      <Image
        src={gameShow}
        width={600}
        alt="project1"
        className="werewolfGame"
      />
      <div className="flex flex-row mt-3 items-center">
        <h2 className="plan" onClick={() => setGameShow(sign)}>
          Sign Up
        </h2>
        <h2 className="plan" onClick={() => setGameShow(lobby)}>
          Lobby
        </h2>
        <h2 className="plan" onClick={() => setGameShow(game1)}>
          Game Play1
        </h2>
        <h2 className="plan" onClick={() => setGameShow(game2)}>
          Game Play2
        </h2>
      </div>
    </div>
  )
}

export default Werewolf
