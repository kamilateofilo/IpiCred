import  ArrowLeft from "../../assets/images/arrow-left.svg";
import { Conteiner, LeftButton,  StyledLink } from "./styled.ts"


const BackButton = () => {
    return (
        <>
          <Conteiner>
            <LeftButton>
              <img src={ ArrowLeft } alt="seta voltar" />
              <StyledLink to="/contactForm">
                 Voltar
              </StyledLink>
            </LeftButton>
          </Conteiner>
        </>
    );
};    


export default BackButton;