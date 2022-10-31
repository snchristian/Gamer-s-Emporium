import React from 'react'
import { Link } from 'react-router-dom'
import { loggedOut } from "../../features/session/SessionsSlice"
import { useDispatch,useSelector } from 'react-redux'
import { useLogOutUserMutation } from '../../App/services/gamesApi'


function Navbar() {

  const [deleteUser] = useLogOutUserMutation()
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.session.loggedIn)

  function handleLoggedOut() {
    deleteUser().unwrap().then(dispatch(loggedOut()))
  }


  function unauthorizedUserLinks(){
    return(
      <div>
      <Link to="/Signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      </div>
    )
  }

  function authorizedUserLinks(){
    return(
       <div>
      <Link to="/games">Games</Link>
      <Link to="/my-games">My Games</Link>
      <button onClick={handleLoggedOut}>LogOut</button>
    </div>
    )
   
    
  }

  return (
    <div>
      {loggedIn ? authorizedUserLinks() : unauthorizedUserLinks()}
    </div>
  )
}

export default Navbar