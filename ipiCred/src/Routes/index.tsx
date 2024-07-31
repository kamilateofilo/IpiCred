// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route,  useLocation } from 'react-router-dom';
import { CooperativeForm } from '../Componetes/CooperativeForm/CooperativeForm';
import { CooperativeResponsibleForm } from '../Componetes/CooperativeResponsibleForm/CooperativeResponsibleForm';
import { ContactForm } from '../Pages/ContactForm/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Pages/Home/Home';
import { Login } from '../Pages/Login/Login';


export const AppRoutes = () => {
    return(
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactForm" element={<ContactForm />} />
                <Route path="/cooperativeResponsibleForm" element={<CooperativeResponsibleForm />} />
                <Route path="/cooperativeForm" element={<CooperativeForm />} />
          </Routes>
      );
};




