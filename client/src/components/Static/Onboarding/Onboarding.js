import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQuestionQuery, useUpdateUserDataMutation } from "../../../App/services/gamesApi"
import { setCurrentQuestion } from '../../../features/Question/QuestionSlice'
import { setCurrentuser } from "../../../features/session/SessionsSlice"
import OnboardingItem from './OnboardingItem'
import { useNavigate } from 'react-router-dom'

function Onboarding() {

  const { data = [], isFetching } = useFetchQuestionQuery()
  const currentQuestionId = useSelector(state => state.question.currentQuestionId)
  const userPlatform = useSelector(state => state.question.userPlatform)
  const userInterest = useSelector(state => state.question.userInterest)
  const currentUserId = useSelector(state => state.session.currentUser.id)
  const [updateUserData] = useUpdateUserDataMutation()
  const naviagte = useNavigate()
  const dispatch = useDispatch()

  const currentQuestion = data.find((question) => question.id === currentQuestionId)

  function handleNextQuestion() {
    if (currentQuestionId < data.length) {
      dispatch(setCurrentQuestion());
    }
    else {

      const user = {
        likes: userInterest,
        platforms: userPlatform
      }

      naviagte('/games')
      dispatch(setCurrentQuestion(null));
      updateUserData({ id: currentUserId, user: user }).unwrap().then(fullied => dispatch(setCurrentuser(fullied)))
    }
  }

  if (isFetching) return <div>Loading...</div>

  return (
    <div >
      <OnboardingItem question={currentQuestion} handleNextQuestion={handleNextQuestion} />
    </div>
  )
}

export default Onboarding