import React from 'react'
import {setContent} from '../../../features/Review/ReviewSlice'
import { useDispatch, useSelector } from 'react-redux'

function ReviewForm() {
  const dispatch = useDispatch()
  const content = useSelector(state => state.review.content)

    function handleChange(event){
        dispatch(setContent(event.target.value))
    }


  return (
    <form>
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