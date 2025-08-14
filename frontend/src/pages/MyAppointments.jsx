import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
const MyAppointments = () => {
  const {doctors}= useContext(AppContext)
  return (
    <div>
      <p className="pb-13 mt-12 font-medium text-zinc-700 border-b">MY APPOINTMENTS</p>
      <div>
         {doctors.slice(0,2).map((item,index)=>(
             <div className=" grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"key={index}>

                <div>
                  <img className='w-32' src={item.image}/>
                </div>
                <div className='flex-1 text-sm text-zinc-600'>
                  <p className="text-neutral-800 font-semibold">{item.name}</p>
                  <p>{item.speciality}</p>
                  <p className='text-zinc-700 font-medium mt-1'>Location:</p>
                  <p className='text-sm'>{item.address}</p>
                  <p className=" mt-1"><span className='text-sm text-neutral-700 font-medium' >Date & Time:</span>25,July,2025 | 8:30 PM</p>
                </div>

                <div> </div>

                <div className='flex flex-col gap-2 justify-end'>
                  <button className='px-4 py-2 bg-primary hover:bg-blue-800 text-white rounded-lg text-sm font-medium'>Pay Online</button>
                  <button className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium'>Cancel Appointment</button>

                </div>
             </div>
         ))}
      </div>
    </div>
  )
}

export default MyAppointments


