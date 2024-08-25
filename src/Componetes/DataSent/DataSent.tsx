import { Container, StyledLink, StyledButton } from "./styled";
import CheckImg from "../../assets/images/undraw_checklist.png";






export const DataSent = () => {
    return(
        <Container>
            <img src={CheckImg} alt="Imagem de check de submissão dos dados" />
            <p>Os dados do seu cooperado foram enviados para a pré análise.</p>
            <StyledLink to="/homeUsuario">
                <StyledButton>Concluir submissão</StyledButton>
            </StyledLink>
        </Container>
    );
}

export default DataSent;