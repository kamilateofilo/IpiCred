import styled, {css} from "styled-components";


  interface ButtonProps {
    isValid: boolean;
  }
  
  
  export const Container = styled.div`
    max-width: 100%;
    width: 100%;
    max-width: 600px;
    margin: 2.5rem auto;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  
    @media (max-width: 600px) {
      padding: 1rem;
    }
  `;
  
  export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 17px;
  
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
      color: #232528;
    }
  
    > p {
      color: #79747E;
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 26px;
    }
  `;
  
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
    margin: 10px auto;
  
    ${props => (props.isValid ? activeStyle : inactiveStyle)}
  
    @media (max-width: 600px) {
      max-width: 100%;
    }
  `;

// export const BackButton = styled(BackButtonComponent)`
// margin-bottom: 1rem;

// @media (max-width: 600px) {
//   margin-bottom: 50px;
//   font-size: 14px;
//   color: #333;
// }
// `;
  