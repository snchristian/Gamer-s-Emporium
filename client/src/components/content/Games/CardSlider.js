import React from 'react'
import GameCard from './GameCard'
import { Container } from './Styling/CardSliderStyle'

function CardSlider({data,title}) {
    
    const displayCard = data.map(game => {
        return <GameCard game={game} key={game.id}/>
    })

  return (
    <Container>
        <h1>{title}</h1>
       <div className='wrapper'>
        <div className='card-container'>
            {displayCard}
        </div>
    </div>
    </Container>
   
  )
}

export default CardSlider