import { useNavigate } from "react-router-dom";
import BackButtonForgotPass from "../../Componetes/BackButton/BackButtonForgotPass";
import Cabecalho from "../../Componetes/Cabecalho/Cabecalho";
import { ForgotPassword } from "../../Componetes/ForgotPassword/ForgotPassword";





export const EsqueceuSenha = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login');
  }


    return(
        <>
          <Cabecalho/>
          <ForgotPassword/>
          <BackButtonForgotPass goToLogin={goToLogin} />
        </>
    );
}