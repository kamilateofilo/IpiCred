import { ReactElement, useState } from "react";



export function MultiStepsForm(steps: ReactElement[]) {

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex(i => {
      if(i >= steps.length - 1) return i
      return i + 1 
    })
  }


  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
  }
}

export default MultiStepsForm;