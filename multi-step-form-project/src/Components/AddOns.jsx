import React, { useContext } from 'react'
import Subscriptioncontext from '../context/SubscriptionContext'

const Step3 = () => {
    const { category, addOns, selectedAddOns, setSelectedAddOns, formatPrice } = useContext(Subscriptioncontext);

    const handleAddOnToggle = (addOnId) => {
        setSelectedAddOns(prev => {
            if(prev.includes(addOnId)) {
                return prev.filter(id => id !== addOnId);
            } else {
                return [...prev, addOnId]
            }
        });
    };


  return (
    <div className='bg-white p-6 mx-4 rounded-lg shadow-2xl md:shadow-none'>
        <h1 className='text-blue-900 font-bold text-2xl mb-2'>Pick add-ons</h1>
        <p className='mb-4 text-gray-400'>Add-ons help enhance your gaming experience.</p>

        {
            addOns.map((item) => (
                <div className={`flex justify-between mb-4 px-4 py-2 border border-gray-300 rounded-lg ${selectedAddOns.includes(item.id) ? 'bg-blue-50 outline-1 outline-blue-600' : '' }`} key={item.id} onClick={() => handleAddOnToggle(item.id)}>
                    <div className='flex gap-x-4'>
                        <input type="checkbox" name="" id="" className='w-4 rounded-md bg-blue-600 border-gray-300 outline-gray-300' checked={selectedAddOns.includes(item.id)} onChange={() => {}}/>
                        <div>
                            <h3 className='text-lg font-medium text-blue-950'>{item.type}</h3>
                            <p className='text-sm text-gray-400'>{item.desc}</p>
                        </div>
                    </div>
                    <div className="price flex justify-end items-center">
                        <p className='text-blue-600 text-sm'>{formatPrice(category === 'monthly' ? item.monthlyPrice : item.yearlyPrice)}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Step3
