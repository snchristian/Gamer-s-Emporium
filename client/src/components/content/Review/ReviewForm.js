import React from 'react'
import {setContent,clearContent} from '../../../features/Review/ReviewSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useAddUserRevviewMutation, } from '../../../App/services/gamesApi'
import { useState } from 'react'


function ReviewForm() {

  const dispatch = useDispatch()

  const content = useSelector(state => state.review.content)

  const [addUserReview] = useAddUserRevviewMutation()

  const singleGameId = useSelector(state => state.game.singleGame.id)

  const [rating,setRating]=useState()
  
    function handleChange(event){
        dispatch(setContent(event.target.value))
    }

    function handleChange2(event){
      setRating(event.target.value)
    }

    function addReview(event){
      event.preventDefault();
      const review = {
        rating:rating,
        content:content,
        game_id:singleGameId

      }

      addUserReview(review)
      dispatch(clearContent())

    }

  return (
    <form onSubmit={addReview}>
      <input name='rating' value={rating} onChange={handleChange2}/>
        <textarea
        name='content'
        value={content}
        onChange={handleChange} 
        />
        <input className='submit' type='submit' value="post"/>
    </form>
  )
}

export default ReviewForm