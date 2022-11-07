import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDeleteUserReviewMutation, useEditUserReviewMutation } from '../../../App/services/gamesApi'
import ReviewForm from './ReviewForm'
import { setActiveComment } from '../../../features/Review/ReviewSlice'
import StarRating from './StarRating'
import { FaPen, FaTrash } from 'react-icons/fa'
import { User } from './ReviewStyle'


function Review({ gameReview }) {
  const { id, content, rating, username } = gameReview
  const [deleteUserReview] = useDeleteUserReviewMutation()
  const [editUserReview] = useEditUserReviewMutation()
  const canModify = gameReview.can_modify
  const activeReview = useSelector(state => state.review.activeReview)
  const isEditing = activeReview && activeReview.id === id
  const dispatch = useDispatch()


  function handleDeleteReview() {
    deleteUserReview(id)

  }

  function handleEditUserReview(body) {
    const review = {
      rating: body.rating,
      content: body.content
    }

    editUserReview({ id: id, review: review })
    dispatch(setActiveComment(null))

  }

  return (
    <li>
      <User>
        <div className='name'>
          <div class="img one" alt="user">{username.charAt(0)}</div>
          <p className='username'>{username}</p>
        </div>
        <StarRating rating={rating} />
        <span className='icons'>
          {canModify && <FaPen className='fa-pen' onClick={() => dispatch(setActiveComment({ id: id }))} />}
          {canModify && <FaTrash className='fa-trash' onClick={handleDeleteReview} />}
        </span>
      </User>
      <div className='review-wrapper'>
        {!isEditing && <div className='body'>{content}</div>}
        {isEditing && (<ReviewForm initalReview={{ rating: rating, content: content }} handleSubmit={handleEditUserReview} />)}
      </div>
    </li>


  )
}

export default Review