import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Link as RouterLink } from 'react-router-dom';



export const Form = styled.form`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-left: 50%;
   width: 40%;
   gap: 10px;
   z-index: 100;
`;

export const Conteiner = styled.div`
     margin-top: 25%;
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
`;

export const StyledLink = styled(Link)`
    color: #AC883F;
    font-weight: bold;
    text-decoration: none;
    font-size: 16px;
`;

export const Icon = styled.img`
  position: absolute;
  top: 71%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
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
`;