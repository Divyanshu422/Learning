import React from 'react'
import Header from '../Header'
import BackGround_Image from '../../assets/BackGround_Image.jpg'
import LoginForm from './LoginForm'
const LoginPage = () => {
  return (
    <div className='relative'>
      <Header/>
        <LoginForm/>
        <img src={BackGround_Image} alt='BackGroundImage' className='w-screen h-screen'/>
      </div>

  )
}

export default LoginPage
