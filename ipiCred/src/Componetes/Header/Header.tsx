import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import logo from '../../assets/logoIpi.png';
import cooperado from '../../assets/cooperado.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledNavbar } from './HeaderStyles';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Página Inicial');

  const handleNavClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <StyledNavbar expand="lg" bg="light" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button
              variant="light"
              className={activeLink === 'Página Inicial' ? 'active' : ''}
              onClick={() => handleNavClick('Página Inicial')}
            >
              Página Inicial
            </Button>
            <Button
              variant="light"
              className={activeLink === 'Área do Cooperado' ? 'active' : ''}
              onClick={() => handleNavClick('Área do Cooperado')}
            >
              Área do Cooperado
            </Button>
            <Button
              variant="light"
              className={activeLink === 'Propostas' ? 'active' : ''}
              onClick={() => handleNavClick('Propostas')}
            >
              Propostas
            </Button>
            <Button
              variant="light"
              className={activeLink === 'Simulador' ? 'active' : ''}
              onClick={() => handleNavClick('Simulador')}
            >
              Simulador
            </Button>
          </Nav>
          <NavDropdown
            title={
              <span>
                <img src={cooperado} alt="Cooperado" style={{ height: '30px' }} />
                Cooperativa Coafra
              </span>
            }
            id="basic-nav-dropdown"
            className="ms-auto"
          >
            <NavDropdown.Item href="#">Sair</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
