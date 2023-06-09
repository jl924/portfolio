"use client"

import React from "react"
import "./projects.css"
import pro1 from "./project1.gif"
import Image from "next/image"
import { VscGithub } from "react-icons/vsc"

const Project2 = () => {
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
              <span className="font-bold">BENJ</span> - Back-End
            </h3>
            <VscGithub
              size={30}
              className="githubPro"
              onClick={handleClickPro1}
            />
          </div>
          <p>
            - Leveraged PostgreSQL and its COPY method to efficiently seed over
            4GB of CSV data into a new database, replacing the existing API
            database
          </p>
          <p>
            - Created initial queries using JSON functions and INNER JOIN to
            speed up the query process
          </p>
          <p>
            - Stress tested and checked the API call response times using
            Postman, artillery, and loader.io
          </p>
          <p>
            - Optimized database performance by implementing indexes, multiple
            databases, and schema design, reducing overall response time from
            5,000ms to 5ms with less than a 1% error rate
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project2
