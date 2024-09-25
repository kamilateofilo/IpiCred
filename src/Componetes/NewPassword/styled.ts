import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    width: 100%;
    max-width: 650px;
    margin: 2.5rem auto;
    padding: 1.2rem;

    @media (max-width: 768px) {
        padding: 1rem; 
        margin: 7rem auto; 
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (max-width: 600px) {
        gap: 0.8em; 
    }
`;

export const TextWrapper = styled.div`
    margin-top: 15px;

    > h1 {
        color: #4D4D4D;

        @media (max-width: 600px) {
            font-size: 1.5rem;
        }
    }

    > p {
        color: #232528CC;
        margin-top: 40px;
        font-size: 16px;

        @media (max-width: 600px) {
            font-size: 14px; 
            margin-top: 20px;
        }
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    outline: none;

    &:focus {
        outline: none;
    }
`;

export const StyledButton = styled.button`
    width: 100%;
    max-width: 250px;
    padding: 15px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    background-color: #E4E4E4;
    color: #ffffff;
    border: none;
    margin-top: 2rem;
    cursor: pointer;

    @media (max-width: 600px) {
        max-width: 100%; 
        padding: 12px;
        font-size: 12px;
    }
`;
