import "./globals.css"
import { Inter } from "next/font/google"
import { VscGithub } from "react-icons/vsc"
import { AiOutlineLinkedin } from "react-icons/ai"
import Footer from "./footer"
import Header from "./header"
import Background from "./background"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Background />
        <Footer />
        {children}
      </body>
    </html>
  )
}
