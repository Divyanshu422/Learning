import React from 'react'
import logo from '../Assets/FoodLogo.png'
function Header() {
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
        </ul>
      </div>
    </div>
    </div>
  )
}
export default Header;

