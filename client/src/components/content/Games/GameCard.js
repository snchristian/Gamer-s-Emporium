import React from 'react'
import { useNavigate } from 'react-router-dom'


function GameCard({game}) {

    const {id,title,image} = game
    const navigate = useNavigate()
    
    
    
    return (
    <main>
        <img src ={image} alt={title}/>
        <h3 onClick={() => navigate(`/games/${id}`)}>{title}</h3>
        
        
    </main>

  )
}

export default GameCard