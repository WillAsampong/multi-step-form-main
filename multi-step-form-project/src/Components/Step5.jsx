import React from 'react'

const Step5 = () => {
  return (
    <div className='mx-4 bg-white px-6 py-12 min-h-[400px] rounded-lg shadow-2xl flex flex-col items-center gap-y-6'>
        <div className='flex justify-center'>
            <img src="./src/assets/images/icon-thank-you.svg" alt="" />
        </div>
        <h2 className='text-2xl text-blue-950 text-center font-semibold'>Thank you!</h2>
        <p className='text-gray-400 text-center text-lg'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@lorelgaming.com.</p>
    </div>
  )
}

export default Step5
