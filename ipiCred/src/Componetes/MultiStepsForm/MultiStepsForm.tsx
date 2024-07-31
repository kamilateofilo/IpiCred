import { ReactElement, useState } from "react";
// import { ProgressBar } from "./styled";


export function MultiStepsForm(steps: ReactElement[]) {

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  // const [ filled, setFilled] = useState(1)
  // const [loading, isLoading] = useState(false);

  function next() {
    setCurrentStepIndex(i => {
      if(i >= steps.length - 1) return i
      return i + 1 
    })
  }

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  // useEffect(() => {
  //   if(filled < 100 && isLoading) {
  //     setTimeout(() => setFilled(prev => prev+=5), 50)
  //   }
  // }, [filled, isLoading])

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    goTo,
    next,
  }
}