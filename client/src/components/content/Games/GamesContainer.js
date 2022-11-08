import React from 'react'
import GamesList from './GamesList'
import { Container } from './Styling/GamesContainer'


function GamesContainer() {
  

  return (
    <> 
    <Container>
      <div className='hero-container'> 
        <h1>Games</h1>
      </div>
      
    </Container>
    <div><GamesList/></div>
    
    
    </>
   
  )
}

export default GamesContainer