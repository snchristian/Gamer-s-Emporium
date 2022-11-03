import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Wrapper } from './ReviewStyle'

function StarRating({ setRating, rating }) {
  
  const [hover, setHover] = useState(null)
  
  return (
    <Wrapper>
      <div>{[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label>
            <FaStar className='star' size={20} color={ratingValue <= (hover || rating) ? "#ffc107" : "e4e5e9"} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
            <input type="radio" name='rating' value={ratingValue} onClick={() => setRating(ratingValue)} />
          </label>
        )
      })}</div>
    </Wrapper>
  )
}

export default StarRating