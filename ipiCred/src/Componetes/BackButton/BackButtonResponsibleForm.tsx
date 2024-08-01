// import "./styled.ts";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import { Conteiner, LeftButton, StyledLink } from "./styled.ts";

const BackButtonResponsibleForm = () => {
    return (
        <Conteiner>
            <LeftButton>
                <StyledLink to="/" aria-label="Voltar">
                    <img src={ArrowLeft} alt="seta voltar" />
                    Voltar
                </StyledLink>
            </LeftButton>
        </Conteiner>
    );
}; 

export default BackButtonResponsibleForm;
