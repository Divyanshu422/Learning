import React from 'react'
import { NavLink } from 'react-router-dom'
function LoginForm() {
  return (
    <form className='absolute flex flex-col items-center justify-center w-screen h-screen'>
        <div className='flex flex-col w-3/12 py-20 px-10 gap-y-6 rounded-md  bg-stone-950/80 '>


            <h1 className='text-4xl font-bold text-white w-10/12  mx-auto'> Sign In</h1>
            <input type="email" name="email" placeholder="Email or Phone number" className='w-10/12 mx-auto rounded-md py-4 px-4 text-neutral-100 bg-slate-600/50' required />
            <input type="password" name="password" placeholder= 'Password' className='w-10/12 mx-auto rounded-md py-4 px-4 text-neutral-100 bg-slate-600/50' required/>
            <button className = 'w-10/12  mx-auto py-2 px-4 text-[#F8F6F4] text-xl font-bold bg-red-700'>SignIn</button>

            <div className='flex w-10/12 text-sm justify-between mx-auto'>
                <div className='flex'>
                    <input type='checkbox' name=''/>
                    <p className='text-slate-300 pl-2 '>Remember Me</p>
                </div>
                <NavLink className="text-slate-300"> Need Help?</NavLink>
            </div>
            <div className='w-10/12  mx-auto'>
                <p className='text-gray-400'>New to Netflix? <span className='text-white'>Sign up now</span></p>
                <p className='text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span><NavLink className='text-blue-400'>Learn more.</NavLink></span></p>
            </div>
        </div>
    </form>
  )
}

export default LoginForm
 