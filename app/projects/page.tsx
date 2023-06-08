"use client"

import { useState } from "react"
import "./projects.css"
import Project1 from "./project1"
import Project2 from "./project2"
import Project3 from "./project3"

const Projects = () => {
  const [pro, setPro] = useState(1)

  if (pro > 3) {
    setPro(1)
  }
  if (pro < 1) {
    setPro(3)
  }
  return (
    <div className="pageContainer">
      <button className="buttonLeft" onClick={() => setPro(pro - 1)}>
        {"<"}
      </button>
      {pro === 1 ? <Project1 /> : null}
      {pro === 2 ? <Project2 /> : null}
      {pro === 3 ? <Project3 /> : null}
      <button className="buttonRight" onClick={() => setPro(pro + 1)}>
        {">"}
      </button>
    </div>
  )
}

export default Projects
