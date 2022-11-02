import React, { useEffect } from 'react'
import ReviewForm from './ReviewForm'
import { useDispatch,useSelector } from 'react-redux'
import {setGameReview} from '../../../features/Review/ReviewSlice'
import Review from './Review'




function Reviews() {
  const dispatch = useDispatch()
  const game_id = useSelector(state => state.game.singleGame.id)
  

  useEffect(()=>{
    fetch(`/games/${game_id}/reviews`)
    .then(res => res.json())
    .then((data) => dispatch(setGameReview(data)))
  },[dispatch,game_id])

  const gameReviews = useSelector(state => state.review.gameReviews)
  console.log(gameReviews)

const GameReview = gameReviews.map(gameReview  => <Review key={gameReview.id} gameReview={gameReview}/> )



  return (
    <main>
      <div>Reviews</div>
     <ReviewForm/>
     {GameReview}

    </main>
    
  )
}

export default Reviews
