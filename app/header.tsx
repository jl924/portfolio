import Link from "next/link"

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <Link href="/">Jae Hoon Lee</Link>
      </div>
      <div className="buttonContainer">
        <button className="button">
          <Link href="/projects">Projects</Link>
        </button>
        <button className="button">
          <Link href="/uxuilead">UX/UI Lead</Link>
        </button>
        <button className="button">
          <Link href="/games">Soon...</Link>
        </button>
      </div>
    </div>
  )
}

export default Header
