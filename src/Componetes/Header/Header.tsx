import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import logo from '../../assets/logoIpi.png';
import cooperado from '../../assets/cooperado.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledNavbar } from './HeaderStyles.ts';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/HomeUsuario':
        setActiveLink('Página Inicial');
        break;
      case '/AreaCooperado':
        setActiveLink('Área do Cooperado');
        break;
      case '/Propostas':
        setActiveLink('Propostas');
        break;
    }
  }, [location.pathname]);

  // Tipagem explícita para os parâmetros
  const handleNavClick = (path: string, linkName: string) => {
    setActiveLink(linkName);
    navigate(path);
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
              onClick={() => handleNavClick('/HomeUsuario', 'Página Inicial')}
            >
              Página Inicial
            </Button>
            <Button
              variant="light"
              className={activeLink === 'Área do Cooperado' ? 'active' : ''}
              onClick={() => handleNavClick('/AreaCooperado', 'Área do Cooperado')}
            >
              Área do Cooperado
            </Button>
            <Button
              variant="light"
              className={activeLink === 'Propostas' ? 'active' : ''}
              onClick={() => handleNavClick('/Propostas', 'Propostas')}
            >
              Propostas
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
            <NavDropdown.Item onClick={() => handleNavClick('/', 'home')}>Sair</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
