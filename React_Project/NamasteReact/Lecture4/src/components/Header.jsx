import React, { useState, useContext } from 'react'
import logo from '../Assets/FoodLogo.png'
import { Link } from 'react-router-dom'
import { RiWifiOffLine } from "react-icons/ri";
import { RiBaseStationLine } from "react-icons/ri";
import useOnlineStatus from '../utils/customHook/useOnlineStatus'
import { UserContext } from '../utils/Context/UserContext';
function Header() {

  const [ btnName, setBtnName ] =useState('LogIn')
  const onlineStatus = useOnlineStatus(UserContext);    // custom hook
  const {loggedInUser} = useContext(UserContext);   // context 

  return (
    <div>
    <div className="flex items-center justify-between border-2 border-red-400">
      <div className="logo-container">
        <img src={logo} className="w-[150px] pl-[20px] m-[10px]" />
      </div>
      <div className="">
        <ul className='flex m-[10px] list-none'>
          <li className='pl-3 text-[30px]'>
            {
              onlineStatus ? <RiBaseStationLine/> : <RiWifiOffLine />
            }
          </li>
          <li className='pl-6 text-[30px]'>
            <Link to ='/'>Home</Link>
          </li>
          <li className='pl-6 text-[30px]'>
            <Link to ='/about'>About Us</Link>
          </li>
          <li className='pl-6 text-[30px]'>
          <Link to ='/contactus'>Contact Us</Link>
          </li>
          <li className='pl-6 text-[30px]'>
            <Link to ='/grocery'>Grocery</Link>
          </li>
          <li className='pl-6 text-[30px]'>Cart</li>
          <li className='pl-6 text-[30px]'>
            <button className="bg-green-500 border-none text-white py-2 px-4 text-center no-underline inline-block text-base m-1.5 cursor-pointer rounded-lg transition ease-in-out duration-300" onClick={() => {
                setBtnName ((value)=> {
                  return value  === 'LogIn'? 'SignUp' : 'LogIn'
                })
            }}>{btnName}</button>
          </li>
          <li className='pl-6 text-[30px]'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
    </div>
  )
}
export default Header;

