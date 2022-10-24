import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <Link to="/Signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/">home</Link>
    </div>
  )
}

export default Navbar