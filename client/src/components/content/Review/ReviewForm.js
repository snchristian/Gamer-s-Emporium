import React from 'react'
import {setContent,addGameReview,clearContent} from '../../../features/Review/ReviewSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useAddUserRevviewMutation, } from '../../../App/services/gamesApi'

function ReviewForm() {

  const dispatch = useDispatch()

  const content = useSelector(state => state.review.content)

  const [addUserReview] = useAddUserRevviewMutation()

  const singleGameId = useSelector(state => state.game.singleGame.id)
  
    function handleChange(event){
        dispatch(setContent(event.target.value))
    }

    function addReview(event){
      event.preventDefault();
      const review = {
        content:content,
        game_id:singleGameId

      }

      addUserReview(review).unwrap().then(fullfiled => {
        dispatch(addGameReview(fullfiled))
      })
      dispatch(clearContent())

    }

  return (
    <form onSubmit={addReview}>
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