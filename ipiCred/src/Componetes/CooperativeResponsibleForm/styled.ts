import styled  from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 19px;
    z-index: 100;

    >p,a {
      color: #232528;
      font-size: 14px;
      font-weight: 400;
    }
`;

export const Button = styled.button`
  width: 250px;
  padding: 15px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  background-color: #E4E4E4;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-top: 2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;

  >h3 {
    color: #232528CC;
  }

  >p {
   color:  #79747E;
   font-weight: 400;
   font-size: 16px;
   margin-bottom: 26px;
  }
`;




