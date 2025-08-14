import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-black text-gray-200 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
      <div className='px-20 pt-10 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*Left Section */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt=" "/>
            <p className='w-full md:w-2/3 text-gray-300 leading-6'>At CureHaven Hospital, we are convinced that 'quality' and 'lowest cost' are not mutually exclusive when it comes to healthcare delivery.
            Our mission is to deliver high quality, affordable healthcare services to the broader population in India.</p>
        </div>

        {/* Center Section*/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
             <ul className='flex flex-col gap-2 text-gray-300'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
             </ul>
        </div>

        {/* Right Section */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-300'>
                <li>88666 00555</li>
                <li>curehavenhospital@gmail.com</li>
            </ul>
        </div>
      </div>

      {/*----Copyright-----*/}
      <div>
        <hr className='border-gray-700'/>
        <p className='py-5 text-sm text-center text-gray-400'>Copyright 2025@ CureHaven - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer


