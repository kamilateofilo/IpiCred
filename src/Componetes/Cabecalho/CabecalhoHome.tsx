import {
  Header,
  Navbar,
  NavbarBrand,
  Logo,
  Manifesto,
  NavLink,
  StyledLink,
  Separator,
  Btn,
  NavbarContainer
} from './CabecalhoHomeStyles.ts'; 
import { useTranslation } from 'react-i18next';

import logo from '../../assets/logoIpi.png';
import { useNavigate } from 'react-router-dom';

const Cabecalho = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/contactForm');
  };
  
  const { t } = useTranslation(); 

  return (
    <Header>
      <Navbar>
        <NavbarContainer>
          <div className="d-flex align-items-center">
            <NavbarBrand href="#">
              <Logo src={logo} width="100" height="40" alt="Logo" />
            </NavbarBrand>
            <Manifesto href="#">{t('HOME.MANIFEST')}</Manifesto>
          </div>
          <div className="d-flex align-items-center">
            <NavLink href="#">{t('HOME.ABOUT')}</NavLink> 
            <Separator>|</Separator>
            <StyledLink to="/login">
              {t('HOME.TO_GO')} 
            </StyledLink>
            <Btn onClick={handleButtonClick} type="button">
              {t('HOME.START_NOW')} 
            </Btn>
          </div>
        </NavbarContainer>
      </Navbar>
    </Header>
  );
};

export default Cabecalho;