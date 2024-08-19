import React from 'react'

function LoginForm() {
  return (
    <form className='absolute'>
        <div className='flex flex-col'>
            <h1> Sign In</h1>
            <input type="email" name="email" placeholder="Email or Phone number" />

            <input type="password" name="password" placeholder= 'Password'/>
            <button>SignIn</button>
        </div>
    </form>
  )
}

export default LoginForm
