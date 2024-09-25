import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 17%;

    @media (max-width: 768px) {
        margin-top: 55%;
        >h1{
          font-size: 25px;
        }
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    outline: none;


    &:focus {
        outline: none;
    }

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const StyledButton = styled.button`
    width: 100%;
    padding: 15px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    background-color: #AC883F;
    color: #ffffff;
    border: none;
    margin-top: 2rem;
    cursor: pointer;

    @media (max-width: 600px) {
        max-width: 100%; 
        padding: 12px; 
        font-size: 14px; 
        margin-top: 2rem;
    }
`;
