import styled from 'styled-components';

export const Background = styled.div`
  background-color: #E5DAC3;
  padding: 100px;
  position: relative;
  text-align: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const ImgAspiral = styled.img`
  position: absolute;
  top: -80px;
  width: 400px;
  z-index: 10; 

  &:first-of-type {
    left: -45px;
  }

  &:last-of-type {
    right: -40px;
    left: auto;
    margin-top: 500px;
  }

  @media (max-width: 768px) {
    width: 300px; 
  }
`;

export const ContainerPainel = styled.div`
  max-width: 900px;
  margin: auto;
  background-color: #FBFAC6;
  border-radius: 15px;
  padding: 20px; 
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 

  @media (max-width: 768px) {
    padding: 10px; 
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  width: 100%; 
  justify-items: center; 

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
  }
`;

export const CardPainel = styled.div`
  width: 270px; 
  height: 130px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px; 

  .card-title {
    font-size: 13.5px;
    margin-top: 8px;
  }

  .card-text {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    width: 100%; 
    max-width: 300px; 
    height: auto; 
  }

  @media (max-width: 480px) {
    max-width: 100%; 
  }
`;
