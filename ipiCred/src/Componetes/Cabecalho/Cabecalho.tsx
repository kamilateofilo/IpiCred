import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Cabecalho.css'; 

import logo from '../../assets/logoIpi.png';

const Cabecalho = () => {
  return (
    <header className="header">
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                width="100"
                height="40"
                className="logo d-inline-block align-text-top"
              />
              
            </a>
            <a className="manifesto nav-link" href="#">Manifesto</a>
          </div>
          <div className="d-flex align-items-center">
            <a className="nav-link" href="#">Sobre</a>
            <span className="separator">|</span>
            <a className="nav-link custom-nav-link" href="#">Entrar</a>
            <button className="btn btn-sm" type="button">Começar agora</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Cabecalho;
