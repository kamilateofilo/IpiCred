import { useNavigate } from "react-router-dom";
import Cabecalho from "../../Componetes/Cabecalho/Cabecalho";
import { NewPassword } from "../../Componetes/NewPassword/NewPassword";
import BackButtonNewPassword from "../../Componetes/BackButton/BackButtonNewPassword";





export const NovaSenha = () => {
    const navigate = useNavigate();

    const goToVerificarCodigo = () => {
      navigate('/VerificarCodigo');
    }


    return(
        <>
          <Cabecalho/>
          <BackButtonNewPassword goToVerificarCodigo={goToVerificarCodigo}/>
          <NewPassword/>
        </>
    );
}