"use client"

import React from "react"
import "./projects.css"
import pro1 from "./project1.gif"
import Image from "next/image"
import { VscGithub } from "react-icons/vsc"

const Project3 = () => {
  const handleClickPro1 = () => {
    window.open(
      "https://github.com/jl924/SDC/blob/main/server/productDbs/postgres2.js",
      "_blank"
    )
  }

  return (
    <div className="box">
      <div className="imageContainer">
        <Image
          src={pro1}
          width={500}
          height={500}
          alt="project1"
          className="project1"
        />
      </div>
      <div className="descriptionContainer">
        <div className="description">
          <div className="flex">
            <h3 className="text-xl mr-4">
              <span className="font-bold">OpenMedical</span> - an EMR app
              simulator
            </h3>
            <VscGithub
              size={30}
              className="githubPro"
              onClick={handleClickPro1}
            />
          </div>
          <p>
            - Designed and implemented a MongoDB database and schema to store
            patient and appointment data.
          </p>
          <p>
            - Developed a chat system integrated with ChatGPT, simulating
            patient-doctor conversations.
          </p>
          <p>
            - Built a COVID-19 section that includes interactive graphs powered
            by Recharts library, making it easier for users to view pandemic
            data.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project3
