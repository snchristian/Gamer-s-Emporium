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
        <Route path='/onboarding' element={<Onboarding />} />
      </Routes>

    </div>
  );
}

export default App;

