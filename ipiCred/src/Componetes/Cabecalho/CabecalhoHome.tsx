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
} from './CabecalhoHomeStyles'; 

import logo from '../../assets/logoIpi.png';
import { useNavigate } from 'react-router-dom';

const Cabecalho = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contactForm');
  };


  return (
    <Header>
      <Navbar>
        <NavbarContainer>
          <div className="d-flex align-items-center">
            <NavbarBrand href="#">
              <Logo src={logo} width="100" height="40" alt="Logo" />
            </NavbarBrand>
            <Manifesto href="#">Manifesto</Manifesto>
          </div>
          <div className="d-flex align-items-center">
            <NavLink href="#">Sobre</NavLink>
            <Separator>|</Separator>
                <StyledLink to="/login">
                   Entrar
                </StyledLink >
            <Btn onClick={handleButtonClick} type="button">Começar agora</Btn>
          </div>
        </NavbarContainer>
      </Navbar>
    </Header>
  );
};

export default Cabecalho;
