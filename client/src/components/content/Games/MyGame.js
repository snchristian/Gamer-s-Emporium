import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameLibrary } from "../../../features/games/GameSlice"
import GameCard from './GameCard'
import { Container } from './Styling/GameListStyle'


function MyGame() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/user_games')
      .then(res => res.json())
      .then((data) => dispatch(setGameLibrary(data)))
  }, [dispatch])


  const gameLibrary = useSelector(state => state.game.gameLibrary)

  const UserGame = gameLibrary.map(gamelibray => gamelibray.game).map(game => <GameCard key={game.id} game={game} />)

  return (
    <Container>
      <div className='content'>
        <h1>My Games</h1>
        <div className='grid'>{UserGame}</div>
      </div>
    </Container>
  )
}

export default MyGame