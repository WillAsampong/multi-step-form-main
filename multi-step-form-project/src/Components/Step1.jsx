import React from 'react'

const Step1 = () => {
  return (
    <div className='p-6 bg-white mx-4 rounded-lg shadow-2xl md:shadow-none'>
      <h1 className='text-2xl text-blue-900 font-bold mb-3'>Personal info</h1>
      <p className='text-gray-500 mb-6'>Please provide your name, email address, and phone number.</p>

      <form action="">
        <div className='flex flex-col mb-4'>
          <label htmlFor="" className='text-blue-800 font-medium'>Name</label>
          <input type="text" placeholder='e.g. Stephen King' className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500'/>
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor="" className='text-blue-800 font-medium'>Email Address</label>
          <input type="text" placeholder='e.g. stephenking@lorem.com' className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500'/>
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor="" className='text-blue-800 font-medium'>Phone Number</label>
          <input type="text" placeholder='e.g. +1 234 567 890' className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500'/>
        </div>
      </form>
    </div>
  )
}

export default Step1
