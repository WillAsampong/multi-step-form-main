import { useState } from 'react'


const Step2 = () => {
  const [category, setCategory] = useState('monthly');
  const [selected, setSelected] = useState(null);

  const cardItems = [
    {
      id:1,
      image: './src/assets/images/icon-arcade.svg',
      title: 'Arcade',
      monthlyPrice: '$9/mo',
      yearlyPrice: '$90/yr',
      category: 'both'
    },
    {
      id: 2,
      image: './src/assets/images/icon-advanced.svg',
      title: 'Advanced',
      monthlyPrice: '$12/mo',
      yearlyPrice: '$120/yr',
      category: 'both'
    },
    {
      id: 3,
      image: "./src/assets/images/icon-pro.svg",
      title: 'Pro',
      monthlyPrice: '$15/mo',
      yearlyPrice: '$150/yr',
      category: 'both'
    }
  ]

  const filterCategory = cardItems.map((item) => ({
    ...item,
    displayPrice: category === 'monthly' ? item.monthlyPrice : item.yearlyPrice,
    billingPeriod: category === 'monthly' ? 'mo' : 'yr' 
  })) 

  return (
    <div className='mx-5 bg-white rounded-lg shadow-2xl p-6'>
      <h1 className='text-blue-950 font-bold text-2xl mb-2'>Select your plan</h1>
      <p className='mb-4 text-gray-400'>You have the option of monthly or yearly billing.</p>

      {
        filterCategory.map((card) => (
          <div key={card.id} className={` flex gap-x-3 border border-gray-300 rounded-lg p-6 mb-6 cursor-pointer ${ selected === card.id ? 'bg-blue-50  border-blue-900 outline-1 outline-blue-800' : 'bg-white' }`} onClick={() => setSelected(card.id)}>
            <img src={card.image} alt="" />
            <div>
                <h3 className='text-lg text-blue-950 font-semibold'>{card.title}</h3>
                <p className='text-gray-400 text-sm'>{card.displayPrice}</p>
                {category === 'yearly' && <p className='text-blue-900 text-sm mt-1'>2 months free</p>}
            </div>
          </div>
        ))
      }

      <div className="plan-options px-6 py-4 bg-gray-100 rounded-lg mt-4">
        <div className="flex justify-center gap-x-4">
          <p className={`${category === 'monthly' ? "text-blue-950" : "text-gray-300"} font-semibold`}>Monthly</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={category === 'yearly'}
              onChange={() => setCategory(category === 'monthly' ? 'yearly' : 'monthly')}
            />
            <div className="w-11 h-6 bg-blue-900 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-900"></div>
        </label>
          <p className={`${ category === 'yearly' ? "text-blue-950" : "text-gray-300"} font-semibold`}>Yearly</p>
        </div>
      </div>
    </div>
  )
}

export default Step2
