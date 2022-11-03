import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useDeleteUserReviewMutation,useEditUserReviewMutation } from '../../../App/services/gamesApi'
import ReviewForm from './ReviewForm'
import {setActiveComment} from '../../../features/Review/ReviewSlice'
import StarRating from './StarRating'

function Review({gameReview}) {
  const {id,content,rating} = gameReview
  const [deleteUserReview] = useDeleteUserReviewMutation()
  const [editUserReview] = useEditUserReviewMutation()
  const canModify = gameReview.can_modify
  const activeReview = useSelector(state => state.review.activeReview)
  const isEditing = activeReview && activeReview.id === id
  const dispatch = useDispatch()
  

  function handleDeleteReview(){
    deleteUserReview(id)

  }

  function handleEditUserReview(body){
    const review ={
      rating:body.rating,
      content:body.content
    }

    editUserReview({id:id,review:review})
    dispatch(setActiveComment(null))

  }

  return (
    <main>
      <div>Review</div>
      <StarRating rating={rating}/>
      {!isEditing && <div>{content}</div>}
      {isEditing && (<ReviewForm initalReview={{rating:rating, content:content}} handleSubmit={handleEditUserReview}  />)}
      <button onClick={handleDeleteReview}>delete Review</button>
      <button onClick={() => dispatch(setActiveComment({id:id}))}>edit</button>

    </main>
    

  )
}

export default Review