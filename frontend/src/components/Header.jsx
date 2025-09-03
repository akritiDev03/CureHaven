import React from 'react'
import { assets } from '../assets/assets'
import Slider from './Slider'

const Header = () => {
  return (
    <div className='w-full flex flex-col md:flex-row bg-gradient-to-br from-primary to-[#0a6b99] rounded-lg px-4 md:px-10 lg:px-20 min-h-[600px] overflow-hidden'>
      
      {/* Left Side */}
      <div className='md:w-[45%] flex flex-col items-start justify-center gap-4 py-10'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt=""/>
          <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300'>
          Book Appointment
        </a>
      </div>

      {/* Right Side with enlarged slider */}
      <div className='md:w-[55%]  flex justify-center items-center py-4'>
        <div className='w-full max-w-[600px]'>
          <Slider />
        </div>
      </div>

    </div>
  )
}

export default Header




