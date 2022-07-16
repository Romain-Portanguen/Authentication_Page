import React from 'react'
import Login from './LoginForm/Login'
import loop from '../assets/sonow.mp4'
import logo from '../assets/logo.png'

function Main() {
  return (
    <>
      <div className='main'>
        <div className='overlay'></div>
        <video src={loop} autoPlay loop muted />
      </div>
      <div className='main-content'>
          <img src={logo} alt='SoNow application logo' />
          <Login />
      </div>
    </>
  )
}

export default Main;
