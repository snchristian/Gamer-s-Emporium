import React from 'react'
import { useDispatch } from 'react-redux'
import { selectUserIntrest, unselectInterest, selectUserPlatform, unselectPlatform } from '../../../features/Question/QuestionSlice'


function OnboardingItem({ question }) {


  const {  prompt, answers, kind } = question
  console.log(question)
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
      <div key={answer}>
        <input
          className="form-check-input"
          type="checkbox"
          name={kind}
          value={answer}
          id="flexCheckDefault"
          onChange={handleChange}

        />
        <label
          className="form-check-label"
          htmlFor="flexCheckDefault">
          {answer}
        </label>
      </div>
    )
  })

  return (
    <div>
      <h2>{prompt}</h2>
      {options}
    </div>

  )
}

export default OnboardingItem;