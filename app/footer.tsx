"use client"
import { VscGithub } from "react-icons/vsc"
import { AiOutlineLinkedin } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { LuCopyCheck } from "react-icons/lu"
import { useState } from "react"

const Footer = () => {
  const handleClickG = () => {
    window.open("https://github.com/jl924/", "_blank")
  }
  const handleClickL = () => {
    window.open("https://www.linkedin.com/in/jae-hoon-lee/", "_blank")
  }
  const [copy, setCopy] = useState(false)
  const handleClickE = () => {
    navigator.clipboard.writeText("jaehlee.110994@gmail.com")
    setCopy(true)
  }

  return (
    <div className="footer">
      <VscGithub
        size={50}
        className="githubIcon items-center"
        onClick={handleClickG}
      />
      <AiOutlineLinkedin
        size={50}
        className="linkedIcon"
        onClick={handleClickL}
      />
      {copy ? (
        <LuCopyCheck size={50} className="copied" onClick={handleClickE} />
      ) : (
        <AiOutlineMail
          size={50}
          className="linkedIcon"
          onClick={handleClickE}
        />
      )}
    </div>
  )
}

export default Footer
