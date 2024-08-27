import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MultiStepForm.css'; 
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="form-container container mt-4">
      <div className="step-count mb-1">
        Etapa {step} de 8
      </div>
      <div className="progress-bar mb-3">
        <div
          className="progress"
          style={{ width: `${(step / 8) * 100}%` }}
        />
      </div>
      
      {step === 1 && (
        <Step1 nextStep={nextStep} />
      )}
      {step === 2 && (
        <Step2 nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <Step3 nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 4 && (
        <Step4 nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 5 && (
        <Step5 nextStep={nextStep} prevStep={prevStep} />
      )}
      
    </div>
  );
};

export default MultiStepForm;
