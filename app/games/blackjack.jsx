"use client"
import Image from "next/image"
import React, { useState, useEffect } from "react"

export default function Blackjack() {
  const deck = [
    "A ♠️",
    "2 ♠️",
    "3 ♠️",
    "4 ♠️",
    "5 ♠️",
    "6 ♠️",
    "7 ♠️",
    "8 ♠️",
    "9 ♠️",
    "10 ♠️",
    "J ♠️",
    "Q ♠️",
    "K ♠️",
    "A ♥️",
    "2 ♥️",
    "3 ♥️",
    "4 ♥️",
    "5 ♥️",
    "6 ♥️",
    "7 ♥️",
    "8 ♥️",
    "9 ♥️",
    "10 ♥️",
    "J ♥️",
    "Q ♥️",
    "K ♥️",
    "A ♦️",
    "2 ♦️",
    "3 ♦️",
    "4 ♦️",
    "5 ♦️",
    "6 ♦️",
    "7 ♦️",
    "8 ♦️",
    "9 ♦️",
    "10 ♦️",
    "J ♦️",
    "Q ♦️",
    "K ♦️",
    "A ♣️",
    "2 ♣️",
    "3 ♣️",
    "4 ♣️",
    "5 ♣️",
    "6 ♣️",
    "7 ♣️",
    "8 ♣️",
    "9 ♣️",
    "10 ♣️",
    "J ♣️",
    "Q ♣️",
    "K ♣️",
  ]

  const [hard, setHard] = useState(0)
  const [soft, setSoft] = useState(0)
  const [dealerHard, setDealerHard] = useState(0)
  const [dealerSoft, setDealerSoft] = useState(0)

  let addHard = async (n) => {
    if (n === "A") {
      await setHard((current) => current + 11)
    } else if (n === "J" || n === "Q" || n === "K") {
      await setHard((current) => current + 10)
    } else {
      await setHard((current) => current + Number(n))
    }
  }

  let addSoft = async (n) => {
    if (n === "A") {
      await setSoft((current) => current + 1)
    } else if (n === "J" || n === "Q" || n === "K") {
      await setSoft((current) => current + 10)
    } else {
      await setSoft((current) => current + Number(n))
    }
  }

  let addDealerHard = async (n) => {
    if (n === "A") {
      await setDealerHard((current) => current + 11)
    } else if (n === "J" || n === "Q" || n === "K") {
      await setDealerHard((current) => current + 10)
    } else {
      await setDealerHard((current) => current + Number(n))
    }
  }

  let addDealerSoft = async (n) => {
    if (n === "A") {
      await setDealerSoft((current) => current + 1)
    } else if (n === "J" || n === "Q" || n === "K") {
      await setDealerSoft((current) => current + 10)
    } else {
      await setDealerSoft((current) => current + Number(n))
    }
  }

  const [player, setPlayer] = useState([])
  let addCard = async () => {
    var cardNumber = Math.floor(Math.random() * deck.length)
    await setPlayer((prevPlayer) => [...prevPlayer, deck[cardNumber]])
    await addHard(deck[cardNumber].split(" ")[0])
    await addSoft(deck[cardNumber].split(" ")[0])
    await deck.splice(cardNumber, 1)
  }
  let giveCard = async () => {
    await addCard()
    await new Promise((resolve) =>
      setTimeout(() => {
        setDummy((current) => current + 1)
        resolve()
      }, 100)
    )
  }
  const [dealer, setDealer] = useState([])

  let giveCardDealer = async () => {
    var cardNumber = Math.floor(Math.random() * deck.length)
    await setDealer((prevDealer) => [...prevDealer, deck[cardNumber]])
    await addDealerHard(deck[cardNumber].split(" ")[0])
    await addDealerSoft(deck[cardNumber].split(" ")[0])
  }

  const [start, setStart] = useState(true)
  let startGame = async () => {
    await addCard()
    await addCard()
    await giveCardDealer()
    await setStart(false)
  }

  const [dummy, setDummy] = useState([])
  const [stay, setStay] = useState(true)

  let endPhase = async () => {
    await setStay(false)
    await giveCardDealer()
    await new Promise((resolve) =>
      setTimeout(() => {
        setDummy((poo) => poo + 1)
        resolve()
      }, 2000)
    )
  }

  useEffect(() => {
    if (dealer.length > 1) {
      var highestPlayer = hard < 22 && hard >= soft ? hard : soft
      var highestDealer =
        dealerHard < 22 && dealerHard >= dealerSoft ? dealerHard : dealerSoft
      if (dealerSoft > 17) {
        if (dealerSoft > 21) {
          var newMoney = bet + bet + money
          localStorage.setItem("money", newMoney)
          alert("Dealer busted, YOU WIN")
        } else if (highestPlayer > highestDealer) {
          var newMoney = bet + bet + money
          localStorage.setItem("money", newMoney)
          alert("YOU WIN")
        } else if (highestPlayer < highestDealer) {
          localStorage.setItem("money", money)
          alert("YOU LOSE")
        } else {
          var newMoney = bet + money
          localStorage.setItem("money", newMoney)
          alert("TIE")
        }
        window.location.reload(false)
      } else if (dealerHard >= 17 && dealerHard <= 21) {
        if (dealerSoft > 21) {
          var newMoney = bet + bet + money
          localStorage.setItem("money", newMoney)
          alert("Dealer busted, YOU WIN")
        } else if (highestPlayer > highestDealer) {
          var newMoney = bet + bet + money
          localStorage.setItem("money", newMoney)
          alert("YOU WIN")
        } else if (highestPlayer < highestDealer) {
          localStorage.setItem("money", money)
          alert("YOU LOSE")
        } else {
          localStorage.setItem("money", newMoney)
          alert("TIE/PUSH")
        }
        window.location.reload(false)
      } else {
        endPhase()
      }
    }
    if (soft > 21) {
      localStorage.setItem("money", money)
      alert("YOU BUSTED YOU LOSE")
      window.location.reload(false)
    }
  }, [dummy])

  const [money, setMoney] = useState(0)
  useEffect(() => {
    if (localStorage.getItem("money")) {
      setMoney(Number(localStorage.getItem("money")))
    } else {
      setMoney(1000)
    }
  }, [])

  const [bet, setBet] = useState(0)

  return (
    <div className="container">
      <div className="gameContainer">
        <div className="dealerContainer">
          <h4>Dealer</h4>
          <div className="cardContainer">
            <h3> Hard Count: {dealerHard}</h3>
            <h3> Soft Count: {dealerSoft}</h3>
          </div>
          <div className="cardContainer">
            {dealer.map((cardDealer) => {
              return (
                <h5 key={cardDealer} className={cardDealer.split(" ")[1]}>
                  {cardDealer}
                </h5>
              )
            })}
          </div>
        </div>
        <div className="playerContainer">
          <div className="cardContainer">
            {player.map((card) => {
              return (
                <h5 key={card} className={card.split(" ")[1]}>
                  {card}
                </h5>
              )
            })}
          </div>
          <div className="cardContainer">
            {start ? (
              <button className="bjButton" onClick={startGame}>
                Start
              </button>
            ) : (
              <>
                {stay ? (
                  <button className="bjButton" onClick={giveCard}>
                    Hit
                  </button>
                ) : null}
                {stay ? (
                  <button className="bjButton" onClick={endPhase}>
                    Stay
                  </button>
                ) : null}
              </>
            )}
          </div>
          <div className="cardContainer">
            <h3> Hard Count: {hard}</h3>
            <h3> Soft Count: {soft}</h3>
          </div>
          <h4>Player</h4>
          <h5>{money} 🪙</h5>
        </div>
      </div>
      <div className="betContainer">
        <div className="bet">Bet Amount: {bet}</div>
        {start ? (
          <>
            <button
              className="betButton"
              onClick={() => {
                setBet((current) => current + 10)
                setMoney((current) => current - 10)
              }}
            >
              10
            </button>
            <button
              className="betButton"
              onClick={() => {
                setBet((current) => current + 20)
                setMoney((current) => current - 20)
              }}
            >
              20
            </button>
            <button
              className="betButton"
              onClick={() => {
                setBet((current) => current + 40)
                setMoney((current) => current - 40)
              }}
            >
              40
            </button>
            <button
              className="betButton"
              onClick={() => {
                setBet((current) => current + 100)
                setMoney((current) => current - 100)
              }}
            >
              100
            </button>
            <button
              className="betButton"
              onClick={() => {
                setMoney((current) => current + bet)
                setBet(0)
              }}
            >
              Clear
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
}
