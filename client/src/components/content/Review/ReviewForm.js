import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import StarRating from './StarRating'
import { Container } from './ReviewStyle'



function ReviewForm({initalReview = {rating:null, content:null}, handleSubmit}) {

  const [content,setContent] =useState(initalReview.content)

  const [rating,setRating]=useState(initalReview.rating)
 
  
    function handleChange(event){
        setContent(event.target.value)
    }

    function onSubmit(event){

      event.preventDefault();
       const review ={rating:rating,content:content}
      handleSubmit(review)
      setContent([])
      setRating([]) 

    }

  return (
    <Container>
      <form className='form' onSubmit={onSubmit}>
      <StarRating setRating={setRating} rating={rating} />
        <textarea
        name='content'
        value={content}
        onChange={handleChange} 
        />
        <input className='submit' type='submit' value="post"/>
    </form>
    </Container> 
  )
}

export default ReviewForm