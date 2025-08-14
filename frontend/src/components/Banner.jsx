import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col md:flex-row  bg-gradient-to-br from-primary to-[#0a6b99] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      {/*-------Left Side--------*/}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 flex flex-col justify-center'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
            <p>Book  Appointment</p>
            <p className='mt-4 text-lg sm:text-xl font-medium italic tracking-wide text-white drop-shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90'>
                "Your Health, Our Mission - Quality Care for Everyone."</p>
        </div>
            <button onClick={()=>{navigate('/login');scrollTo(0,0)}} 
            className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all w-fit'>
            Create Account</button>
      </div>

      {/*-------Right Side--------*/}
      <div className='flex-1 flex items-center justify-center'>
       <img className='w-full max-w-md min-w-[120px]' src={assets.banner} alt="" />

      </div>
    </div>
  )
}

export default Banner
