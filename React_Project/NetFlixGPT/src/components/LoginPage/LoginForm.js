import React from 'react'

function LoginForm() {
  return (
    <form className='absolute flex flex-col items-center justify-center w-screen h-screen'>
        <div className='flex flex-col w-3/12 py-20 px-10 gap-y-6 rounded-md  bg-slate-900/70 '>
            <h1> Sign In</h1>
            <input type="email" name="email" placeholder="Email or Phone number" />

            <input type="password" name="password" placeholder= 'Password'/>
            <button>SignIn</button>
        </div>
    </form>
  )
}

export default LoginForm
