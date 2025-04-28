import React, {useContext} from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/appContext'

const Navbar = () => {

  const {user}=useContext(AppContext);
  const Navigate=useNavigate();
  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'><img src={assets.logo} alt="" className='w-28 sm:w-35 lg:w-40'/></Link>
      <div></div>
      {user? 
      <div className='flex items-center gap-2 sm:gap-3'>
        <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 py-3 rounded-full 
        hover:scale-105 transition-all duration-700'>
          <img src={assets.credit_star}alt=" " />
          <p onClick={()=>Navigate('/buy')} className='text-xs sm:text:sm font-medium text-grey-600 '> Credit left:50</p>
        </button>
        <p className='text-grey-600 max-sm:hidden pl-4'> Hi Gita</p>
        <div className='relative group '>
          <img src={assets.profile_icon} className='w-10 drop-shadow' alt='' />
          <div className='absolute hidden group-hover:block top-2 right-0 z-10 text-black 
          rounded pt-12' ><ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
            <li className=' px-1 py-1 cursur-pointer pr-8'>Logout</li></ul></div>
        </div>
      </div>:
       <div className='flex items-center gap-2 sm:gap-5'>
        <p onClick={()=>Navigate('/buy')} className='cursor-pointer'>Pricing</p>
       <button className='bg-zinc-800 text-white px-15 py-2 sm:px-10 text-sm rounded-full'>Login</button></div>}
        
        
      </div>
  )
}

export default Navbar