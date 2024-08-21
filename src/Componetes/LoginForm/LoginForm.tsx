import { ChangeEvent, useState } from 'react';
import { Form, Input, Button, Conteiner, Icon, StyledLink, InputWrapper } from "./styled";
import { TextWrapper } from '../../Pages/ContactForm/styled';
import { useTranslation } from 'react-i18next';

import eyeIcon from "../../assets/images/eye-icon.png";
import eyeOffIcon from "../../assets/images/eye-closed-icon.png";
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from './styled';
import Loading from '../Loading/Spinner';




const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
};

const formatEmail = (email: string): string => {
  return email.trim().toLowerCase();
};

const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

const authenticateUser = async (email: string, password: string): Promise<string> => {
  try {
    const response = await fetch('https://ipicred-api.vercel.app/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Senha incorreta. Verifique e tente novamente');
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    if(error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Ocorreu um erro desconhecido.');
    }
  }
};



export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const isFormValid = isValidEmail(email) && isValidPassword(password);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedEmail = formatEmail(e.target.value);
    setEmail(formattedEmail);
    setErrorEmail(null);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrorPassword(null);
  };

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async () => {
    setErrorEmail(null);
    setErrorPassword(null);

    if (!isValidEmail(email)) {
      setErrorEmail(t('Email obrigatório. Deve estar no formato exemplo@email.com'));
      return;
    }

    if (!isValidPassword(password)) {
      setErrorPassword(t('Senha incorreta. Verifique e tente novamente'));
      return;
    }

    setLoading(true);
    
    try {
      const token = await authenticateUser(email, password);
      localStorage.setItem('jwt', token);
      setTimeout(() => {
        setLoading(false);
        navigate('/HomeUsuario');
      }, 1000);
    } catch (error: unknown) {
      setLoading(false);
      if(error instanceof Error) {
        setErrorPassword(error.message);
      } else {
        setErrorPassword('Ocorreu um erro desconhecido.');
      }
    }
  };

  return (
    <Form>
      <Conteiner>
        <TextWrapper>
          <h3 style={{color: "#4F5153"}}>{t('HOME.LOGIN.TITLE')}</h3>
          <p>{t('HOME.LOGIN.SUBTITLE')}</p>
        </TextWrapper>

        <div>
          <Input 
            type="email"
            placeholder={t('HOME.LOGIN.EMAIL')}
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errorEmail && <ErrorMessage>{errorEmail}</ErrorMessage>}
        </div>

        <InputWrapper>
          <Input 
            type={showPassword ? 'text' : 'password'}
            placeholder={t('HOME.LOGIN.PASSWORD')}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errorPassword && <ErrorMessage>{errorPassword}</ErrorMessage>}
          <Icon
            src={showPassword ? eyeOffIcon : eyeIcon}
            alt={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            onClick={togglePasswordVisibility}
          />
        </InputWrapper>

        <StyledLink to="">
          {t('HOME.LOGIN.FORGOT_MY_PASSWORD')}
        </StyledLink>

        <Button 
          onClick={handleLogin} 
          type="button" 
          disabled={!isFormValid} 
          style={{ backgroundColor: isFormValid ? '#AC883F' : '#d3d3d3' }}
        >
          {t('HOME.LOGIN.ENTER')}
        </Button>

        {loading && <Loading />}
      </Conteiner>  
    </Form>
  );
};

export default LoginForm;
