"use client"

import React from "react"
import "./projects.css"
import pro1 from "./project1.gif"
import Image from "next/image"
import { VscGithub } from "react-icons/vsc"

const Project1 = () => {
  const handleClickPro1 = () => {
    window.open("https://github.com/TeamGlaciers/BENJ", "_blank")
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
              <span className="font-bold">BENJ</span> - Front-End for an
              e-commerce website
            </h3>
            <VscGithub
              size={30}
              className="githubPro"
              onClick={handleClickPro1}
            />
          </div>
          <p>
            - Developed interactive carousels using DaisyUI to showcase products
            and services
          </p>
          <p>
            - Populated the related items carousel using Redux, React hooks, and
            Axios API calls, the cards also had modals that compared features
            with the current card vs the current overview
          </p>
          <p>
            - Utilized Local storage to store the information inside the Your
            Outfits carousel where users have their own unique carousel that
            persists on reload
          </p>
          <p>
            - Implemented optimization techniques, best practices, and relevant
            themes to achieve a 94% Google Lighthouse score
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project1
