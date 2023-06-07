"use client"
import { VscGithub } from "react-icons/vsc"
import { AiOutlineLinkedin } from "react-icons/ai"

const Footer = () => {
  const handleClickG = () => {
    window.open("https://github.com/jl924/", "_blank")
  }
  const handleClickL = () => {
    window.open("https://www.linkedin.com/in/jae-hoon-lee/", "_blank")
  }

  return (
    <div className="footer">
      <VscGithub size={50} className="githubIcon" onClick={handleClickG} />
      <AiOutlineLinkedin
        size={50}
        className="linkedIcon"
        onClick={handleClickL}
      />
    </div>
  )
}

export default Footer
