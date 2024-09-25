import React, { useState } from 'react';
import { Input } from "../../styles/Input";
import { Form, TextWrapper, Container, StyledButton, StyledLink } from "./styled";

export const VerifyCode = () => {
    const [codigo, setCodigo] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleCodigoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCodigo(value);
        
       
        const codigoRegex = /^[a-zA-Z0-9]{6}$/;
        setIsValid(codigoRegex.test(value));
    };

    return (
        <Container>
            <Form>
                <TextWrapper>
                    <h1>Insira o código </h1>
                    <p>Insira o código de verificação enviado para o e-mail <b>coafra.cooperativa@gmail.com</b></p>
                </TextWrapper>

                <Input
                    type="text"
                    placeholder="Insira o código"
                    name="codigo"
                    value={codigo}
                    onChange={handleCodigoChange}
                />

                <StyledLink to="/NovaSenha">
                    <StyledButton style={{
                        backgroundColor: isValid ? '#AC883F' : '#ccc',
                    }}>
                        Continuar
                    </StyledButton>
                </StyledLink>
            </Form>
        </Container>
    );
};
