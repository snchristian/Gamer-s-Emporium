import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loggedOut } from "../../features/session/SessionsSlice"
import { useDispatch,useSelector } from 'react-redux'
import { useLogOutUserMutation } from '../../App/services/gamesApi'
import { NavbarContainer } from './NavbarStyle'
import {FaDungeon,FaTimes,FaBars,FaPowerOff} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


function Navbar() {

  const dispatch = useDispatch() 
  const naviagte = useNavigate()
  const [deleteUser] = useLogOutUserMutation()
  const loggedIn = useSelector(state => state.session.loggedIn)
  const [click, setClick] = useState(false)
  
  function handleLoggedOut() {
    deleteUser().unwrap().then(dispatch(loggedOut()))
    naviagte('/')

  }

  function handleClick(){
    setClick(!click)
  }


  function unauthorizedUserLinks(){
    return(
      <ul className={click ? "nav-menu active": "nav-menu"}>
        <li className="nav-item">
         <Link to="/Signup"className="nav-links" >Signup</Link>
        </li>
        <li className="nav-item">
         <Link to="/login"className="nav-links" >Login</Link>
        </li>
        <li className="nav-item" >
         <Link to="/" className="nav-links" >Home</Link>
        </li>
      </ul>
    )
  }

  function authorizedUserLinks(){
    return(
      <ul className={click ? "nav-menu active": "nav-menu"}>
        <li className="nav-item">
         <Link to="/games"className="nav-links" >Games</Link>
        </li>
        <li className="nav-item">
         <Link to="/my-games" className="nav-links">My Games</Link>
        </li>
        <li className="nav-item">
         <button className='logout' onClick={handleLoggedOut}><FaPowerOff size={25}/></button>
        </li>
        </ul> 
    )
    
  }

  return (
    <>
    <NavbarContainer>
      <nav className='navbar'>
    <div className='navbar-container'>
      <Link to='/' className='navbar-logo'>Game's Emporium <FaDungeon className='fa-dungeon' size={50}/></Link>
        <div className='menu-icon' onClick={handleClick}>{click ? <FaTimes className='fa-times'/>: <FaBars className='fa-bars'/> }</div>
        <ul className={click ? "nav-menu active": "nav-menu"}>    
        </ul>
        {loggedIn ? authorizedUserLinks() : unauthorizedUserLinks()}
    </div>
    </nav>
    </NavbarContainer>
    
    </>

    
  )
}

export default Navbar