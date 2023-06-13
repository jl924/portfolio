import "./game.css"
import Blackjack from "./blackjack"

const Games = () => {
  return (
    <div className="game">
      <p className="intro">
        Hello and thank you for looking around! Enjoy your time here with some
        games! More games to be added!
      </p>
      <div className="gameBox">
        <Blackjack />
      </div>
      <div className="gameSelection">
        <h4>Games</h4>
        <select className="gameDropdown">
          <option value="blackjack">Blackjack</option>
        </select>
      </div>
    </div>
  )
}

export default Games
