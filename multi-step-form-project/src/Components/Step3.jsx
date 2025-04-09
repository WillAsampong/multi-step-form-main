import React from 'react'

const Step3 = () => {

    const addOns = [
        {
            type: 'Online service',
            desc: 'Access to multiplayer games',
            monthlyPrice: '+$1/mo',
            yearlyPrice: '+$10/yr',
        },
        {
            type: 'Larger storage',
            desc: 'Extra 1TB of cloud save',
            monthlyPrice: '+$2/mo',
            yearlyPrice: '+$20/yr',
        },
        {
            type: 'Customizable Profile',
            desc: 'Custom theme on your profile',
            monthlyPrice: '+$2/mo',
            yearlyPrice: '+$20/yr',
        }
    ]


  return (
    <div className='bg-white p-6 mx-4 rounded-lg shadow-2xl'>
        <h1 className='text-blue-900 font-bold text-2xl mb-2'>Pick add-ons</h1>
        <p className='mb-4 text-gray-400'>Add-ons help enhance your gaming experience.</p>

        {
            addOns.map((item, index) => (
                <div className='flex justify-between mb-4 px-4 py-2 border border-gray-300 rounded-lg' key={index}>
                    <input type="checkbox" name="" id="" className='w-4 rounded-md bg-blue-600 border-gray-300 outline-gray-300'/>
                    <div>
                        <h3 className='text-lg font-medium text-blue-950'>{item.type}</h3>
                        <p className='text-sm text-gray-400'>{item.desc}</p>
                    </div>
                    <div className="price flex justify-end items-center">
                        <p className='text-blue-600 text-sm'>{item.monthlyPrice}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Step3
