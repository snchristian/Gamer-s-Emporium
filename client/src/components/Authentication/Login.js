import { React, useState } from "react"
import { useDispatch } from 'react-redux'
import { useLoginUserMutation } from '../../App/services/gamesApi'
import { setCurrentuser } from "../../features/session/SessionsSlice"
import BackgroundImage from "./BackGroundImage"
import { Container, Form, FormContainer } from "./LoginStyle"
import { useNavigate } from 'react-router-dom'

function Login() {
 
  const dispatch = useDispatch()
 const naviagte = useNavigate()
 const [updateUser,{error,isError}] = useLoginUserMutation()

 
  const [UserData, setUserData] = useState({
    username: "",
    password: "",
  })

  function handleChange(event) {
    setUserData({
      ...UserData,
      [event.target.name]: event.target.value
    })
  }

  function handleLoggedIn(event) {
    event.preventDefault();

    const UserInfo = {
      username: UserData.username,
      password: UserData.password
    }

    updateUser(UserInfo).unwrap().then( fulfilled => 
      dispatch(setCurrentuser(fulfilled)).then(naviagte('/games'))).catch(rejected => console.log(rejected))
  }

  return (
    <Container>
      <BackgroundImage/>
      <div className="content">
        <FormContainer>
          <Form>
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container">
            <input placeholder='Username' type={"text"} name="username" id='username' value={UserData.username} onChange={handleChange} />
            <input placeholder='Password' type={"password"} name="password" id='password' value={UserData.password} onChange={handleChange} />
            <button onClick={handleLoggedIn}>Login to your account</button>
            {isError && <div>{error.data.error}</div>} 
            </div>
          </Form>
        </FormContainer>
      </div>
    </Container>
   
  )
}

export default Login