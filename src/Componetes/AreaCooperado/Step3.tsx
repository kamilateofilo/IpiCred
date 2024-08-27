import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import { Container, Form, TextWrapper, InputRow, Input, Select, Button, ButtonGroup } from './StepsStyles'; 

interface Step3Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step3: React.FC<Step3Props> = ({ nextStep }) => {
  const [stateList, setStateList] = useState<string[]>([]);
  const [municipiosList, setMunicipiosList] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedMunicipio, setSelectedMunicipio] = useState<string>('');

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchMunicipios(selectedState);
    }
  }, [selectedState]);

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

  return (
    <Container>
      <Header/>
      <Form>
        <TextWrapper>
          <h3>Dados da Propriedade</h3>
          <p>Insira os dados da propriedade do associado.</p>
        </TextWrapper>
          <Input placeholder="Denominação da propriedade" style={{ width: '100%', marginBottom: '10px' }} />
          <Input placeholder="N° CAR" style={{ width: '100%' }} />
       
        <InputRow style={{ marginBottom: '15px' }}>
          <Select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            style={{ width: '48%', marginRight: '4%' }}
          >
            <option value="">Selecione o Estado</option>
            {stateList.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </Select>
          <Select
            value={selectedMunicipio}
            onChange={(e) => setSelectedMunicipio(e.target.value)}
            style={{ width: '48%' }}
          >
            <option value="">Selecione o Município</option>
            {municipiosList.map(municipio => (
              <option key={municipio} value={municipio}>{municipio}</option>
            ))}
          </Select>
        </InputRow>
        <Input placeholder="Titular da propriedade" style={{ width: '100%', marginBottom: '10px' }} />
        <InputRow style={{ marginBottom: '15px' }}>
          <Input placeholder="Condição da pessoa" style={{ width: '48%', marginRight: '4%' }} />
          <Input placeholder="Percentual de detenção" style={{ width: '48%' }} />
        </InputRow>
        <ButtonGroup style={{ display: 'flex', gap: '10px' }}>
          <Button onClick={nextStep} style={{ backgroundColor: '#AC883F' }}>Continuar</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default Step3;
