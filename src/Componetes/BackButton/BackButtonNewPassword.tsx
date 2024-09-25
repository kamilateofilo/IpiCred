import ArrowLeft from "../../assets/images/arrow-left.svg";
import { Conteiner, StyledLink } from "./styled.ts";

interface BackButtonProps {
  goToVerificarCodigo: () => void;
}

const BackButtonNewPassword = ({goToVerificarCodigo}: BackButtonProps) => {

  const handleClick = () => {
    goToVerificarCodigo();
  }

  return (
    <>
      <Conteiner>
          <StyledLink onClick={handleClick}>
            <img src={ArrowLeft} alt="seta voltar" /> {' '}
            Voltar
          </StyledLink>
      </Conteiner>
    </>
  );
};


export default BackButtonNewPassword;