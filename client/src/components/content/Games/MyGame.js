import React, { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {setGameLibrary} from "../../../features/games/GameSlice"
import GameCard from './GameCard'


function MyGame() {
    
    const dispatch = useDispatch()
  
  
    useEffect(() =>{
        fetch('/user_games')
        .then(res => res.json())
        .then((data) => dispatch(setGameLibrary(data)))
    },[dispatch])

    



    const gameLibrary = useSelector(state => state.game.gameLibrary)
    console.log(gameLibrary)

    const UserGame = gameLibrary.map(gamelibray => gamelibray.game).map(game =><GameCard key={game.id} game={game}/>)
    console.log(UserGame)


  return (
    <div>{UserGame}</div>
    

  )
}

export default MyGame