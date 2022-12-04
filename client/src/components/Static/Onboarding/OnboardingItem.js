import React from 'react'
import { useDispatch} from 'react-redux'
import { selectUserIntrest, unselectInterest, selectUserPlatform, unselectPlatform } from '../../../features/Question/QuestionSlice'
import {FaChessQueen} from 'react-icons/fa'
import { Container } from './OnboardingStyle'

function OnboardingItem({question,handleNextQuestion}) {
  console.log(question)

  const {  prompt, answers, kind } = question
  
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { value, checked, name } = event.target

    if (checked && name === "interest") {
      dispatch(selectUserIntrest(value))
    }
    else if (!checked) {
      dispatch(unselectInterest(value))

    }
    else if (checked && name === "platform") {
      dispatch(selectUserPlatform(value))
    }
    else {
      dispatch(unselectPlatform(value))
    }
  }

  const options = answers.map(answer => {
    return (
      <div key={answer} className='form-element'>
        <input
          className="interest"
          type="checkbox"
          id={answer}
          name={kind}
          value={answer}
          onChange={handleChange}
        />
        <label
          className="interest" htmlFor={answer}>
            <div className='icon'><FaChessQueen className='fa-queen'/></div>
          <div className='title'>{answer}</div>
        </label>
      </div>
    )
  })

  return (
    <Container className='container'>
      <h2>{prompt}</h2>
      <div className='wrapper'>
        <div className='list'>
       {options}
      </div>
      </div>
      <button onClick={handleNextQuestion}>Next</button>
    </Container>
  )
}

export default OnboardingItem;