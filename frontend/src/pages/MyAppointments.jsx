import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'


const MyAppointments = () => {

  const {backendUrl,token}= useContext(AppContext)
  const [appointments, setAppointments] =useState([])
  
  const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] 

  const slotDateFormat = (slotDate) =>{
      const dateArray = slotDate.split('_')
      return dateArray[0] + " " + months[Number(dateArray[1])]+" "+ dateArray[2]
  }

  const navigate = useNavigate()
  const getUserAppointments = async()=>{
         try {
          const {data} = await axios.get(backendUrl + '/api/user/appointments' , {headers:{token}})
          if(data.success){
             setAppointments(data.appointments.reverse())
             console.log(data.appointments)
          }
         } catch (error) {
           console.log(error);
           toast.error(error.message)
         }
  }


  const cancelAppointment = async(appointmentId)=>{
    try {
      const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment',{appointmentId},{headers:{token}})
      if(data.success){
        toast.success(data.message)
        getUserAppointments()

      }else{
        toast.error(data.message)

      }


    } catch (error) {
       console.log(error);
       toast.error(error.message) 
    }
  }
   useEffect(()=>{
      getUserAppointments()
   },[token])
  return (
    <div>
      <p className="pb-13 mt-12 font-medium text-zinc-700 border-b">MY APPOINTMENTS</p>
      <div>
         {appointments.map((item,index)=>(
             <div className=" grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"key={index}>

                <div>
                  <img className='w-32' src={item.docData.image}/>
                </div>
                <div className='flex-1 text-sm text-zinc-600'>
                  <p className="text-neutral-800 font-semibold">{item.docData.name}</p>
                  <p>{item.docData.speciality}</p>
                  <p className='text-zinc-700 font-medium mt-1'>Location:</p>
                  <p className='text-sm'>{item.docData.address}</p>
                  <p className=" mt-1"><span className='text-sm text-neutral-700 font-medium' >Date & Time:</span>{slotDateFormat(item.slotDate)} | {item.slotTime}</p>
                </div>

                <div> </div>

                <div className="flex flex-col gap-2 justify-end">
               {/* Show Pay & Cancel only if NOT completed */}
               {!item.cancelled && !item.isCompleted && (
                 <>
                   <button className="px-4 py-2 bg-primary hover:bg-blue-800 text-white rounded-lg text-sm font-medium">
                     Pay Online
                   </button>

                   <button
                     onClick={() => cancelAppointment(item._id)}
                     className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium"
                   >
                     Cancel Appointment
                   </button>
                 </>
               )}

               {item.cancelled ? (
                 <button className="sm:min-w-48 py-2 border bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium">
                   Cancelled
                 </button>
               ) : item.isCompleted ? (
                 <button className="sm:min-w-48 py-2 border bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium">
                   Completed
                 </button>
               ) : null}
             </div>

             </div>
         ))}
      </div>
    </div>
  )
}

export default MyAppointments


