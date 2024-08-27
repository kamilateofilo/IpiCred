import React, { useState } from 'react';
import Header from '../Header/Header';
import { Container, Form, TextWrapper, Button, Input, InputRow, Select, CheckboxWrapper, ButtonGroup } from './StepsStyles';

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
}

interface Dependente {
  nome: string;
  dataNascimento: string;
  telefone: string;
  vinculo: string;
}

const Step2: React.FC<Step2Props> = ({ nextStep }) => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [vinculo, setVinculo] = useState('');
  const [possuiDependentes, setPossuiDependentes] = useState(true);
  const [dependentes, setDependentes] = useState<Dependente[]>([]);

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handleDataNascimentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataNascimento(e.target.value);
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedTelefone = e.target.value.replace(/\D/g, '').slice(0, 11);
    setTelefone(formattedTelefone);
  };

  const handleVinculoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVinculo(e.target.value);
  };

  const handleCheckboxChange = () => {
    setPossuiDependentes(!possuiDependentes);
  };

  const handleAddDependente = () => {
    if (nome && dataNascimento && telefone && vinculo) {
      setDependentes([
        ...dependentes,
        { nome, dataNascimento, telefone, vinculo },
      ]);
      setNome('');
      setDataNascimento('');
      setTelefone('');
      setVinculo('');
    }
  };

  const isContinueDisabled = !possuiDependentes 
    ? false
    : dependentes.length === 0;

  return (
    <Container>
      <Header/>
      <TextWrapper>
        <h3>Dependentes</h3>
        <p>Insira os dados abaixo referente aos dependentes do associado, caso possua.</p>
      </TextWrapper>
      <Form>
        <Input 
          type="text" 
          placeholder="Seu nome completo" 
          value={nome} 
          onChange={handleNomeChange}
          disabled={!possuiDependentes}
        />
        <InputRow>
          <Input 
            type="date" 
            placeholder="Data de nascimento" 
            value={dataNascimento} 
            onChange={handleDataNascimentoChange}
            disabled={!possuiDependentes}
          />
          <Input 
            type="text" 
            placeholder="Telefone" 
            value={telefone} 
            onChange={handleTelefoneChange}
            disabled={!possuiDependentes}
          />
        </InputRow>
        <Select value={vinculo} onChange={handleVinculoChange} disabled={!possuiDependentes}>
          <option value="">Vínculo com o cooperado</option>
          <option value="filho">Filho(a)</option>
          <option value="conjuge">Cônjuge</option>
          <option value="outro">Outro</option>
        </Select>
        <CheckboxWrapper>
          <label>
            <input 
              type="checkbox" 
              checked={!possuiDependentes} 
              onChange={handleCheckboxChange} 
            />
            Não possuo dependentes
          </label>
        </CheckboxWrapper>
       
        <div className="dependentes-list">
          {dependentes.map((dependente, index) => (
            <div key={index} className="dependente-item">
              <p><strong>Nome:</strong> {dependente.nome}</p>
              <p><strong>Data de Nascimento:</strong> {dependente.dataNascimento}</p>
              <p><strong>Telefone:</strong> {dependente.telefone}</p>
              <p><strong>Vínculo:</strong> {dependente.vinculo}</p>
            </div>
          ))}
        </div>
        <ButtonGroup style={{ display: 'flex', gap: '10px' }}>
          <Button 
            onClick={nextStep}
            style={{ backgroundColor: '#AC883F', flex: 1 }}
            disabled={isContinueDisabled}
          >
            Continuar
          </Button>
          <Button 
            onClick={handleAddDependente}
            style={{
              border: '2px solid #AC883F', 
              backgroundColor: '#fff', 
              color: '#AC883F', 
              flex: 1,
            }}
            disabled={!possuiDependentes || nome === '' || dataNascimento === '' || telefone === '' || vinculo === ''}
          >
            + Adicionar mais dependentes
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default Step2;
