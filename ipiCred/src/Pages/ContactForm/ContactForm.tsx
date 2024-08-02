import  { useState } from 'react';
import styled from 'styled-components';
import Cabecalho from '../../Componetes/Cabecalho/Cabecalho';
import { Input } from '../../styles/Input';
import { Select, SelectWrapper } from '../../styles/Select';
import ProgressBar from '../../Componetes/ProgressBar/ProgressBar';
import BackButton from '../../Componetes/BackButton/BackButtonResponsibleForm';
import ModalButton from '../../Componetes/ModalButton/ModalButton';

interface StepProps {
  nextStep?: () => void;
  prevStep?: () => void;
}


const Container = styled.div`
  width: 652px;
  margin: 2.5rem auto;
  padding: 2rem;
  top: 16%;
  border-radius: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 17px;
  z-index: 100;

  >p,a {
      color: #79747E;
      font-size: 16px;
      font-weight: 400;
    }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  >h3 {
    color: #232528;
  }

  >p {
   color:  #79747E;
   font-weight: 400;
   font-size: 16px;
   margin-bottom: 26px;
  }
`;


export const Button = styled.button`
  width: 250px;
  padding: 15px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  background-color: #E4E4E4;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin: 10px;
`;


// PRIMEIRO FORMULARIO

const StepOne = ({ nextStep }: StepProps) => (
  <div>
    <Form>
        <TextWrapper>
            <h3>Boas vindas á IpiCred!</h3>
              <p>Preencha com os dados do seu negócio que entraremos em contato com você.</p>
            <h3>Bora começar?</h3>
        </TextWrapper>
        
        <Input type="text" placeholder='Seu nome completo' />
        <Input type="email" placeholder='E-mail da cooperativa' name="email" />
        <Input type="number" placeholder='Telefone para contato' />
        <Select>
           <option value="0" style={{color: "#49454F;"}}>Atividade da cooperativa</option>
           <option value="1">Extrativista</option>
           <option value="2">Pecuária</option>
           <option value="3">Aquicultura</option>
           <option value="4">Fruticultura</option>
           <option value="5">Horticultura</option>
           <option value="6">Silvicultura</option>
           <option value="7">Pesca</option>
           <option value="8">Agricultura</option>
           <option value="9">Outro</option>
        </Select>
        <Input type="text" placeholder='Seu cargo' />
        <p>Ao continuar, esteja ciente da <a href="#">política de privacidade</a> da IpiCred</p>
      <Button type="button" onClick={nextStep}>
        Continuar
      </Button>
    </Form>
  </div>
);

// SEGUNDO FORMULARIO

// eslint-disable-next-line @typescript-eslint/no-unused-vars
 export const StepTwo = () => (

  <div>
    <Form>
      <TextWrapper>
         <h3>Me conta um pouco sobre sua cooperativa?</h3>
      </TextWrapper>

        <Input type="text" placeholder='Nome da cooperativa' />
        <Input type="number" placeholder='Numero total de cooperados' />
        <SelectWrapper>
            <Select>
                <option value="">UF</option>
            </Select>

            <Select>
                <option value="">Município</option>
            </Select>
        </SelectWrapper>
    </Form>
    <ModalButton/>
  </div>
);


// COMPONENTE QUE APARECE NA TELA

const  ContactForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <><>
       <BackButton />
      </>
    <Container>
        <Cabecalho />
        {step === 1 ? (
          <>
            <p style={{marginTop: "2.1rem"}}>Etapa 1 de 2</p>

          </>
        ) : (
          <>
            <p style={{marginTop: "2.1rem"}}>Etapa 2 de 2</p>
          </>
        )}
        <ProgressBar step={step} />

        {step === 1 ? (
          <StepOne nextStep={nextStep} />
        ) : (
          <StepTwo prevStep={prevStep} />
        )}
      </Container></>
  );
};

export default ContactForm;