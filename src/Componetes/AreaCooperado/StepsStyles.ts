import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  max-width: 600px;
  margin: 2.5rem auto;
  padding: 1.2rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  font-weight: 600;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p, a {
    color: #79747E;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    color: #79747E;
  }

  > p {
    color: #79747E;
    font-weight: 400;
    font-size: 16px;
    margin-top: 15px;
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  > div,
  > input,
  > select {
    flex: 1;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 20px;
  border: 1px solid #dcdcdc;
  font-size: 16px;
  color: #79747E;
  background-color: #f9f9f9;
  transition: border-color 0.3s;

  &:focus {
    border-color: #AC883F;
    outline: none;
  }

  &:disabled {
    background-color: #e4e4e4;
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 15px;
  border-radius: 20px;
  border: 1px solid #dcdcdc;
  font-size: 16px;
  color: #79747E;
  background-color: #f9f9f9;
  transition: border-color 0.3s;

  &:focus {
    border-color: #AC883F;
    outline: none;
  }

  &:disabled {
    background-color: #e4e4e4;
    cursor: not-allowed;
  }
`;

interface ButtonProps {
  isValid?: boolean;
  disabled?: boolean;
}

const activeStyle = css`
  background-color: #AC883F;
`;

const inactiveStyle = css`
  background-color: #E4E4E4;
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: 250px;
  padding: 15px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;

  ${props => (props.isValid ? activeStyle : inactiveStyle)}

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const CheckboxWrapper = styled.div`
  margin-top: 10px;

  label {
    font-size: 16px;
    color: #79747E;
    display: flex;
    align-items: center;
    
    input {
      margin-right: 10px;
    }
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const DependenteItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

export const DependentesList = styled.div`
  margin-top: 20px;
`;