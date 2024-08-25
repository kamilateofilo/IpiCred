import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  max-width: 600px;
  margin: 7.8rem;
  border-radius: 0.5rem;
  background-color: #ffffff;

  @media (max-width: 768px) {
    margin-left: 0.5rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    margin-left: 0.5rem; 
    padding: 1rem;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > p {
    color: #79747E;
    font-size: 16px;
    font-weight: 400;
  }
`;


export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > h1, h3 {
    color: #4D4D4D;
  }

  > h1 {
    font-size: 32px;
    font-weight: 700;
  }

  > h3 {
    margin-top: 15px;
  }

  > p {
    color: #79747E;
    font-weight: 400;
    font-size: 16px;
    margin-top: 10px;
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
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #E4E4E4;
  }
`;
