import styled from 'styled-components';

export const HomeSection = styled.section`
  margin-top: 40px;
  padding-top: 15px;
  margin-top: 5rem;
`;

export const TextContainer = styled.div`
  padding: 20px;
`;

export const ImgFluid = styled.img`
  width: 450px;
  top: 20px;
  left: 46px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const ContainerBackground = styled.div`
  border: 1px solid #976A0F;
  border-radius: 15px;
  position: absolute;
  width: 480px;
  height: 350px;
  top: 5px;
  left: 15px;
  z-index: 1;

  &.img1 {
    left: 52px; 
    top: 24px; 
    width: 470px; 
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: auto;

    &.img1 {
      left: 0;
      top: 0;
      width: 100%;
      max-width: 300px;
      height: auto;
    }
  }
`;

export const ContainerWrapper = styled.div`
  position: relative;
`;

export const TextCaixa = styled.h5`
  width: 280px;
  height: 30px;
  font-size: 13px;
  color: #fff;
  background-color: #5F4B23;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBanner = styled.p`
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 50px;
  color: #5F4B23;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SpanBanner = styled.span`
  color: #AC883F;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #5F4B23;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Btn = styled.button`
  background-color: #AC883F;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
