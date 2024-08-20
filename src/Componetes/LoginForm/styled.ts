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
  margin-bottom: 20px;
  border-radius: 50px;
  border: 1px solid #79747E;
  color: #232528;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  padding: 10px;
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
    font-size: 14px;
    height: 40px;
    padding: 8px;
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

export const Icon = styled.img`
  position: absolute;
  top: 70%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 768px) {
    top: 73%;
    right: 5px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #E4E4E4;
  color: #ffffff;
  margin-top: 2em;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;
