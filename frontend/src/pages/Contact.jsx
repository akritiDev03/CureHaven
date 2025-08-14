import React from 'react'
import {assets} from '../assets/assets'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-800 font-semibold'>
        <p>CONTACT US</p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_us} />

        <div className='flex flex-col justify-center items-start gap-6'>
         <p className='font-semibold text-lg text-gray-600'>OUR ADDRESS</p>
         <p>Vaishnodevi Circle, SG Road, Delhi</p>
         <p>Tel : 011-4567 8901 <br/></p>
         <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
         <p>Learn more about our teams and job openings.</p>
         <button className='border border-primary px-8 py-4 text-sm hover:bg-primary hover:text-white tranistion-all duration-500 '>EXPLORE JOBS</button>
        </div>


      </div>
    </div>
  )
}

export default Contact
