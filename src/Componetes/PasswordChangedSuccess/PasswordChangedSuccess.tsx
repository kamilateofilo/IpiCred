import { Container, StyledLink, StyledButton } from "./styled"





export const PasswordChangedSuccess = () => {
    return(
        <Container>
            <h1>Senha alterada com sucesso!</h1>
            <StyledLink to="/login">
                    <StyledButton>
                        Retornar ao login
                    </StyledButton>
            </StyledLink>
        </Container>
    );
}