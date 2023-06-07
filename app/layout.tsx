"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { VscGithub } from "react-icons/vsc"
import { AiOutlineLinkedin } from "react-icons/ai"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const handleClickG = () => {
    window.open("https://github.com/jl924/", "_blank")
  }
  const handleClickL = () => {
    window.open("https://www.linkedin.com/in/jae-hoon-lee/", "_blank")
  }

  return (
    <html lang="en">
      <head />
      <body>
        <div className="header">
          <div className="title">Jae Hoon Lee</div>
          <div className="buttonContainer">
            <button className="button">1</button>
            <button className="button">2</button>
            <button className="button">3</button>
          </div>
        </div>
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        {children}
        <footer />
        <div className="footer">
          <VscGithub size={50} className="githubIcon" onClick={handleClickG} />
          <AiOutlineLinkedin
            size={50}
            className="linkedIcon"
            onClick={handleClickL}
          />
        </div>
      </body>
    </html>
  )
}
