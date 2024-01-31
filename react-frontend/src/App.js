import logo from './logo.svg';
import './App.css';
import Router from './components/Router';
import Context from './components/Context';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';


function App() {

  const userInfo = {
    name: "Johnny",
    email: "codrkai@gamil.com",
    loggedIn: true,
    cartItems: 4
  }

  return(
    <>
        <Context.Provider value={userInfo}>
          <Router />
        </Context.Provider>      
    </>
  )  
}

export default App;
