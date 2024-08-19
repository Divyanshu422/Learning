import React from 'react'
import Logo from '../assets/NetFlixLogo.png'
const Header = () => {
  return (
    <div className='absolute  flex items-center justify-around  w-screen pt-4 bg-gradient-to-b from-[#1E201E]' >
      <img src={Logo} alt ='Logo' className='w-48 '/>
      <div className=' flex gap-x-16 '>
            <div className=' border-[1px] py-[0.5rem] px-4 border-white rounded-sm text-white'>
                <select id="language" name="language" className='bg-inherit'>
                    <option lang="en" label="English" value="en-IN" selected="">English</option>
                    <option lang='hi' value="hindi">हिन्दी</option>
                </select>
            </div>
            <button className='bg-red-600 py-1 px-4 text-white font-medium rounded-sm'>Sign In</button>
        </div>
    </div>
  )
}

export default Header
