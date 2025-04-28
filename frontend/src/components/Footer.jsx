import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3
    mt-20'>
        <img src={assets.logo} alt="" width={150}/>
        <p className='flex-1 pl-4 text-sm border-l text-gray-500 max-sm:hidden'>
            Copyright @salvia All right reserved </p>
        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt='' width={35}/>
            <img src={assets.facebook_icon} alt='' width={35}/>
            <img src={assets.facebook_icon} alt='' width={35}/>

        </div>
    </div>
  )
}

export default Footer