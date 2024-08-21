import styled from "styled-components";
import { Link } from 'react-router-dom';



export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 50%;
  width: 40%;
  gap: 10px;
  z-index: 100;


  @media (max-width: 768px) {
    margin-left: 0;
    width: 90%;
    margin: 0 auto;
  }
`;


export const Conteiner = styled.div`
  margin-top: 25%;

  @media (max-width: 768px) {
    margin-top: 50%;
  }
`;

export const Input = styled.input`
  margin-bottom: 15px;
  border-radius: 50px;
  border: 1px solid #79747E;
  color: #49454F;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  padding: 10px 40px 10px 10px;
  height: 50px;

  &::placeholder {
    color: #49454F;
    font-size: 16px;
    font-family: "Roboto";
    font-weight: 400;
  }

  width: 100%;
  padding: 10px;
  padding-right: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 16px;
    height: 40px;
    padding: 8px;

    &::placeholder {
      font-size: 15px;
    }
  }
`;



export const InputWrapper = styled.div`
     position: relative;
     display: block;
`; 

export const Icon = styled.img`
  position: absolute;
  top: 36%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 768px) {
    top: 32%;
    right: 7px;
  }
`;


export const StyledLink = styled(Link)`
  color: #AC883F;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;


export const Button = styled.button<{ disabled: boolean }>`
  background-color: ${props => props.disabled ? '#d3d3d3' : '#AC883F'};
  color: white;
  border: none;
  width: 100%;
  padding: 10px;
  margin-top: 2em;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};


   @media (max-width: 768px) {
     font-size: 16px;
     padding: 8px;
   }
`;


export const ErrorMessage = styled.p`
  color: red;
  font-size: 15px;
  top: 10px;

  @media (max-width: 768px) {
     font-weight: 500;
     font-size: 15px;
  }
`;

