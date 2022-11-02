import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteUserReviewMutation } from '../../../App/services/gamesApi'

function Review({gameReview}) {
  const {id,content,rating} = gameReview
  const [deleteUserReview] = useDeleteUserReviewMutation()
  

  function handleDeleteReview(){
    deleteUserReview(id)

  }

  console.log(useSelector(state => state.review.gameReviews))

  return (
    <main>
      <div>Review</div>
      {rating}
      {content}
      <button onClick={handleDeleteReview}>delete Review</button>
    </main>
    

  )
}

export default Review