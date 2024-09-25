import ArrowLeft from "../../assets/images/arrow-left.svg";
import { Conteiner, StyledLink } from "./styled.ts";



interface BackButtonProps {
    goToEsqueceuSenha: () => void;
  }
  
  const BackButtonVerifyCode = ({goToEsqueceuSenha }: BackButtonProps) => {
    
    const handleClick = () => {
        goToEsqueceuSenha();
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
  
  
  export default BackButtonVerifyCode;