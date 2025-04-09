// import { useState } from 'react';
import './App.css'
import './index.css'
import Step1 from './Components/step1'
import Step2 from './Components/step2'
import Step3 from './Components/step3'

function App() {

  // const [active, setActive] = useState(false);

  return (
    <main className="bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat bg-center h-[180px]">
      <div className='bg-marine-blue h-screen'>
        <div className="flex justify-center gap-4 mb-8 pt-10">
          {[1, 2, 3, 4].map((step, index) => (
            <div 
              key={index} 
              className={`w-8 h-8 rounded-full flex items-center justify-center border border-white
                ${step === 1 ? 'bg-blue-100 text-blue-800' : 'bg-transparent text-white'}`}
            >
              {step}
            </div>
          ))}
        </div>
        {/* <Step1 /> */}
        {/* <Step2 /> */}
        <Step3 />
      </div>
      
    </main>
  )
}

export default App
