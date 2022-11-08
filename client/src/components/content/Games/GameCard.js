import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Img } from './Styling/GameCardStyle'

function GameCard({ game }) {

  const [isHovered, setIsHovered] = useState(false);
  const { id, title, image, genres } = game
  const navigate = useNavigate()


  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Img src={image} alt={title} />
      {isHovered && (
        <div className='hover'>
          <img className='image-container' src={image} alt={title} />
          <div className='info-container'>
            <h3 onClick={() => navigate(`/games/${id}`)}>{title}</h3>
            <div className='icons'>
              <div className="controls" ></div>
              <div className="genres">
                <ul >
                  {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

    </Container>
  )
}

export default GameCard