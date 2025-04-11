import React, { useContext } from 'react'
import SubscriptionContext from '../context/SubscriptionContext'

const Step4 = () => {

  const { category, getSelectedPlan, getSelectedAddOns, calculateTotal, formatPrice } = useContext(SubscriptionContext);

  const selectedPlan = getSelectedPlan();
  const selectedAddOns = getSelectedAddOns();
  const totalPrice = calculateTotal();

  return (
    <div className='p-6 mx-4 bg-white shadow-2xl rounded-lg'>
      <h1 className='text-blue-900 text-2xl font-bold mb-2'>Finishing up</h1>
      <p className='text-gray-400 mb-4'>Double check everything looks OK before confirming.</p>

      <div className='selection-summary bg-blue-50 rounded-lg p-4'>
        <div className='border-b border-gray-300 flex justify-between items-center py-2 mb-2'>
          <div className="">
            <h4 className='font-semibold text-blue-900'>{selectedPlan.title} ({category === 'monthly' ? 'Monthly' : 'Yearly'})</h4>
            <button className='underline text-gray-400 hover:text-blue-600'>Change</button>
          </div>
          <p className='font-semibold text-blue-900'>{formatPrice(category === 'monthly' ? selectedPlan.monthlyPrice : selectedPlan.yearlyPriice)}</p>
        </div>

        {selectedAddOns.length > 0 && (
          <div className="addons-selection py-2">
            {selectedAddOns.map(addon => (
              <div key={addon.id} className="flex justify-between items-center mb-3">
                <p className='text-gray-400'>{addon.type}</p>
                <p className='text-blue-900 text-sm text-medium'>
                  {formatPrice(category === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>


      <div className="total-section flex justify-between items-center mt-6 px-4">
        <p className='text-gray-400'>Total (per {category === 'monthly' ? 'month' : 'year'})</p>
        <p className='text-lg font-bold text-blue-600'>{formatPrice(totalPrice)}</p>
      </div>
    </div>
  )
}

export default Step4
