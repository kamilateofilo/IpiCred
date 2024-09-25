import React, { useState } from 'react';
import { Input } from "../../styles/Input";
import { Form, TextWrapper, Container, StyledButton, StyledLink } from "./styled";

export const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        validatePasswords(value, confirmPassword);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);
        validatePasswords(password, value);
    };

    const validatePasswords = (password: string, confirmPassword: string) => {
        const isPasswordValid = password.length >= 8; 
        const isBothFilled = password && confirmPassword;

        if (isBothFilled) {
            const isConfirmPasswordValid = password === confirmPassword;
            if (!isConfirmPasswordValid) {
                setErrorMessage(confirmPassword.length >= 8 ? 'As senhas não coincidem.' : '');
            } else {
                setErrorMessage('');
            }
            setIsValid(isPasswordValid && isConfirmPasswordValid);
        } else {
            setErrorMessage('');
            setIsValid(false);
        }
    };

    return (
        <Container>
            <Form>
                <TextWrapper>
                    <h1>Insira nova senha</h1>
                    <p>Crie uma nova senha para a sua conta.</p>
                </TextWrapper>

                <Input
                    type="password"
                    placeholder="Nova senha"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange} 
                />

                <Input
                    type="password"
                    placeholder="Confirme a nova senha"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange} 
                />

                {errorMessage && confirmPassword.length >= 8 && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <StyledLink to="/SenhaAlteradaSucesso">
                    <StyledButton style={{
                        backgroundColor: isValid ? '#AC883F' : '#ccc',
                    }}>
                        Finalizar
                    </StyledButton>
                </StyledLink>
            </Form>
        </Container>
    );
};
