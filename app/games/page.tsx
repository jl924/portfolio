import "./game.css"
import Blackjack from "./blackjack"

const Games = () => {
  return (
    <div className="game">
      <div className="gameBox">
        <Blackjack />
      </div>
      <div className="gameSelection">
        <h4>Games</h4>
        <button className="gamePick">Black Jack</button>
      </div>
    </div>
  )
}

export default Games
