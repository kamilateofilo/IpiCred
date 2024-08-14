import styled from 'styled-components';


const colors = {
  active: '#AC883F', 
  inactive: '#E4E4E4', 
};


export const Button = styled.button<{ isValid?: boolean }>`
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
background-color: ${({ isValid }) => (isValid ? colors.active : colors.inactive)};

cursor: ${({ isValid }) => (isValid ? 'pointer' : 'not-allowed')};

&:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }


@media (max-width: 600px) {
  max-width: 100%;
}
`;