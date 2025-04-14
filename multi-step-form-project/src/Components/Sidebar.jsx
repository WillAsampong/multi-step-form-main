import React from "react";

const Sidebar = ({ steps, currentStep }) => (
    <div className="flex md:flex-col gap-6 pt-10 md:p-6 items-start justify-center md:justify-start bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-center md:h-auto h-[150px] bg-cover md:rounded-md md:w-1/5">
      {steps.map((item) => (
        <div className='flex gap-x-4' key={item.id}>
          <div 
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
);
  
export default Sidebar