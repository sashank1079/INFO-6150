import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';

import About from './pages/About/About';
import Jobs from './pages/Jobs/Jobs'
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(){
    setIsLoggedIn(true);
  }

  return (
    <Router>
      {isLoggedIn && <MainPage/>}
      <Routes>
        <Route path='/' element={<LoginPage handle= {handleLogin}/>}></Route>
        {isLoggedIn &&
          <>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          </>
        }
      </Routes>
    </Router>
  );
}

export default App;
