// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route } from 'react-router-dom';
import HomeUsuario from '../Pages/HomeUsuario/HomeUsuario';
import Home from '../Pages/Home/Home';
import { Login } from '../Pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AreaCooperado from '../Pages/AreaCooperado/AreaCooperado';
import Propostas from '../Pages/Propostas/Propostas';
import ContactForm from '../Pages/ContactForm/ContactForm';
import PreAnaliseCredito from '../Pages/PreAnaliseCredito/PreAnaliseCredito';
import { DadosSolicitante } from '../Pages/DadosSolicitante/DadosSolicitante';
import { DadosEnviados } from '../Pages/DadosEnviados/DadosEnviados';
import MultiStepForm from '../Componetes/AreaCooperado/MultiStepForm';


export const AppRoutes = () => {
    return(
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactForm" element={<ContactForm/>} />
                <Route path="/homeUsuario" element={<HomeUsuario />} />
                <Route path="/AreaCooperado" element={<AreaCooperado />} />
                <Route path="/Propostas" element={<Propostas />} />
                <Route path="/preAnaliseCredito" element={<PreAnaliseCredito />} />
                <Route path="/dadosSolicitante" element={<DadosSolicitante />} />
                <Route path="/dataSent" element={<DadosEnviados/>} />
                <Route path="/multistepForm" element={<MultiStepForm />} />
          </Routes>
      );
};




