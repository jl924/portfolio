import React from "react"
import "./projects.css"

const Projects = () => {
  return (
    <div className="pageContainer">
      <div className="box">
        <div className="imageContainer">
          <img
            src="path_to_your_image.jpg"
            alt="Your Image"
            className="image"
          />
        </div>
        <div className="descriptionContainer">
          <p className="description">
            Your description goes here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean euismod bibendum laoreet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
