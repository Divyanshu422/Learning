import React, { useState } from 'react'
import logo from '../Assets/FoodLogo.png'
function Header() {

  const [ btnName, setBtnName ] =useState('LogIn')
  return (
    <div>
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="btn" onClick={() => {
                setBtnName ((value)=> {
                  return value === 'LogIn'? 'SignUp' : 'LogIn'
                })
            }}>{btnName}</button>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}
export default Header;

