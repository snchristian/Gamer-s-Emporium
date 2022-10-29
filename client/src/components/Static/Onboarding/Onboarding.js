import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQuestionQuery, useUpdateUserDataMutation } from "../../../App/services/gamesApi"
import { setCurrentQuestion } from '../../../features/Question/QuestionSlice'
import OnboardingItem from './OnboardingItem'
import { useNavigate } from 'react-router-dom'


function Onboarding() {
  
  const { data = [], isFetching } = useFetchQuestionQuery()
  const dispatch = useDispatch()
  const naviagte = useNavigate()
  // console.log(data)
  const currentQuestionId = useSelector(state => state.question.currentQuestionId)
  const userPlatform = useSelector(state => state.question.userPlatform)
  const userInterest = useSelector(state => state.question.userInterest)
  const currentUserId = useSelector(state => state.session.currentUser.id)

  const [updateUserData] = useUpdateUserDataMutation()


  const currentQuestion = data.find((question) => question.id === currentQuestionId)
  console.log(currentQuestion)
  console.log(data)

  function handleNextQuestion() {
    console.log("hi")
    if (currentQuestionId < data.length) {
      dispatch(setCurrentQuestion());
    }
    else {

      const user = {
        likes: userInterest,
        platforms: userPlatform
      }

      naviagte('/')
      dispatch(setCurrentQuestion(null));
      updateUserData({ id: currentUserId, user: user })
    }
    console.log(currentQuestion)
  }

  if (isFetching) return <div>Loading...</div>




  return (
    <div>
      <button onClick={handleNextQuestion}>click me</button>
      <h1>Tell us a little about how you game</h1>
      <main>
        {currentQuestion ? <OnboardingItem question={currentQuestion} /> : "loading"}
      </main>
    </div>

  )
}

export default Onboarding