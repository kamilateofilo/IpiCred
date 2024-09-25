import React, { useState } from 'react';
import { Input } from "../../styles/Input";
import { Form, TextWrapper, Container, StyledButton, StyledLink } from "./styled";

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(value));
    };

    return (
        <Container>
            <Form>
                <TextWrapper>
                    <h1>Recuperação de senha</h1>
                    <p>Insira o e-mail cadastrado para receber o código de redefinição de senha.</p>
                </TextWrapper>

                <Input
                    type="email"
                    placeholder="Insira o seu e-mail"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                   
                />

                <StyledLink to="/VerificarCodigo">
                    <StyledButton  style={{
                        backgroundColor: isValid ? '#AC883F' : '#ccc', 
                    }}>
                        Continuar
                    </StyledButton>
                </StyledLink>
            </Form>
        </Container>
    );
};
