import styled from 'styled-components';

export const HomeSection = styled.section`
  margin-top: 70px;
  padding-top: 5rem;
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
  height: 100%;
  top: 5px;
  left: 15px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    left: 0;
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
`;

export const Btn = styled.button`
  background-color: #AC883F;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;
