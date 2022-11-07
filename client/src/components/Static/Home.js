import React from 'react'
import { Container } from './HomeStyle'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Home() {
const loggedIn= useSelector(state => state.session.loggedIn)

const naviagte = useNavigate()
  
function handleRedirect (){
    
    if(loggedIn){
      naviagte("/games")
    }
    else{
      naviagte("/login")
    }
  }


  return (
    <Container>
      <h1>Game's Emporium</h1>
      <button onClick={handleRedirect}>Enter</button>  
    </Container>
  )
}

export default Home