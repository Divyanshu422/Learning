import React from 'react'
import Header from '../Header'
import BackGround_Image from '../../assets/BackGround_Image.jpg'
const LoginPage = () => {
  return (
    <div>
      <Header/>
      <div>
        <img src={BackGround_Image} alt='BackGroundImage'/>
      </div>
    </div>
  )
}

export default LoginPage
