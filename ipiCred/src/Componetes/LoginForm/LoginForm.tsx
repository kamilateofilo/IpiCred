import { Form, Input, Button, Conteiner, Icon, StyledLink } from "./styled";
import { TextWrapper } from '../CooperativeResponsibleForm/styled';
import { ChangeEvent, useState } from "react";

import eyeIcon from "../../assets/images/eye-icon.png";
import eyeOffIcon  from "../../assets/images/eye-closed-icon.png";



export const LoginForm = () => {

  const [setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  
    return (
        <Form>
          <Conteiner>
            <TextWrapper>
              <h3>Portal do Parceiro</h3>
              <p>Solicite crédito para o seus cooperados de forma fácil e rápida</p>
            </TextWrapper>

            <Input 
              type="email"
              placeholder="Digite seu e-mail"
              required
            />

            <Input 
              type={showPassword ? 'text' : 'password'}
              onChange={handlePasswordChange}
              placeholder="Digite sua senha"
              required
            />

            <StyledLink>
                 Esqueci minha senha
              </StyledLink>

           <Icon
            src={showPassword ? eyeOffIcon : eyeIcon}
            alt={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            onClick={togglePasswordVisibility}
           />

            <Button type="submit">Entrar</Button>
          </Conteiner>  
        </Form>
    );
  };
  
  export default LoginForm;