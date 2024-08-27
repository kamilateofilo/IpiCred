import React, { useState, useEffect } from 'react';
import { Container, Form, TextWrapper, Button, Input, Select, InputRow } from './StepsStyles'; 
import Header from '../Header/Header';

interface Step1Props {
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ nextStep }) => {
  const [isValid, setIsValid] = useState(false);
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [stateList, setStateList] = useState<string[]>([]);
  const [municipiosList, setMunicipiosList] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleInputChange = () => {
    setIsValid(true); 
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCpf = e.target.value.replace(/\D/g, '').slice(0, 11);
    setCpf(formattedCpf);
  };

  const handleCelularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCelular = e.target.value.replace(/\D/g, '').slice(0, 11);
    setCelular(formattedCelular);
  };

  const handleEnderecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndereco(e.target.value);
  };

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

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchMunicipios(selectedState);
    }
  }, [selectedState]);

  return (
    <Container>
      <Header/>
      <TextWrapper>
        <h3>Cadastro do cooperado</h3>
        <p>Preencha com os dados do seu cooperado para solicitar crédito em breve.</p>
      </TextWrapper>
      <Form>
        <Input 
          type="text" 
          placeholder="Seu nome completo" 
          onChange={handleInputChange}
        />
        <InputRow>
          <Input 
            type="text" 
            placeholder="CPF" 
            value={cpf} 
            onChange={handleCpfChange}
          />
          <Input 
            type="date" 
            placeholder="Data de nascimento" 
            onChange={handleInputChange}
          />
        </InputRow>
        <Input 
          type="text" 
          placeholder="Endereço" 
          value={endereco} 
          onChange={handleEnderecoChange}
        />
        <InputRow>
          <Select onChange={handleInputChange}>
            <option value="">Estado Civil</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
          </Select>
          <Input 
            type="text" 
            placeholder="Celular" 
            value={celular} 
            onChange={handleCelularChange}
          />
        </InputRow>
        <InputRow>
          <Select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
            <option value="">UF</option>
            {stateList.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
          <Select disabled={!selectedState} onChange={handleInputChange}>
            <option value="">Município</option>
            {municipiosList.map((municipio) => (
              <option key={municipio} value={municipio}>
                {municipio}
              </option>
            ))}
          </Select>
        </InputRow>
        <Button 
          isValid={isValid} 
          onClick={nextStep} 
          disabled={!isValid}
        >
          Continuar
        </Button>
      </Form>
    </Container>
  );
};

export default Step1;
