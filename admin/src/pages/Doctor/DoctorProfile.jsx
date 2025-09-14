import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DoctorProfile = () => {
     const {dToken,profileData,setProfileData,getProfileData,backendUrl} =  useContext(DoctorContext)
     const {currency}  = useContext(AppContext)
     const [isEdit,setIsEdit] = useState(false)

     const updateProfile = async()=>{
      try {
        const updateData ={
          address:profileData.address,
          fees:profileData.fees,
          available:profileData.available
        }
        const {data}= await axios.post(backendUrl + '/api/doctor/update-profile', updateData, {headers:{dToken}})
        if(data.success){
          toast.success(data.message)
          setIsEdit(false)
          getProfileData()
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
        console.log(error)
      }
     }


     useEffect(()=>{
         if(dToken){
          getProfileData()
         }
     },[dToken])



  return profileData && (

      <div className="min-h-screen bg-gray-100 flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row gap-8">
          
          {/* Doctor Image */}
          <div className="flex-shrink-0">
            <img
              className="w-48 h-48 object-cover rounded-2xl shadow-md border"
              src={profileData.image}
              alt={profileData.name}
            />
          </div>

          {/* Doctor Details */}
          <div className="flex-1 space-y-5">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{profileData.name}</h1>
              <div className="flex flex-wrap items-center gap-3 mt-1 text-gray-600">
                <p className="text-lg">
                  {profileData.degree} – {profileData.speciality}
                </p>
                <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {profileData.experience}
                </span>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-gray-700">About:</h2>
              <p className="text-gray-600">{profileData.about || "No description provided."}</p>
            </div>

            <div className="flex gap-6 text-gray-700">
              <p className="font-medium">
                Appointment Fee:{" "}
                <span className="text-primary font-bold">
                  {currency} {isEdit ? <input type="number" onChange={(e)=>setProfileData(prev =>({...prev, fees:e.target.value}) )} value={profileData.fees}/>:profileData.fees}
                </span>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-700">Address:</h2>
              <p className="text-gray-600">{isEdit ? <input type='text' onChange={(e)=>setProfileData(prev=>({...prev,address:e.target.value}))}  value={profileData.address}/>: profileData.address}</p>
            </div>

            {/* Availability */}
            <label className="flex items-center gap-2 text-gray-700 mt-2 cursor-pointer">
              <input 
                onChange= {()=> isEdit && setProfileData(prev => ({...prev, available: !prev.available}))}
                type="checkbox"
                checked={profileData.available}
                className="w-5 h-5 accent-primary"
              />
              Available for Appointments
            </label>
             {
              isEdit
               ? <button onClick={updateProfile} className="mt-4 bg-green-600 hover:bg-green-800 text-white px-6 py-2 rounded-xl shadow-md transition">Save Profile</button>
               : <button onClick={()=>setIsEdit(true)} className="mt-4 bg-primary hover:bg-blue-900 text-white px-6 py-2 rounded-xl shadow-md transition">Edit Profile</button>    
             }
          </div>
        </div>
      </div>
    )

};

export default DoctorProfile;
