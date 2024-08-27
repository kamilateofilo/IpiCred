import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import { Container, Form, TextWrapper, Input, Button, ButtonGroup} from './StepsStyles'; 

interface Step4Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step4: React.FC<Step4Props> = ({ nextStep }) => {
  return (
    <Container>
      <Header/>
          <Form>
            <TextWrapper>
              <h3>Dados da propriedade</h3>
              <p>Insira os dados do CAF do associado em questão.</p>
            </TextWrapper>
            <Input placeholder="Número do CAF" style={{ width: '100%' }} />
            
            <ButtonGroup style={{ display: 'flex', gap: '10px' }}>
            <Button onClick={nextStep} style={{ backgroundColor: '#AC883F' }}>Continuar</Button>
            </ButtonGroup>

            </Form>
          </Container>
  );
};

export default Step4;
