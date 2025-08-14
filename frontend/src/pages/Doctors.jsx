import React, { useContext ,useEffect,useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const {speciality} = useParams();
  const navigate = useNavigate()
  const[filterDoc,setFilterDoc]=useState([])
  const {doctors}=useContext(AppContext)

  const applyFilter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality === speciality))
    }
    else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
   applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist. </p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>

          <p onClick={()=>{speciality=== 'General Physician' ? navigate('/doctors') :navigate('/doctors/General Physician')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General Physician" ? "bg-primary text-white": ""}`}>General Physician</p>

          <p onClick={()=>{speciality=== 'Gynecologist' ? navigate('/doctors') :navigate('/doctors/Gynecologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-primary text-white": ""}`}>Gynecologist</p>

          <p onClick={()=>{speciality=== 'Dermatologist' ? navigate('/doctors') :navigate('/doctors/Dermatologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ?"bg-primary text-white": ""}`}>Dermatologist</p>

          <p onClick={()=>{speciality=== 'Pediatrician' ? navigate('/doctors') :navigate('/doctors/Pediatrician')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatrician" ? "bg-primary text-white": ""}`}>Pediatrician</p>

          <p onClick={()=>{speciality=== 'Neurologist' ? navigate('/doctors') :navigate('/doctors/Neurologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-primary text-white": ""} `}>Neurologist</p>

          <p onClick={()=>{speciality=== 'Gastroenterologist' ? navigate('/doctors') :navigate('/doctors/Gastroenterologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-primary text-white": ""}`}>Gastroenterologist</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)}className='border border-blue-700 rounded-xl overflow-hidden cursor-pointer 
                       hover:shadow-lg hover:scale-105 hover:shadow-gray-500
                       transition-all duration-500'>

                 <img className=' w-full h-48 object-cover transition-transform duration-500 hover:scale-110' src={item.image} alt=""/>

                 <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-600 '>
                        <p className='w-2 h-2 bg-green-600 rounded-full'></p><p>Available</p>
                     </div>
                     <p className='text-gray-700 text-lg font-medium '>
                        {item.name}
                     </p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                 </div>
            </div> 
         ))
        }    
        </div>
      </div>
    </div>
  )
}

export default Doctors




// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Doctors = () => {
//   const { speciality } = useParams();
//   const navigate = useNavigate();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const { doctors } = useContext(AppContext);

//   const specialities = [
//     'General Physician',
//     'Gynecologist',
//     'Dermatologist',
//     'Pediatrician',
//     'Neurologist',
//     'Gastroenterologist',
//   ];

//   useEffect(() => {
//     if (speciality) {
//       setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
//     } else {
//       setFilterDoc(doctors);
//     }
//   }, [doctors, speciality]);

//   return (
//     <div>
//       <p className='text-gray-600'>Browse through the doctors specialist.</p>

//       <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
//         {/* Sidebar Specialities */}
//         <div className='flex flex-col gap-4 text-sm text-gray-600'>
//           {specialities.map((spec) => (
//             <p
//               key={spec}
//               onClick={() =>
//                 speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)
//               }
//               className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//                 speciality === spec ? 'bg-indigo-100 text-black' : ''
//               }`}
//             >
//               {spec}
//             </p>
//           ))}
//         </div>

//         {/* Doctors Grid */}
//         <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6'>
//           {filterDoc.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/appointment/${item._id}`)}
//               className='border border-blue-700 rounded-xl overflow-hidden cursor-pointer 
//                 hover:shadow-lg hover:scale-105 hover:shadow-gray-500 transition-all duration-500'
//             >
//               <img
//                 className='w-full h-48 object-cover transition-transform duration-500 hover:scale-110'
//                 src={item.image}
//                 alt={item.name}
//               />
//               <div className='p-4'>
//                 <div className='flex items-center gap-2 text-sm text-center text-green-600'>
//                   <p className='w-2 h-2 bg-green-600 rounded-full'></p>
//                   <p>Available</p>
//                 </div>
//                 <p className='text-gray-700 text-lg font-medium'>{item.name}</p>
//                 <p className='text-gray-600 text-sm'>{item.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;
