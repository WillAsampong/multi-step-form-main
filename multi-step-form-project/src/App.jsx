import './App.css'
import './index.css'
import Step1 from './Components/Step1';
import Step2 from './Components/ProductPlan';
import Step3 from './Components/AddOns';
import Step4 from './Components/FinishingUp';
import Step5 from './Components/Step5';
import Sidebar from './Components/Sidebar';
import NavigationButtons from './Components/NavigationButtons'
import useStepNavigation from './Components/useStepNavigation';
import { SubscriptionProvider } from './context/SubscriptionContext'

function App() {

  const {currentStep, nextStep, prevStep} = useStepNavigation(5);
  const isMobile = window.innerWidth < 768;

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
    <main className="h-screen bg-blue-50 relative">
      <div className="md:absolute md:top-1/2 md:-translate-y-1/2 left-1/2 md:-translate-x-1/2 md:bg-white md:flex md:h-[600px] md:p-2 md:w-2/3 rounded-xl">

        <Sidebar steps={steps} currentStep={currentStep}/>

        <div className="flex-1 md:relative md:mx-18">
          {renderStep()}

          {isMobile ? (
            <div className=''>
              <NavigationButtons 
                currentStep={currentStep}
                onNext={nextStep}
                onPrev={prevStep}
                isLastStep={currentStep === 4}
              />
            </div>
          ) : (
            <div className="">
              <NavigationButtons 
                currentStep={currentStep}
                onNext={nextStep}
                onPrev={prevStep}
                isLastStep={currentStep === 4}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  </SubscriptionProvider>
  )
}

export default App
