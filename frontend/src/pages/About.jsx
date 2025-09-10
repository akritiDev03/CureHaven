import React from 'react'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div>
    <div className='text-center text-2xl md:text-3xl font-semibold pt-10 text-gray-600'>
      <p>ABOUT <span className='text-primary font-bold'>CUREHAVEN</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-lg shadow-sm' src={assets.about_us} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/3 text-sm text-gray-600'>
        <p >CUREHAVEN Hospital is a multi/super speciality hospital located at the prime location of Vaishnodevi Circle, SG Road, Delhi; with state-of-the-art facilities & treatments at an affordable cost, encompassing wide spectrum of accurate diagnostics and elegant therapeutics created on the philosophical edifice of patient and ethical centricity ensuring humanistic dispensation.</p>

        <p> Our foundation rests on the philosophical edifice of patient and ethical centricity, ensuring every patient receives compassionate and humanistic care.</p>

        <p className='text-gray-800 font-medium'>"At CureHaven, we don't just treat diseases — we care for people. Every heartbeat here matters."</p>

        <p className='text-gray-800 font-semibold  text-right -mt-2' >- CEO Harshil Patel</p>

        </div>
      </div>



       <div className='grid md:grid-cols-2 gap-8 mb-16'>
        <div className='bg-gray-200 p-6 rounded-xl shadow'>
          <h2 className='text-xl font-bold text-primary mb-2'>Our Mission</h2>
          <p>
            To deliver world-class medical treatment while ensuring patient dignity, affordability, and ethical integrity. We believe healing is a holistic experience—one that involves body, mind, and trust.
          </p>
        </div>

        <div className='bg-gray-200 p-6 rounded-xl shadow'>
          <h2 className='text-xl font-bold text-primary mb-2'>Our Vision</h2>
          <p>
            We envision a healthier world where quality medical care is accessible to everyone, and where innovation and empathy go hand in hand to create a better tomorrow.
          </p>
        </div>
      </div>

        <div className='mb-16'>
        <h2 className='text-xl font-bold text-primary mb-4'>Our Core Values</h2>
        <ul className='list-disc list-inside space-y-2'>
          <li><strong>Compassionate Care:</strong> We treat every patient with empathy and respect.</li>
          <li><strong>Clinical Excellence:</strong> We aim for the highest standards in medical outcomes.</li>
          <li><strong>Integrity & Ethics:</strong> Our actions are guided by transparency and trust.</li>
          <li><strong>Affordable Accessibility:</strong> Quality care should be a right, not a privilege.</li>
          <li><strong>Innovation:</strong> We embrace medical advancement for better patient experiences.</li>
        </ul>
      </div>


      <div onClick={()=>{scrollTo(0,0)}} className='bg-gray-200 py-10 rounded-xl shadow-md'>
        <h2 className='text-2xl font-semibold text-center text-gray-800 mb-8'>Our Impact in Numbers</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
          <div>
            <p className='text-3xl font-bold text-primary'>50K+</p>
            <p className='text-sm text-gray-600'>Happy Patients</p>
          </div>
          <div>
            <p className='text-3xl font-bold text-primary'>20+</p>
            <p className='text-sm text-gray-600'>Specialties</p>
          </div>
          <div>
            <p className='text-3xl font-bold text-primary'>100+</p>
            <p className='text-sm text-gray-600'>Expert Doctors</p>
          </div>
          <div>
            <p className='text-3xl font-bold text-primary'>24/7</p>
            <p className='text-sm text-gray-600'>Emergency Support</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About
