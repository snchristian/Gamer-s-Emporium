import './App.css';
import Navbar from './components/Navigation/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { useDispatch } from 'react-redux'
import { setCurrentuser, } from "./features/session/SessionsSlice"
import { React, useEffect } from 'react';
import Onboarding from './components/Static/Onboarding/Onboarding';
import Games from './components/content/Games/Games';
import Game from './components/content/Games/Game';
import MyGame from './components/content/Games/MyGame';


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
  }, [dispatch])





  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/onboarding' element={<Onboarding />}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/games/:id' element={<Game/>}/>
        <Route path='/my-games' element={<MyGame/>}/>
      </Routes>

    </div>
  );
}

export default App;

