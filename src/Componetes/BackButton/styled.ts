import styled from "styled-components";
//import { Link } from 'react-router-dom';

export const Conteiner = styled.div`
    margin: 1em;
`;

export const LeftButton = styled.div`
    position: absolute;
    top: 11%;

    >img {
        margin-right: 10px;
    }
`;

export const StyledLink = styled.span`
    color: #77787A;
    font-weight: 600;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    cursor: pointer;

    @media (max-width: 600px) {
        margin-bottom: 50px;
        font-size: 14px;
        color: #333;
    }
`;

