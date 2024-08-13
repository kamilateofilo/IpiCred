import ArrowLeft from "../../assets/images/arrow-left.svg";
import { Conteiner, StyledLink } from "./styled.ts";

interface BackButtonProps {
  goToHome: () => void;
  goToPreviousStep: () => void;
  isFirstStep: boolean;
}

const BackButton = ({goToHome, goToPreviousStep, isFirstStep }: BackButtonProps) => {

  const handleClick = () => {
    if (isFirstStep) {
      goToHome();
    } else {
      goToPreviousStep();
    }
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


export default BackButton;