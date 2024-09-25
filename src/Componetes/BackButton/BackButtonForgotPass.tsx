import ArrowLeft from "../../assets/images/arrow-left.svg";
import { Conteiner, StyledLink } from "./styled.ts";



interface BackButtonProps {
    goToLogin: () => void;
  }
  
  const BackButtonForgotPass = ({goToLogin }: BackButtonProps) => {
    
    const handleClick = () => {
        goToLogin();
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
  
  
  export default BackButtonForgotPass;