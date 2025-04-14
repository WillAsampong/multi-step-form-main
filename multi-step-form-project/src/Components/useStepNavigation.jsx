import { useState } from "react";

const useStepNavigation = (maxSteps) => {
    const [currentStep, setCurrentStep] = useState(1);
  
    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, maxSteps));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
    const goToStep = (step) => setCurrentStep(Math.min(Math.max(step, 1), maxSteps));
  
    return { currentStep, nextStep, prevStep, goToStep };
};

export default useStepNavigation