import {React,useState} from "react"
import { useDispatch} from 'react-redux'
import {useFetchUserQuery,useLoginUserMutation} from '../../App/services/gamesApi'
import { loggedIn, setCurrentuser } from "../../features/session/SessionsSlice"

function Login() {
  const [updatePost] = useLoginUserMutation()
  

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


  const dispatch = useDispatch()

  function handleLoggedIn(event){
    event.preventDefault();

    const UserInfo = {
      username: UserData.username,
      password: UserData.password
    }

    // dispatch(loggedIn())
    updatePost(UserInfo).unwrap().then(fulfilled => dispatch(setCurrentuser(fulfilled))).catch(rejected => console.error(rejected))

  }



  return (
    <form onSubmit={handleLoggedIn}>
       <h2>Login</h2>
            <div>
              <input placeholder='Username' type={"text"} name="username" id='username' value={UserData.username} onChange={handleChange} />
            </div>
            <div>
              <input placeholder='Password' type={"password"} name="password" id='password' value={UserData.password} onChange={handleChange} />
            </div>
            <div>
              <input className="submit" type={"submit"} value="Login" />
            </div>
    </form>
  )
}

export default Login