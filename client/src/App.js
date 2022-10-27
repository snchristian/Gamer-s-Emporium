import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import {useFetchUserQuery} from './App/services/gamesApi'
import {useDispatch} from 'react-redux'
import {setCurrentuser,loggedIn } from "./features/session/SessionsSlice"
import {React,useEffect} from 'react';


function App() {

  // const {data} = useFetchUserQuery()

  const dispatch = useDispatch()

  useEffect(() => {
    fetch("/me", {
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            dispatch(setCurrentuser(user))
          })
        } 
      })
  }, [])





  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
