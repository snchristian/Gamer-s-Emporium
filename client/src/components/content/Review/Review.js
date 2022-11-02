import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteUserReviewMutation } from '../../../App/services/gamesApi'

function Review({gameReview}) {
  const {id,content} = gameReview
  const [deleteUserReview] = useDeleteUserReviewMutation()
  

  function handleDeleteReview(){
    deleteUserReview(id)

  }

  return (
    <main>
      <div>Review</div>
      {content}
      <button onClick={handleDeleteReview}>delete Review</button>
    </main>
    

  )
}

export default Review