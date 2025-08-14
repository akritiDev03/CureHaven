import React, { useContext,useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

  const {docId} =useParams()
  const {doctors,currencySymbol} =useContext(AppContext)
  const daysOfWeek =['SUN','MON','TUE','WED','THU','FRI','SAT']
  const [docInfo,setDocInfo] =useState(null)
  const [docSlots,setDocSlots]=useState([])
  const [slotIndex,setSlotIndex] =useState(0)
  const [slotTime, setSlotTime] = useState('');


  const getAvailableSlots = async () => {
  setDocSlots([]);
  let today = new Date();

  for (let i = 0; i < 7; i++) {
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    let endTime = new Date(currentDate);
    endTime.setDate(today.getDate()+i);
    endTime.setHours(21, 0, 0, 0); // End at 9:00 PM

    if (today.getDate() === currentDate.getDate()) {
      const currentHour = currentDate.getHours();
      currentDate.setHours(currentHour > 10 ? currentHour + 1 : 10);
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
    } else {
      currentDate.setHours(10, 0, 0, 0); // Start at 10:00 AM
    }

    let timeSlots = [];
    while (currentDate < endTime) {
      let formattedTime = currentDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime,
      });

      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    setDocSlots(prev =>([...prev, timeSlots]));
  }
};


useEffect(() => {
  if (doctors?.length > 0 && docId) {
    const info = doctors.find((doc) => doc._id === docId);
    setDocInfo(info || null);
  }
}, [doctors, docId]);

// Generate time slots when doctor info is loaded
useEffect(() => {
  if (docInfo) getAvailableSlots();
}, [docInfo]);

// Debug log (optional)
useEffect(() => {
  console.log(docSlots);
}, [docSlots]);

if (!docInfo) {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <p className="text-center text-gray-500 mt-4">Loading doctor details...</p>
    </div>
  );
}
  return (
    <div  className="max-w-screen-lg mx-auto p-4">
       {/*Doctor Details */ }
       <div className='flex flex-col lg:flex-row gap-8'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} />  
        </div>
        
        <div className='flex-1 border border-gray-400 rounded-lg p-6 bg-white '>
           {/*NAme, Degree ,Experience */}
           <p className=' text-2xl font-medium text-gray-800'>{docInfo.name}</p>
           <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p >{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
           </div>
 
            {/*--------Doctor About-------*/}
             <div className='mt-4'>
              <p className='text-sm font-semibold text-gray-800'>About</p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
             </div>
              <p className='text-gray-500 font-medium mt-4 '>Appointment Fee : <span className='text-gray-600'>{currencySymbol}{docInfo.fees} </span></p>
        </div>
       </div>

{/*BOOKING SLOTS */}
        <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
          <p>BOOKING SLOTS</p>
          <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 '>
            {
              docSlots.length > 0 && docSlots.map((item,index)=>(
                <div className={`flex flex-col items-center justify-center min-w-[64px] max-w-[64px] h-20 shrink-0 rounded-full cursor-pointer transition-all duration-300 ${slotIndex === index ? 'bg-primary text-white' :'border border-gray-200 text-gray-700'}`}
                key={index} 
                onClick={() => setSlotIndex(index)}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))
            }
          </div>

            <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'> 
              {docSlots.length && docSlots[slotIndex]?.map((item,index)=>(
                <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white': 'text-gray-500 border border-gray-400'}` } key={index}>
                  {item.time.toLowerCase()}
                </p>
              ))}
            </div> 
             <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Confirm Appointment </button> 
        </div>
           {/* Listing Related Doctors */}
            <RelatedDoctors docId={docId} speciality={docInfo.speciality}  />
    </div>
  )
}

export default Appointment


