import styled from 'styled-components';

interface ButtonProps {
    disabled?: boolean;
    isValid?: boolean;
}


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
margin: 10px auto;
background-color: ${props => props.disabled ? '#AC883F' : (props.isValid ? '#E4E4E4' : '')};
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};


@media (max-width: 600px) {
  max-width: 100%;
}
`;