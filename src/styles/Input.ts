import styled from "styled-components";

export const Input = styled.input`
  border-radius: 50px;
  border: 1px solid #79747E;
  color: #49454F;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  padding: 10px;
  width: 100%;
  height: 50px;
  
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #49454F;
    font-size: 15px;
    font-family: "Roboto";
    font-weight: 400;
  }
`;

