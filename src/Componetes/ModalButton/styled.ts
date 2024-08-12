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
margin-top: 2rem;
background-color: ${props => props.disabled ? '#E4E4E4' : (props.isValid ? '#AC883F' : '')}; 
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};


@media (max-width: 600px) {
  max-width: 100%;
}
`;