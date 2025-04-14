import React from 'react'

const NavigationButtons = ({ currentStep, onPrev, onNext, isLastStep }) => {
  return (
    <div className="p-4 bg-white flex items-center justify-between absolute w-full bottom-0">
      {currentStep > 1 && (
        <button 
          onClick={onPrev}
          className="px-4 py-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          Go Back
        </button>
      )}
      <button 
        onClick={onNext}
        className={`ml-auto text-white px-4 py-2 rounded transition-colors ${
          isLastStep ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-900 hover:bg-blue-800'
        } cursor-pointer`}
      >
        {isLastStep ? 'Confirm' : 'Next Step'}
      </button>
  </div>
  )
}

export default NavigationButtons
