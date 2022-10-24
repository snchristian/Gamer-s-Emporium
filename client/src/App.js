import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';

function App() {
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
