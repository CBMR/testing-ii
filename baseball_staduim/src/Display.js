import React from 'react'

export default function Display(props) {
  return (
    <div>
      <div>
        <h1>DISPLAY</h1>
        <h2>Player: {props.name}</h2>
        <h4 data-testid = "strikes">Strikes: {props.player.strikes}</h4>
        <h4 data-testid = "balls">Balls: {props.player.balls}</h4>
      </div>
    </div>
  )
}
