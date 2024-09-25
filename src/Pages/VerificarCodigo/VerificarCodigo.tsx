import { useNavigate } from "react-router-dom";
import Cabecalho from "../../Componetes/Cabecalho/Cabecalho"
import { VerifyCode } from "../../Componetes/VerifyCode/VerifyCode"
import BackButtonVerifyCode from "../../Componetes/BackButton/BackButtonVerifyCode";





export const VerificarCodigo = () => {
    const navigate = useNavigate();

    const goToEsqueceuSenha = () => {
      navigate('/EsqueceuSenha');
    }


    return(
        <>
          <Cabecalho/>
          <BackButtonVerifyCode goToEsqueceuSenha={goToEsqueceuSenha}/>
          <VerifyCode/>
        </>
    );
}