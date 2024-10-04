import React, { useState } from 'react'
import logo from '../Assets/FoodLogo.png'
import { Link } from 'react-router-dom'
import { RiWifiOffLine } from "react-icons/ri";
import { RiBaseStationLine } from "react-icons/ri";
import useOnlineStatus from '../utils/customHook/useOnlineStatus'
function Header() {

  const [ btnName, setBtnName ] =useState('LogIn')
  const onlineStatus = useOnlineStatus();
  return (
    <div>
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {
              onlineStatus ? <RiBaseStationLine /> : <RiWifiOffLine />
            }
          </li>
          <li>
            <Link to ='/'>Home</Link>
          </li>
          <li>
            <Link to ='/About'>About Us</Link>
          </li>
          <li>
          <Link to ='/Contact'>Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button className="btn" onClick={() => {
                setBtnName ((value)=> {
                  return value  === 'LogIn'? 'SignUp' : 'LogIn'
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

