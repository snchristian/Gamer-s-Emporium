import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchGamesQuery,useAddGameMutation,useRemoveGameMutation } from '../../../App/services/gamesApi'
import { useDispatch,useSelector } from 'react-redux'
import {setSingleGame} from "../../../features/games/GameSlice"

function Game() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const {data=[]} = useFetchGamesQuery()
    const [addGame] = useAddGameMutation()
    const [removeGame]= useRemoveGameMutation()
    





    useEffect(() =>{
        
        if(data.length > 0){
            const game = data.find(g => g.id.toString() === id)
            console.log(data)
        dispatch(setSingleGame(game))
        }
        
    },[data,id,dispatch])

  const singleGame = useSelector(state => state.game.singleGame)
  const requesting = useSelector(state => state.game.requesting)
  const {image,title,released_date,platforms,genres} = singleGame
  console.log(singleGame)

  const inLibrary = singleGame.inUserGameLibrary
 
  if(requesting){
    return(<div>loading ....</div>)
  }

  function addtoLibrary(){
    
    addGame({game_id:id}).unwrap().then(fulfilled =>{
      const updatedgame = {...singleGame,inUserGameLibrary:fulfilled}
      dispatch(setSingleGame(updatedgame))

    })

  }

  function removeFromLibrary(){
  
    removeGame(singleGame.inUserGameLibrary.id).unwrap().then(fulfilled =>{
      const updatedgame = {...singleGame,inUserGameLibrary:null}
      dispatch(setSingleGame(updatedgame))
    })
    
  }

  

  return (
    <main>
        <h2>{title}</h2>
        <img src={image} alt={title}/>
        {!inLibrary && <button onClick={addtoLibrary}>Add to My Games</button>}
        {inLibrary && <button onClick={removeFromLibrary}>Remove From Library</button>}
        <div>Released Date: {released_date}</div>
        <div>{genres.map(genre => <span key={genre}>{genre} </span>)}</div>
        <div>{platforms.map(platform => <span key={platform}>{platform} </span>)}</div>   
</main>
  )
}

export default Game