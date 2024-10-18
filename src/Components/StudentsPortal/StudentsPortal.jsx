import React from 'react'
import logo from '../../assets/school_logo.jpg'
import { Link } from 'react-router-dom'

const StudentsPortal = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6  min-h-screen fade-in-bg">
      {/* Image Section */}
      <div className="w-full mt-24 md:w-1/2">
        <img src={logo} alt="Contact Us" className="w-full h-full object-cover rounded-lg shadow-lg fade-in-bg" />
      </div>

      {/* Form Section */}
      <Link to='/'><button className='absolute top-5 bg-blue-500 p-3 rounded-3xl hover:bg-blue-700 right-5'>Return Home</button></Link>
      <div className="w-full mt-28 md:w-1/2 p-6">
      <h1 className="text-3xl font-bold text-blue-800 text-center text-green-700 mb-3">Dear Student!</h1>
        <h1 className="text-2xl font-bold text-blue-800 text-center mb-6 md:text-3xl">Student Portal Coming Soon</h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
        We are excited to announce that the Upperhill College Student Portal is currently under development and will be available soon. The portal will provide students with access to essential features such as personal details, fees payment and balance tracking, and class timetables. We are committed to delivering a seamless and efficient experience, and we appreciate your patience as we work towards finalizing this important platform. Stay tuned for updates!
        </p>

      </div>
    </div>
  )
}

export default StudentsPortal