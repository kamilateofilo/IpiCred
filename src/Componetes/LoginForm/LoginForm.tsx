import { Form, Input, Button, Conteiner, Icon, StyledLink } from "./styled";
import { TextWrapper } from '../../Pages/ContactForm/styled';
import { ChangeEvent, useState } from "react";
import { useTranslation  } from 'react-i18next';

import eyeIcon from "../../assets/images/eye-icon.png";
import eyeOffIcon from "../../assets/images/eye-closed-icon.png";
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Senha digitada:', password);
    navigate('/HomeUsuario');
  };

  const { t } = useTranslation(); 
  
  return (
    <Form>
      <Conteiner>
        <TextWrapper>
          <h3>{t('HOME.LOGIN.TITLE')}</h3>
          <p>{t('HOME.LOGIN.SUBTITLE')}</p>
        </TextWrapper>

        <Input 
          type="email"
          placeholder={t('HOME.LOGIN.EMAIL')}
          required
        />

        <Input 
          type={showPassword ? 'text' : 'password'}
          onChange={handlePasswordChange}
          placeholder={t('HOME.LOGIN.PASSWORD')}
          required
        />

        <StyledLink to="">
        {t('HOME.LOGIN.FORGOT_MY_PASSWORD')}
        </StyledLink>

        <Icon
          src={showPassword ? eyeOffIcon : eyeIcon}
          alt={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          onClick={togglePasswordVisibility}
        />

        <Button onClick={handleButtonClick} type="submit">{t('HOME.LOGIN.ENTER')}</Button>
      </Conteiner>  
    </Form>
  );
};

export default LoginForm;
