import { ChangeEvent, FC, useState } from "react";
import { Container, Form, TextWrapper, StyledButton, StyledLink } from "./styled";
import { Input } from "../../styles/Input";


const formatCPF = (value: string): string => {

  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})?(\d{0,3})?(\d{0,2})?/);
  if (match) {
    return `${match[1]}${match[2] ? '.' + match[2] : ''}${match[3] ? '.' + match[3] : ''}${match[4] ? '-' + match[4] : ''}`;
  }
  return value;
};


const validateCPF = (value: string): boolean => {
  const cleaned = value.replace(/\D/g, '');
  return cleaned.length === 11;
};

const RequestCredit: FC = () => {
  const [cpf, setCpf] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);



  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedCPF = formatCPF(value);
    setCpf(formattedCPF);
    setIsValid(validateCPF(formattedCPF));
  };

  return (
    <Container>
      <Form>
        <TextWrapper>
          <h1>Inicie sua solicitação de crédito</h1>
          <p>Digite CPF ou CNPJ para começarmos a pré-análise do seu crédito. Esta etapa é rápida e segura, e nos ajuda a entender melhor suas necessidades financeiras.</p>
        </TextWrapper>

        <Input
          type="text"
          value={cpf}
          onChange={handleChange}
          placeholder="CPF do beneficiário"
          maxLength={14}
          required
        />

        <StyledLink to="/dadosSolicitante">
          <StyledButton disabled={!isValid} style={{ backgroundColor: isValid ? '#AC883F' : '#E4E4E4' }}>
            Continuar
          </StyledButton>
        </StyledLink>
      </Form>
    </Container>
  );
}

export default RequestCredit;
