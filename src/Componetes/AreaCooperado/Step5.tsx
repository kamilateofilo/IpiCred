import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Finish from '../../assets/images/undraw_checklist.png'; 

interface Step5Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step5: React.FC<Step5Props> = ({ nextStep, prevStep }) => {
  return (
    <>
    <Header />
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={Finish} alt="Cadastro" style={{ width: '538px', height: '364', marginBottom: '20px'}} />
      <h3 style={{color: '#232528B2', fontWeight:'400', fontSize: '24px'}} >Seu associado foi cadastrado com sucesso</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
          onClick={prevStep} 
          style={{
            border: '2px solid #AC883F', 
            backgroundColor: '#fff', 
            fontSize: '14px',
            width: '200px',
            height: '40px', 
            color: '#AC883F', 
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        >
          Adicionar cooperado
        </button>
        <button
          onClick={nextStep} 
          style={{
            backgroundColor: '#AC883F',
            fontSize: '14px',
            width: '250px',
            height: '40px', 
            color: '#fff', 
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Concluir cadastro de cooperados
        </button>
      </div>
    </div>
    </>
  );
};

export default Step5;
