import { React, useState } from "react"
import { useSignupUserMutation } from '../../App/services/gamesApi'
import { useDispatch } from 'react-redux'
import { setCurrentuser } from "../../features/session/SessionsSlice"
import { useNavigate } from 'react-router-dom'
import BackgroundImage from "./BackGroundImage"
import { Container, Form, FormContainer } from "./LoginStyle"



function Signup() {

  const [updateUser,] = useSignupUserMutation()
  const dispatch = useDispatch()
  const naviagte = useNavigate()


  function handleSubmit(event) {

    event.preventDefault();

    const newUser = {
      user: {
        username: newUserData.username,
        email: newUserData.email,
        password: newUserData.password

      }
    }

    updateUser(newUser).unwrap().then(fulfilled => dispatch(setCurrentuser(fulfilled))).catch(rejected => console.error(rejected))
    console.log(newUser)
    naviagte('/onboarding')

  }

  const [newUserData, setNewUserData] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
  })

  function handleChange(event) {
    setNewUserData({
      ...newUserData,
      [event.target.name]: event.target.value
    })
  }
  
  return (
    <>
    <Container>
      <BackgroundImage/>
      <div className="content">
        <FormContainer>
          <Form>
            <div className="title">
              <h3>Signup</h3>
            </div>
            <div className="container">
            <input placeholder="User Name" type={"text"} name="username" id="username" value={newUserData.username} onChange={handleChange} />
            <input placeholder="Email" type={"text"} name="email" id="email" value={newUserData.email} onChange={handleChange} />
            <input placeholder="password" type={"password"} name="password" id="password" value={newUserData.password} onChange={handleChange} />
            <button onClick={handleSubmit}>Create Account</button>
            </div>
          </Form>
        </FormContainer>
      </div>
    </Container>

    </>
  
     
  )
}

export default Signup