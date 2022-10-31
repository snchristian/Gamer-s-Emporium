import React from 'react'
import { useFetchGamesQuery } from '../../../App/services/gamesApi'
import GameCard from './GameCard'

function GamesList() {
    
    const {data=[]} = useFetchGamesQuery()

    const displayGames = data.map(game => (
        <GameCard key={game.id} game={game}/>
    ))


  return (
    <main>
      <div>GamesList</div> 
      <div>{displayGames}</div> 
    </main>
    
  )
}

export default GamesList