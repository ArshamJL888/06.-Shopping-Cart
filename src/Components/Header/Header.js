import './Header.css'
import Navbar from './Navbar'
import React from 'react'

export default function Header() {
  return (
    <>
      <div className='header-top'>
        <img src="./icons/icons8-shopping-100.png" alt="logo" />
        <Navbar />
        <button className='btn'>Sign in / Sign up Free</button>
      </div>
    </>
  )
}
