import React, { useEffect } from 'react'
import ReviewForm from './ReviewForm'
import { useDispatch,useSelector } from 'react-redux'
import {setGameReview} from '../../../features/Review/ReviewSlice'
import { useFetchReviewQuery,useAddUserRevviewMutation } from '../../../App/services/gamesApi'
import Review from './Review'
import { Container } from './ReviewStyle'

function Reviews() {
  const dispatch = useDispatch()
  const game_id = useSelector(state => state.game.singleGame.id)
  const {data,isFetching}=useFetchReviewQuery(game_id)
  const [addUserReview] = useAddUserRevviewMutation()

  useEffect(()=>{
    if(!isFetching){
      dispatch(setGameReview(data))
    }
  },[data,dispatch,isFetching])

  function addReview(body){
    console.log(body)
      
    const review = {
      rating:body.rating,
      content:body.content,
      game_id:game_id

    }

    addUserReview(review)
  }

  const gameReviews = useSelector(state => state.review.gameReviews)


const GameReview = gameReviews.map(gameReview  =>  (
  <ol className='list' key={gameReview.id}>
    <Review  gameReview={gameReview}/>

  </ol>

) )

  return (
    <Container>
      <div className='review-form'>
      <h3>Reviews</h3>
     <ReviewForm handleSubmit={addReview}/>
    </div>
    <div className='class'>
      {GameReview}
     </div>
    </Container>
    
    
  )
}

export default Reviews
