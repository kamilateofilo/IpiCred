import ArrowLeft from "../../assets/images/arrow-left.svg";
import { Conteiner, LeftButton, StyledLink } from "./styled.ts"

interface BackButtonPros {
  action: () => void
}

const BackButton = ({ action }: BackButtonPros) => {

  return (
    <>
      <Conteiner>
        <LeftButton>
          <StyledLink onClick={action}>
            <img src={ArrowLeft} alt="seta voltar" /> {' '}
            Voltar
          </StyledLink>
        </LeftButton>
      </Conteiner>
    </>
  );
};


export default BackButton;