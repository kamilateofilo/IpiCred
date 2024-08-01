import styled from 'styled-components';
import { Button as DefaultButton } from "../../Componetes/CooperativeResponsibleForm/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
    height: 100vh;
    padding: 0 1em;
    position: relative;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    padding: 2em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 8px;
    margin-top: 50px;

    @media (max-width: 768px) {
        margin-top: 60px;
    }
`;

export const ContinueButton = styled(DefaultButton)`
    margin-top: 1em;
    margin-left: 150px;

    @media (max-width: 768px) {
        margin-left: 60px;
    }
`;

export const BackButtonStyled = styled.div`
    position: absolute;
    left: 20px;
    top: -25px;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 10;
    font-weight: 600;
    color: #77787A;
    
    @media (max-width: 768px) {
        top: 20px; 
        right: 300px;
    }
`;

