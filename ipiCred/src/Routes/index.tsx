// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route } from 'react-router-dom';
import { CooperativeForm } from '../Componetes/CooperativeForm/CooperativeForm';
import { CooperativeResponsibleForm } from '../Componetes/CooperativeResponsibleForm/CooperativeResponsibleForm';
import { ContactForm } from '../Pages/ContactForm/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeUsuario from '../Pages/HomeUsuario/HomeUsuario';


export const AppRoutes = () => {
    return(
          <Routes>
                <Route path="/" element={<ContactForm />} />
                <Route path="/cooperativeResponsibleForm" element={<CooperativeResponsibleForm />} />
                <Route path="/cooperativeForm" element={<CooperativeForm />} />
                <Route path="/homeUsuario" element={<HomeUsuario />} />
          </Routes>
    );
};




