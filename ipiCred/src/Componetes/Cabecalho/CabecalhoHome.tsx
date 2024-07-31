import {
  Header,
  Navbar,
  NavbarBrand,
  Logo,
  Manifesto,
  NavLink,
  CustomNavLink,
  Separator,
  Btn,
  NavbarContainer
} from './CabecalhoHomeStyles'; 

import logo from '../../assets/logoIpi.png';

const Cabecalho = () => {
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
            <CustomNavLink href="#">Entrar</CustomNavLink>
            <Btn type="button">Começar agora</Btn>
          </div>
        </NavbarContainer>
      </Navbar>
    </Header>
  );
};

export default Cabecalho;
