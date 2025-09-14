import React, { useContext,useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {
    const {doctors} =useContext(AppContext)
    const navigate =useNavigate()
    const[relDoc,setRelDocs] =useState([])

   useEffect(()=>{
      if(doctors.length >0 && speciality){
        const doctorsData = doctors.filter((doc)=>doc.speciality === speciality && doc._id !=docId)
        setRelDocs(doctorsData)
      }
   },[doctors,speciality,docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16  text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-semibold '>TOP DOCTORS</h1>
      <p className='ms:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
         {relDoc.slice(0,5).map((item,index)=>(
            <div key={item._id} onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
            className='border border-blue-700 rounded-xl overflow-hidden cursor-pointer 
                       hover:shadow-lg hover:scale-105 hover:shadow-gray-500
                       transition-all duration-500'>
                 <img className=' w-full h-48 object-cover transition-transform duration-500 hover:scale-110' src={item.image} alt=""/>
                 <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center">
                     <p
                        className={`w-2 h-2 ${item.available ? 'bg-green-600' : 'bg-red-600'
                           } rounded-full`}
                     ></p>
                     <p
                        className={item.available ? 'text-green-600' : 'text-red-600'}
                     >
                        {item.available ? 'Available' : 'Not Available'}
                     </p>
                  </div>
                     <p className='text-gray-700 text-lg font-medium '>
                        {item.name}
                     </p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                 </div>
            </div> 
         ))}
      </div>
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}}className='bg-gray-200 border border-primary text-gray-600 px-12 py-3 rounded-lg mt-10  hover:bg-primary hover:text-white tranistion-all duration-500 '>More</button>
    </div>
  )
}

export default RelatedDoctors
