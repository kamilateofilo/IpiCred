import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Cabecalho.css";
import { Link } from "react-router-dom";


import LogoIpiCred from "../../assets/images/LogoIpiCred.png";
import  ArrowOutward from "../../assets/images/arrow-outward.svg"

const Cabecalho = () => {
  return (
    <header className="header">
      <nav className="navbar fixed-top bg-body-tertiary" style={{height: '50px'}}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <Link to="/">
                  <img
                    src={ LogoIpiCred  }
                    width="100"
                    height="40"
                    className="logo d-inline-block align-text-top"
                  />
              </Link>
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-between">
           <a className="custom-nav-link" href="#">Precisa de ajuda? </a>
           <img className="custom-nav-link" src={ ArrowOutward } alt="seta para fora" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Cabecalho;
