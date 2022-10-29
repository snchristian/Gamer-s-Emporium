import React from 'react'
import { Link } from 'react-router-dom'
import { loggedOut } from "../../features/session/SessionsSlice"
import { useDispatch } from 'react-redux'
import { useLogOutUserMutation } from '../../App/services/gamesApi'


function Navbar() {

  const [deleteUser] = useLogOutUserMutation()
  const dispatch = useDispatch()

  function handleLoggedOut() {
    deleteUser().unwrap().then(dispatch(loggedOut()))
  }

  return (
    <div>
      <Link to="/Signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/">home</Link>
      <button onClick={handleLoggedOut}>LogOut</button>
    </div>
  )
}

export default Navbar