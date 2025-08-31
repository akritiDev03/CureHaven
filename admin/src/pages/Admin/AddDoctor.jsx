import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {


    const [docImg,setDocImg] =useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [experience,setExperience] = useState('1 Year')
    const [fees,setFees] = useState('')
    const [about,setAbout] = useState('')
    const [speciality,setSpeciality] = useState('General Physician')
    const [degree,setDegree] = useState('')
    const [address,setAddress] = useState('')


    const {backendUrl, aToken} = useContext(AdminContext)

    const onSubmitHandler = async(event)=>{
       event.preventDefault()

       try{
          if(!docImg){
            return toast.error('Image Not Selected')
          }
          const formData = new FormData()
          formData.append('image',docImg)
          formData.append('name',name)
          formData.append('email',email)
          formData.append('password',password)
          formData.append('experience',experience)
          formData.append('fees',Number(fees))
          formData.append('about',about)
          formData.append('speciality',speciality)
          formData.append('degree',degree)
          formData.append('address',address)

          formData.forEach((value,key)=>{
            console.log(`${key}: ${value}`)
          })

          const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData,{headers:{ aToken }})
          
          if(data.success){
            toast.success(data.message)
            setDocImg(false)
            setName('')
            setPassword('')
            setEmail('')
            setAddress('')
            setDegree('')
            setAbout('')
            setFees('')
          }else {
            toast.error(data.message)
          }


       } catch(error){
           toast.error(error.message)
           console.log(error)

       }

    }


    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full'>
            <p className='mb-3 text-lg font-medium'>Add Doctor</p>

            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <img className ='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} />
                    </label>
                    <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p>Upload doctor picture</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Doctor Name</p>
                            <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded px-3 py-2' type='text' placeholder='Name' required />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Doctor Email</p>
                            <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type='email' placeholder='Email' required />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Doctor Password</p>
                            <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type='password' placeholder='password' required />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Experience</p>
                            <select onChange={(e)=> setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' name="" id="">
                                <option value="1 Year">1 Year</option>
                                <option value="2 Years">2 Years</option>
                                <option value="3 Years">3 Years</option>
                                <option value="4 Years">4 Years</option>
                                <option value="5 Years">5 Years</option>
                                <option value="6 Years">6 Years</option>
                                <option value="7 Years">7 Years</option>
                                <option value="8 Years">8 Years</option>
                                <option value="9 Years">9 Years</option>
                                <option value="10 Years">10 Years</option>
                                <option value="11 Years">11 Years</option>
                                <option value="12 Years">12 Years</option>
                                <option value="13 Years">13 Years</option>
                                <option value="14 Years">14 Years</option>
                                <option value="15 Years">15 Years</option>
                                <option value="16 Years">16 Years</option>
                                <option value="17 Years">17 Years</option>
                                <option value="18 Years">18 Years</option>
                                <option value="19 Years">19 Years</option>
                                <option value="20 Years">20 Years</option>
                                <option value="21 Years">21 Years</option>
                                <option value="22 Years">22 Years</option>
                                <option value="23 Years">23 Years</option>
                                <option value="24 Years">24 Years</option>
                                <option value="25 Years">25 Years</option>
                            </select>
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Fees</p>
                            <input onChange={(e)=> setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type='number' placeholder='fees' required />
                        </div>
                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Speciality</p>
                            <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2' name="" id="">
                                <option value="General Physician">General Physician</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatrician">Pediatrician</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Education</p>
                            <input onChange={(e)=> setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder="Education" required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Address</p>
                            <input onChange={(e)=> setAddress(e.target.value)} value={address} className='border rounded px-3 py-2' type="text" placeholder="Address" required />
                        </div>
                    </div>
                </div>

                <div >
                    <p className='mt-4 mb-2'>About Doctor</p>
                    <textarea  onChange={(e)=> setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' placeholder="Write about doctor..." rows={5} required />
                </div>

                <button type='submit'className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Doctor</button>
            </div>
        </form>
    )
}

export default AddDoctor

