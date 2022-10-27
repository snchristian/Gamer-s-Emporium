import {React,useState} from "react"
import {useSignupUserMutation} from '../../App/services/gamesApi'
import {useSelector, useDispatch} from 'react-redux'
import { loggedIn, setCurrentuser } from "../../features/session/SessionsSlice"


function Signup() {

  const [updatePost,] = useSignupUserMutation()
  // console.log(results)
  const dispatch = useDispatch()

  function handleSubmit(event){
    event.preventDefault();
    const newUser = {
      user: {
        username: newUserData.username,
        email: newUserData.email,
        password: newUserData.password

      }
    }

    updatePost(newUser).unwrap().then(fulfilled => dispatch(setCurrentuser(fulfilled))).catch(rejected => console.error(rejected))
    console.log(newUser)
    
  }
    
    const [newUserData,setNewUserData] = useState({
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
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input placeholder="User Name" type={"text"} name="username" id="username" value={newUserData.username} onChange={handleChange}/>
            <input placeholder="Email" type={"text"} name="email" id="email"  value={newUserData.email} onChange={handleChange}/>
            <input placeholder="password" type={"password"} name="password" id="password" value={newUserData.password} onChange={handleChange}/>
            <input type={"submit"} value="Create An Account"/>
        </form>

    </div>
  )
}

export default Signup