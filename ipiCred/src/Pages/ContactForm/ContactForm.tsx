import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import Cabecalho from '../../Componetes/Cabecalho/Cabecalho';
import { Input } from '../../styles/Input';
import { Select, SelectWrapper } from '../../styles/Select';
import ProgressBar from '../../Componetes/ProgressBar/ProgressBar';
import BackButtonComponent from '../../Componetes/BackButton/BackButtonResponsibleForm';
import ModalButton from '../../Componetes/ModalButton/ModalButton';

interface StepProps {
  nextStep?: () => void;
  prevStep?: () => void;
}

interface ButtonProps {
  isValid: boolean;
}

interface FormData {
  municipio: string;
  numero_cooperados: string;
  uf: string;
  nome_cooperativa: string;
  nome_completo: string;
  email: string;
  telefone_contato: string;
  atividade_cooperativa: string;
  cargo: string;
}


const Container = styled.div`
  max-width: 100%;
  width: 100%;
  max-width: 600px;
  margin: 2.5rem auto;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 17px;

  > p, a {
    color: #79747E;
    font-size: 16px;
    font-weight: 400;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    color: #232528;
  }

  > p {
    color: #79747E;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 26px;
  }
`;

const activeStyle = css`
  background-color: #AC883F;
`;

const inactiveStyle = css`
  background-color: #E4E4E4;
`;

const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: 250px;
  padding: 15px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin: 10px auto;

  ${props => (props.isValid ? activeStyle : inactiveStyle)}

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const BackButton = styled(BackButtonComponent)`
  margin-bottom: 1rem;
  
  @media (max-width: 600px) {
    margin-bottom: 50px;
    font-size: 14px;
    color: #333;
  }
`;

const StepOne = ({ nextStep }: StepProps) => {
  const [formData, setFormData] = useState<FormData>({ 
    nome_completo: '', 
    email: '', 
    telefone_contato: '', 
    cargo: ''
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  useEffect(() => {
    const { nome_completo, email, telefone_contato, cargo, atividade_cooperativa } = formData;
    if (nome_completo && email && telefone_contato && cargo && atividade_cooperativa) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  
  return(
    <div>
      <Form>
        <TextWrapper>
          <h3>Boas vindas à IpiCred!</h3>
          <p>Preencha com os dados do seu negócio que entraremos em contato com você.</p>
          <h3>Bora começar?</h3>
        </TextWrapper>

        <Input
          type="text"
          placeholder='Seu nome completo'
          name="nome_completo"
          value={formData.nome_completo}
          onChange={handleChange}
        />

        <Input 
          type="email" 
          placeholder='E-mail da cooperativa' 
          name="email" 
          value={formData.email}
          onChange={handleChange}
        />

        <Input 
          type="tel" 
          placeholder='Telefone para contato' 
          name='telefone_contato'
          value={formData.telefone_contato}
          onChange={handleChange}

        />
        <Select  
          name="atividade_cooperativa"
          value={formData.atividade_cooperativa}
          onChange={handleChange}>

          <option value="" style={{ color: "#49454F" }}>Atividade da cooperativa</option>
          <option value="atividade1">Extrativista</option>
          <option value="atividade2">Pecuária</option>
          <option value="atividade3">Aquicultura</option>
          <option value="atividade4">Fruticultura</option>
          <option value="atividade5">Horticultura</option>
          <option value="atividade6">Silvicultura</option>
          <option value="atividade7">Pesca</option>
          <option value="atividade8">Agricultura</option>
          <option value="atividade9">Outro</option>
        </Select>


        <Input 
          type="text" 
          placeholder='Seu cargo' 
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
        />

        <p>Ao continuar, esteja ciente da <a href="#">política de privacidade</a> da IpiCred</p>

        <Button isValid={isFormValid} type="button" onClick={nextStep}>
           Continuar 
        </Button>
      </Form>
    </div>
  )  
};


export const StepTwo = () => {
  const [stateList, setStateList] = useState<string[]>([]);
  const [municipiosList, setMunicipiosList] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({ 
    nome_cooperativa: '', 
    numero_cooperados: '', 
    uf: '', 
    municipio: ''
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    const { nome_cooperativa, numero_cooperados, uf, municipio } = formData;
    if (nome_cooperativa && numero_cooperados && uf && municipio) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
      const data = await response.json();
      const stateAbbreviations = data.map((state: { sigla: string }) => state.sigla);
      const sortedStates = stateAbbreviations.sort();
      setStateList(sortedStates);
    } catch (error) {
      console.error("Erro ao buscar estados:", error);
    }
  };

  const fetchMunicipios = async (state: string) => {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`);
      const data = await response.json();
      const municipios = data.map((municipio: { nome: string }) => municipio.nome);
      setMunicipiosList(municipios);
    } catch (error) {
      console.error("Erro ao buscar municípios:", error);
      setMunicipiosList([]);
    }
  };

  const handleSelectChangeCombined = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === 'uf') {
      setSelectedState(value);
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
      fetchMunicipios(value);
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };


  return (
    <div>
      <Form>
        <TextWrapper>
          <h3>Me conta um pouco sobre sua cooperativa?</h3>
        </TextWrapper>

        <Input 
          type="text" 
          placeholder='Nome da cooperativa' 
          name="nome_cooperativa"
          value={formData.nome_cooperativa}
          onChange={handleChange}
        />

        <Input 
            type="number" 
            placeholder='Numero total de cooperados'
            name="numero_cooperados"
            value={formData.numero_cooperados}
            onChange={handleChange}
        />

        <SelectWrapper>
          <Select 
            name='uf'
            onChange={handleSelectChangeCombined} 
            value={formData.uf}
          >
            <option value="">UF</option>
            {stateList.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </Select>

          <Select
             name='municipio'
             onChange={handleSelectChangeCombined} 
             value={formData.municipio}
          >
            <option value="">Município</option>
            {municipiosList.map((municipio) => (
              <option key={municipio} value={municipio}>{municipio}</option>
            ))}
          </Select>
        </SelectWrapper>
      </Form>
      <ModalButton />
    </div>
  );
};

 

const ContactForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <>
      <BackButton />
      <Container>
        <Cabecalho />
        {step === 1 ? (
          <>
            <p style={{ marginTop: "2.1rem" }}>Etapa 1 de 2</p>
          </>
        ) : (
          <>
            <p style={{ marginTop: "2.1rem" }}>Etapa 2 de 2</p>
          </>
        )}
        <ProgressBar step={step} />

        {step === 1 ? (
          <StepOne nextStep={nextStep} />
        ) : (
          <StepTwo />
        )}
      </Container>
    </>
  );
};

export default ContactForm;


