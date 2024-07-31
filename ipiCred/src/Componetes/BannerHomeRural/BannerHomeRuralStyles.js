import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 50px;
  padding: 20px; 
`;

export const Container = styled.div`
  background-color: #FFF;
  padding: 20px; 
`;

export const Image = styled.img`
  width: 100%;
  max-width: 550px; 
  height: auto; 
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const TextContainer = styled.div`
  .textBanner {
    color: #3F2409;
    line-height: 1.2;
    font-weight: 750;
    font-size: 35px;
  }

  .span {
    color: #AC883F;
  }

  .text {
    color: #3F2409CC;
    font-size: 16px;
    font-weight: 500;
  }

  .btn {
    margin-top: 10px;
    font-weight: 500;
    background-color: #AC883F;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px; 
  }

  @media (max-width: 768px) {
    .textBanner {
      font-size: 28px;
    }

    .text {
      font-size: 14px;
    }

    .btn {
      padding: 8px 16px; 
      font-size: 14px; 
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin: 0 auto;
  max-width: 1200px; 

  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 10px;
  }
`;

export const Column = styled.div`
  flex: 1;
  padding: 15px;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
