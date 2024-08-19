import React from 'react'

function LoginForm() {
  return (
    <form className='absolute flex flex-col items-center justify-center w-screen h-screen'>
        <div className='flex flex-col w-3/12 py-20 px-10 gap-y-6 rounded-md  bg-stone-950/80 '>
            <h1 className='text-4xl font-bold text-white md:w-10/12 sm:3/4 mx-auto'> Sign In</h1>
            <input type="email" name="email" placeholder="Email or Phone number" className='w-10/12 mx-auto rounded-md py-4 px-4 text-neutral-100 bg-slate-500/50' required />
            <input type="password" name="password" placeholder= 'Password' className='w-10/12 mx-auto rounded-md py-4 px-4 text-neutral-100 bg-slate-500/50' required/>
            <button className = 'w-10/12  mx-auto py-2 px-4 text-[#F8F6F4] text-xl font-bold bg-red-700'>SignIn</button>
        </div>
    </form>
  )
}

export default LoginForm
 