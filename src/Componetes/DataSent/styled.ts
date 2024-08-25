import styled from "styled-components";
import { Link } from 'react-router-dom';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 4.7rem;

    > p {
      color: #79747E;
      font-weight: 400;
      font-size: 24px;
      margin-top: 10px;
    }

    @media (max-width: 768px) {
      margin-left: 0.5rem;
      padding: 1rem;
    }

    @media (max-width: 480px) {
       margin-left: 0.5rem; 
       padding: 1rem;
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
    background-color: #AC883F;
    color: #ffffff;
    border: none;
    margin-top: 1rem;
    cursor: pointer;

  
    @media (max-width: 600px) {
      max-width: 100%;
    }
`;





