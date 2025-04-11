import { useState } from 'react';
import './App.css'
import './index.css'
import Step1 from './Components/step1'
import Step2 from './Components/step2'
import Step3 from './Components/step3'
import Step5 from './Components/Step5';
import Step4 from './Components/step4';
import { SubscriptionProvider } from './context/SubscriptionContext'

function App() {

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      step: 1,
      title: 'step 1',
      description: 'Your info'
    },
    {
      id: 2,
      step: 2,
      title: 'step 2',
      description: 'Select Plan'
    },
    {
      id: 3,
      step: 3,
      title: 'step 3',
      description: 'Add-ons'
    },
    {
      id: 4,
      step: 4,
      title: 'step 4',
      description: 'Summary'
    },
  ]

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  
  // Render the current step
  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />
      default:
        return <Step1 />;
    }
  };

  return (
    <SubscriptionProvider>
      <main className="bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-none bg-contain bg-no-repeat bg-top h-screen bg-blue-50 relative">
        <div className=''>
          <div className="md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-no-repeat md:absolute md:top-1/2 md:-translate-y-1/2 left-1/2 md:-translate-x-1/2 md:bg-white md:flex md:h-[600px] md:p-4 md:w-2/3">
            <div className="flex md:flex-col justify-center gap-4 mb-8 pt-10 md:p-6 items-start">
                {steps.map((item) => (
                  <div className='flex gap-x-4'>
                    <div 
                      key={item.id} 
                      className={`w-8 h-8 rounded-full flex items-center justify-center border border-white
                        ${item.id === currentStep ? 'bg-blue-100 text-blue-900 font-medium' : 'bg-transparent text-white'}`}
                    >
                      {item.step}
                    </div>
                    <div className='hidden md:block'>
                      <p className='uppercase text-sm text-blue-100'>{item.title}</p>
                      <p className='uppercase text-white font-semibold'>{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>

            {renderStep()}

            <div className="my-4 p-4 bg-white flex items-center justify-between absolute w-full bottom-0 ">
              {currentStep > 1 && (
                <button 
                  onClick={prevStep}
                  className="px-4 py-2 text-gray-500 hover:text-gray-700"
                >
                  Go Back
                </button>
              )}
              {currentStep < 4 ? (
                <button 
                  onClick={nextStep}
                  className="ml-auto bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-900 transition-colors"
                >
                  Next Step
                </button>
              ) : (
                <button 
                  className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
                  onClick={nextStep}
                >
                  Confirm
                </button>
              )}
            </div>
          </div>

          <div className="my-4 p-4 bg-white flex items-center justify-between absolute w-full bottom-0 md:hidden">
            {currentStep > 1 && (
              <button 
                onClick={prevStep}
                className="px-4 py-2 text-gray-500 hover:text-gray-700"
              >
                Go Back
              </button>
            )}
            {currentStep < 4 ? (
              <button 
                onClick={nextStep}
                className="ml-auto bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-900 transition-colors"
              >
                Next Step
              </button>
            ) : (
              <button 
                className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
                onClick={nextStep}
              >
                Confirm
              </button>
            )}
          </div>
        </div>
        
      </main>
    </SubscriptionProvider>
  )
}

export default App
