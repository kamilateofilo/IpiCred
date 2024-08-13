import styled from "styled-components";


export const Conteiner = styled.div`
    position: fixed;
    top: 14%; 
    left: 10px; 
    z-index: 1000;

    
    @media (max-width: 600px) {
        top: 7%;
        font-size: 14px;
        color: #333;
    }
`;


export const StyledLink = styled.span`
    color: #77787A;
    font-weight: 600;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    cursor: pointer;

    >img {
        margin-right: 4px;
    }
`;

